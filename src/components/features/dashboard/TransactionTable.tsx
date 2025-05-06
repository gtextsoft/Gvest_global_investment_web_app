"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUserAllTransaction } from "@/hooks/userProfileHook";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ITEMS_PER_PAGE = 5;

const TransactionTable = () => {
  const { data, isPending, isError } = useUserAllTransaction();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(data?.data.length / ITEMS_PER_PAGE);

  const paginatedTransactions = data?.data.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    if (currentPage + 1 < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full mx-auto">
      {isPending ? (
        <div className="flex justify-center items-center py-8">
          <span className="text-md md:text-lg text-gray-500">
            Loading investments...
          </span>
        </div>
      ) : isError ? (
        <div className="flex justify-center items-center py-8">
          <span className="text-md md:text-lg text-red-500">
            Failed to load investments. Please try again later.
          </span>
        </div>
      ) : (
        <Table>
          <TableHeader className="bg-lonestar-50 border border-gray-300">
            <TableRow>
              <TableHead className="text-lonestar-900 py-4">Date</TableHead>
              <TableHead className="text-lonestar-900">Purpose</TableHead>
              <TableHead className="text-lonestar-900 py-4">Amount</TableHead>
              <TableHead className="text-lonestar-900 py-4">Type</TableHead>
              <TableHead className="text-lonestar-900 py-4">
                Reference
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedTransactions && paginatedTransactions.length > 0 ? (
              paginatedTransactions.map((tx: any, index: number) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <TableRow
                      className="cursor-pointer"
                    >
                      <TableCell>
                        {new Date(tx.createdAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </TableCell>
                      <TableCell className="max-w-[220px] truncate font-medium py-5">
                        {tx.transaction_purpose}
                      </TableCell>
                      <TableCell className="max-w-[220px] truncate">
                        {tx.transaction_currency}{" "}
                        {tx.transaction_amount.toLocaleString()}
                      </TableCell>
                      <TableCell className="max-w-[220px] truncate">
                        <span
                          className={`px-2 py-1 rounded text-sm font-medium ${
                            tx.transaction_type === "Credit"
                              ? "bg-[#c0ffc0] text-green-950 border-green-950/50"
                              : " border-yellow-950/50 bg-yellow-100 text-yellow-900"
                          }`}
                        >
                          {tx.transaction_type}
                        </span>
                      </TableCell>
                      <TableCell className="max-w-[220px] truncate">
                        {tx.transaction_ref}
                      </TableCell>
                    </TableRow>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md px-4 sm:px-6">
                    <DialogHeader>
                      <DialogTitle className="text-left">
                        Transaction Details
                      </DialogTitle>
                      <DialogDescription className="text-left">
                        Below are more details for the selected transaction.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-3 text-sm">
                      <p>
                        <span className="font-semibold">Description:</span>{" "}
                        {tx.transaction_description}
                      </p>
                      <p>
                        <span className="font-semibold">
                          Transaction Purpose:
                        </span>{" "}
                        {tx.transaction_purpose}
                      </p>
                      <p>
                        <span className="font-semibold">Reference:</span>{" "}
                        {tx.transaction_ref}
                      </p>
                      <p>
                        <span className="font-semibold">
                          Transaction Amount:
                        </span>{" "}
                        {tx.transaction_currency}{" "}
                        {tx.transaction_amount.toLocaleString()}
                      </p>
                      <p>
                        <span className="font-semibold">Transaction Type:</span>{" "}
                        {tx.transaction_type}
                      </p>
                      <p>
                        <span className="font-semibold">Payment Method:</span>{" "}
                        {tx.transaction_payment_method}
                      </p>
                      <p>
                        <span className="font-semibold">Discount:</span>{" "}
                        {tx.discount}
                      </p>
                      <p>
                        <span className="font-semibold">Date:</span>{" "}
                        {new Date(tx.createdAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <DialogClose asChild>
                      <Button className="mt-4">Close</Button>
                    </DialogClose>
                  </DialogContent>
                </Dialog>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-5 text-gray-500"
                >
                  No transactions available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}

      {/* Pagination Controls */}
      {Array.isArray(data?.data) && data.data.length > ITEMS_PER_PAGE && (
        // {paginatedTransactions?.length > ITEMS_PER_PAGE && (
        <div className="flex justify-between items-center mt-4">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              currentPage === 0
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : ""
            }`}
          >
            Previous
          </Button>
          <span className="text-sm font-medium text-gray-700">
            Page {currentPage + 1} of {totalPages}
          </span>
          <Button
            onClick={nextPage}
            disabled={currentPage + 1 >= totalPages}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              currentPage + 1 >= totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : ""
            }`}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default TransactionTable;

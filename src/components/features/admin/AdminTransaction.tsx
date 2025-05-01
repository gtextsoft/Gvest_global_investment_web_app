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
import { useAdminAllTransaction } from "@/hooks/useAdminMutation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ITEMS_PER_PAGE = 7;

const AdminTransactionTable = () => {
  const { data, isPending, isError } = useAdminAllTransaction();
  const [currentPage, setCurrentPage] = useState(0);

  const transactions = data?.data?.transactions || [];
  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);

  const paginatedTransactions = transactions.slice(
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
        <>
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
              {paginatedTransactions.length > 0 ? (
                paginatedTransactions.map((tx: any, index: number) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <TableRow className="cursor-pointer">
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
                    <DialogContent className="sm:max-w-md p-0 gap-0">
                      <DialogHeader className="pt-6 pb-2 px-4 sm:px-6 shadow">
                        <DialogTitle className="text-left">
                          Transaction Details
                        </DialogTitle>
                        <DialogDescription className="text-left">
                          Below are more details for the selected transaction.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-3 text-sm pt-4 px-4 sm:px-6 max-h-60 md:max-h-full overflow-y-auto">
                        <p>
                          <span className="font-semibold">Customer:</span>{" "}
                          {tx.customer}
                        </p>
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
                          <span className="font-semibold">Amount:</span>{" "}
                          {tx.transaction_currency}{" "}
                          {tx.transaction_amount.toLocaleString()}
                        </p>
                        <p>
                          <span className="font-semibold ">
                            Transaction Type:
                          </span>{" "}
                          <span
                            className={`px-2 py-1 rounded-sm font-semibold ${
                              tx.transaction_type === "Credit"
                                ? "bg-[#c0ffc0] text-green-950 border-green-950/50"
                                : " border-yellow-950/50 bg-yellow-100 text-yellow-900"
                            }`}
                          >
                            {tx.transaction_type}
                          </span>
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
                          <span className="font-semibold">Created By:</span>{" "}
                          {tx.createdBy}
                        </p>
                        <p>
                          <span className="font-semibold">User ID:</span>{" "}
                          {tx.user}
                        </p>
                        <p>
                          <span className="font-semibold">Created At:</span>{" "}
                          {new Date(tx.createdAt).toLocaleDateString("en-GB")}
                        </p>
                        <p>
                          <span className="font-semibold">Updated At:</span>{" "}
                          {new Date(tx.updatedAt).toLocaleDateString("en-GB")}
                        </p>
                      </div>
                      <DialogClose asChild>
                        <Button className="mt-4 mb-3 mx-2">Close</Button>
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-6">
              <Button
                onClick={prevPage}
                disabled={currentPage === 0}
                variant="outline"
              >
                Previous
              </Button>
              <span className="text-sm font-medium text-gray-700">
                Page {currentPage + 1} of {totalPages}
              </span>
              <Button
                onClick={nextPage}
                disabled={currentPage + 1 >= totalPages}
                variant="outline"
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdminTransactionTable;

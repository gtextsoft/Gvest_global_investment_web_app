"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAdminAllTransaction } from "@/hooks/useAdminMutation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Transaction {
  _id: string;
  transaction_type: string;
  transaction_amount: number;
  customer: string;
  transaction_description: string;
  transaction_currency: string;
  transaction_payment_method: string;
  discount: number;
  transaction_ref: string;
  transaction_purpose: string;
  user: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const ITEMS_TO_DISPLAY = 6;

const RecentTransactionTable = () => {
  const { data, isPending, isError } = useAdminAllTransaction();
  const router = useRouter();
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const displayedTransactions =
    data?.data?.transactions?.slice(0, ITEMS_TO_DISPLAY) || [];

  const handleTransactionClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsDialogOpen(true);
  };

  return (
    <div className="grid w-full mx-auto md:col-span-2 gap-5">
      <div className="flex justify-between items-center w-full bg-white rounded-t-lg">
        <h2 className="text-base md:text-xl font-medium">
          Recent Transactions
        </h2>
        <Button
          variant="link"
          className="py-0 px-0 md:px-4 text-xs md:text-sm hover:text-lonestar-950"
          onClick={() => router.push("/admin/transactions")}
        >
          View More
        </Button>
      </div>

      {isPending ? (
        <div className="flex justify-center items-center py-8">
          <span className="text-md md:text-lg text-gray-500">
            Loading transactions...
          </span>
        </div>
      ) : isError ? (
        <div className="flex justify-center items-center py-8">
          <span className="text-md md:text-lg text-red-500">
            Failed to load transactions. Please try again later.
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
              {displayedTransactions.length > 0 ? (
                displayedTransactions.map((tx: Transaction, index: number) => (
                  <Dialog 
                    key={index}
                    open={selectedTransaction?._id === tx._id && isDialogOpen}
                    onOpenChange={(open) => {
                      setIsDialogOpen(open);
                      if (!open) setSelectedTransaction(null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <TableRow 
                        className="cursor-pointer hover:bg-lonestar-50/50"
                        onClick={() => handleTransactionClick(tx)}
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
                    <DialogContent className="px-0 pt-0 gap-0 sm:max-w-md max-h-[90vh] overflow-hidden flex flex-col">
                      <DialogHeader className="px-4 py-4 text-left flex-shrink-0 shadow">
                        <DialogTitle>Transaction Details</DialogTitle>
                        <DialogDescription>
                          Quick overview of transaction information
                        </DialogDescription>
                      </DialogHeader>
                      <div className="px-4 space-y-4 py-4 overflow-y-auto flex-1">
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Customer</p>
                          <p className="text-sm text-gray-500">
                            {tx.customer}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Description</p>
                          <p className="text-sm text-gray-500">
                            {tx.transaction_description}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Transaction Purpose</p>
                          <p className="text-sm text-gray-500">
                            {tx.transaction_purpose}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Reference</p>
                          <p className="text-sm text-gray-500">
                            {tx.transaction_ref}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Amount</p>
                          <p className="text-sm text-gray-500">
                            {tx.transaction_currency} {tx.transaction_amount.toLocaleString()}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Transaction Type</p>
                          <p className="text-sm text-gray-500">
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
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                          <div className="space-y-2 flex-1">
                            <p className="text-sm font-medium">Payment Method</p>
                            <p className="text-sm text-gray-500">
                              {tx.transaction_payment_method}
                            </p>
                          </div>
                          <div className="space-y-2 flex-1">
                            <p className="text-sm font-medium">Discount</p>
                            <p className="text-sm text-gray-500">
                              {tx.discount}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                          <div className="space-y-2 flex-1">
                            <p className="text-sm font-medium">Created By</p>
                            <p className="text-sm text-gray-500">
                              {tx.createdBy}
                            </p>
                          </div>
                          <div className="space-y-2 flex-1">
                            <p className="text-sm font-medium">User ID</p>
                            <p className="text-sm text-gray-500">
                              {tx.user}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                          <div className="space-y-2 flex-1">
                            <p className="text-sm font-medium">Created At</p>
                            <p className="text-sm text-gray-500">
                              {new Date(tx.createdAt).toLocaleDateString("en-GB")}
                            </p>
                          </div>
                          <div className="space-y-2 flex-1">
                            <p className="text-sm font-medium">Updated At</p>
                            <p className="text-sm text-gray-500">
                              {new Date(tx.updatedAt).toLocaleDateString("en-GB")}
                            </p>
                          </div>
                        </div>
                        <div className="flex px-2">
                          <Button
                            className="w-full mt-4"
                            onClick={() =>
                              router.push(`/admin/transactions/${tx._id}`)
                            }
                          >
                            View Full Details
                          </Button>
                        </div>
                      </div>
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
        </>
      )}
    </div>
  );
};

export default RecentTransactionTable;

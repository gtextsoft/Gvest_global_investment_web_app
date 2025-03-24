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
import React from "react";
import { Button } from "@/components/ui/button";

// Transactions Data
const transactions = [
  {
    refId: "GVETR9VDXXA9WXB",
    amount: "NGN 100,000",
    type: "Debit",
    date: "Jan 09, 2025",
    user: "EWAOLUWA ADENIJI",
  },
  {
    refId: "GVETRNUVKCFFQ8I",
    amount: "NGN 10,000,000",
    type: "Debit",
    date: "Jan 02, 2025",
    user: "Olusegun Agbebi",
  },
  {
    refId: "GVETRNUVKCFFQ8I",
    amount: "NGN 10,000,000",
    type: "Debit",
    date: "Jan 02, 2025",
    user: "Olusegun Agbebi",
  },
  {
    refId: "GVETRNUVKCFFQ8I",
    amount: "NGN 10,000,000",
    type: "Debit",
    date: "Jan 02, 2025",
    user: "Olusegun Agbebi",
  },
  {
    refId: "GVETR9VDXXA9WXB",
    amount: "NGN 100,000",
    type: "Debit",
    date: "Jan 09, 2025",
    user: "EWAOLUWA ADENIJI",
  },
  {
    refId: "GVETRNUVKCFFQ8I",
    amount: "NGN 10,000,000",
    type: "Debit",
    date: "Jan 02, 2025",
    user: "Olusegun Agbebi",
  },
  {
    refId: "GVETR9VDXXA9WXB",
    amount: "NGN 100,000",
    type: "Debit",
    date: "Jan 09, 2025",
    user: "EWAOLUWA ADENIJI",
  },
  {
    refId: "GVETR9VDXXA9WXB",
    amount: "NGN 100,000",
    type: "Debit",
    date: "Jan 09, 2025",
    user: "EWAOLUWA ADENIJI",
  },
  {
    refId: "GVETRNUVKCFFQ8I",
    amount: "NGN 10,000,000",
    type: "Debit",
    date: "Jan 02, 2025",
    user: "Olusegun Agbebi",
  },
  {
    refId: "GVETR9VDXXA9WXB",
    amount: "NGN 100,000",
    type: "Debit",
    date: "Jan 09, 2025",
    user: "EWAOLUWA ADENIJI",
  },
  {
    refId: "GVETRNUVKCFFQ8I",
    amount: "NGN 10,000,000",
    type: "Debit",
    date: "Jan 02, 2025",
    user: "Olusegun Agbebi",
  },
];

// Show only first 6 investors
const ITEMS_TO_DISPLAY = 6;
const displayedTransactions = transactions.slice(0, ITEMS_TO_DISPLAY);

const RecentTransactionTable = () => {
  const router = useRouter();

  return (
    <div className="grid w-full mx-auto md:col-span-2 gap-5">
      <div className="flex justify-between items-center w-full bg-white rounded-t-lg">
        <h2 className="text-base md:text-xl font-medium">
          Recents Transaction
        </h2>
        <Button
          variant="link"
          className="py-0 px-0 md:px-4 text-xs md:text-sm hover:text-lonestar-950"
          onClick={() => router.push("/admin/transactions")}
        >
          View More
        </Button>
      </div>
      <Table>
        <TableHeader className="bg-lonestar-50 border border-gray-300">
          <TableRow>
            <TableHead className="text-lonestar-900 py-4">Ref ID</TableHead>
            <TableHead className="text-lonestar-900 py-4">Amount</TableHead>
            <TableHead className="text-lonestar-900 py-4">Type</TableHead>
            <TableHead className="text-lonestar-900 py-4">Date</TableHead>
            <TableHead className="text-lonestar-900 py-4">User</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedTransactions.length > 0 ? (
            displayedTransactions.map((transactions, index) => (
              <TableRow
                key={index}
                className="cursor-pointer hover:bg-lonestar-50/80"
                onClick={() => router.push(`/dashboard/investors/${index}`)}
              >
                <TableCell className="font-medium py-5">
                  {transactions.refId}
                </TableCell>
                <TableCell>{transactions.amount}</TableCell>
                <TableCell>{transactions.type}</TableCell>
                <TableCell>{transactions.date}</TableCell>
                <TableCell>{transactions.user}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-5 text-gray-500">
                No investors available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentTransactionTable;

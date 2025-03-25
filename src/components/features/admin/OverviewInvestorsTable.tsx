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

// Investors Data
const investorsList = [
  {
    name: "Gbade Adetona",
    email: "tona_ga@yahoo.co.uk",
    recentPayment: "$2,500",
    investments: 5,
    priority: "View Detail",
  },
  {
    name: "Kenechukwu Aneke",
    email: "ken.aneke@outlook.com",
    recentPayment: "$1,200",
    investments: "Credit",
    priority: "View Detail",
  },
  {
    name: "Oyetayo TOBI",
    email: "oyetayo93@gmail.com",
    recentPayment: "$0",
    investments: "Credit",
    priority: "View Detail",
  },
  {
    name: "Joseph Shaibu",
    email: "jshaibu58@gmail.com",
    recentPayment: "$200",
    investments: "Credit",
    priority: "View Detail",
  },
  {
    name: "Jane Doe",
    email: "janedoe@example.com",
    recentPayment: "$3,400",
    investments: 7,
    priority: "View Detail",
  },
  {
    name: "John Smith",
    email: "johnsmith@example.com",
    recentPayment: "$4,500",
    investments: 8,
    priority: "View Detail",
  },
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    recentPayment: "$0",
    investments: 2,
    priority: "View Detail",
  },
];

// Show only first 6 investors
const ITEMS_TO_DISPLAY = 6;
const displayedInvestors = investorsList.slice(0, ITEMS_TO_DISPLAY);

const OverviewInvestorsTable = () => {
  const router = useRouter();

  return (
    <div className="grid w-full mx-auto md:col-span-2 gap-5">
      <div className="flex justify-between items-center w-full bg-white rounded-t-lg">
        <h2 className="text-base md:text-xl font-medium">List of Investors</h2>
        <Button
          variant="link"
          className="py-0 px-0 md:px-4 text-xs md:text-sm hover:text-lonestar-950"
          onClick={() => router.push("/admin/investors")}
        >
          View More
        </Button>
      </div>
      <Table>
        <TableHeader className="bg-lonestar-50 border border-gray-300">
          <TableRow>
            <TableHead className="text-lonestar-900 py-4">Name</TableHead>
            <TableHead className="text-lonestar-900 py-4">Email</TableHead>
            <TableHead className="text-lonestar-900 py-4">
              Recent Payment
            </TableHead>
            <TableHead className="text-lonestar-900 py-4">
              No. of Investments
            </TableHead>
            <TableHead className="text-lonestar-900 py-4">Priority</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedInvestors.length > 0 ? (
            displayedInvestors.map((investor, index) => (
              <TableRow
                key={index}
                className="cursor-pointer hover:bg-lonestar-50/50"
                onClick={() => router.push(`/dashboard/investors/${index}`)}
              >
                <TableCell className="font-medium py-5">
                  {investor.name}
                </TableCell>
                <TableCell>{investor.email}</TableCell>
                <TableCell>{investor.recentPayment}</TableCell>
                <TableCell>{investor.investments}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/dashboard/investors/${index}`);
                    }}
                  >
                    {investor.priority}
                  </Button>
                </TableCell>
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

export default OverviewInvestorsTable;

"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const InvestorsTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
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
  const ITEMS_TO_DISPLAY = 5;

  const totalPages = Math.ceil(investorsList.length / ITEMS_TO_DISPLAY);

  // Calculate paginated data
  const paginatedInvestors = investorsList.slice(
    currentPage * ITEMS_TO_DISPLAY,
    (currentPage + 1) * ITEMS_TO_DISPLAY
  );

  // Navigation handlers
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
    <div>
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
          {paginatedInvestors.length > 0 ? (
            paginatedInvestors.map((investor, index) => (
              <TableRow
                key={index}
                className="cursor-pointer hover:bg-lonestar-50/50"
                // onClick={() => router.push(`/dashboard/investors/${index}`)}
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
                    //   router.push(`/dashboard/investors/${index}`);
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

      {/* Pagination Controls */}
      {investorsList.length > ITEMS_TO_DISPLAY && (
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

          {/* Page Indicator */}
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

export default InvestorsTable;

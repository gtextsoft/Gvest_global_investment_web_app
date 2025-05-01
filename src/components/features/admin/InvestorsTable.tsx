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
import { useAllUsers } from "@/hooks/adminHooks";
import { useRouter } from "next/navigation";

const ITEMS_PER_PAGE = 10;

const InvestorsTable = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useAllUsers();
  const [currentPage, setCurrentPage] = useState(0);

  const users = data?.data?.users || [];
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const paginatedInvestors = users.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    if (currentPage + 1 < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (isLoading) return <div>Loading investors...</div>;
  if (isError) return <div>Failed to load investors.</div>;

  return (
    <div>
      <Table>
        <TableHeader className="bg-lonestar-50 border border-gray-300">
          <TableRow>
            <TableHead className="text-lonestar-900 py-4">Name</TableHead>
            <TableHead className="text-lonestar-900 py-4">Email</TableHead>
            <TableHead className="text-lonestar-900 py-4">Phone</TableHead>
            <TableHead className="text-lonestar-900 py-4">
              No. of Investments
            </TableHead>
            <TableHead className="text-lonestar-900 py-4">
              Verification
            </TableHead>
            <TableHead className="text-lonestar-900 py-4">Priority</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedInvestors.length > 0 ? (
            paginatedInvestors.map((investor: any, index: number) => (
              <TableRow
                key={index}
                className="cursor-pointer hover:bg-lonestar-50/50"
                onClick={() => router.push(`/admin/investors/${investor._id}`)}
              >
                <TableCell className="font-medium py-5 capitalize">
                  {investor.first_name} {investor.last_name}
                </TableCell>
                <TableCell>{investor.email}</TableCell>
                <TableCell>{investor.phone}</TableCell>
                <TableCell className="text-center">
                  {investor.noOfInvestments}
                </TableCell>
                <TableCell className="text-center">
                  {investor.account_verification === true ? "True" : "False"}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                        router.push(`/admin/investors/${investor._id}`);
                    }}
                  >
                    View Details
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
      {/* Pagination Controls */}
      {users.length > ITEMS_PER_PAGE && (
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

export default InvestorsTable;

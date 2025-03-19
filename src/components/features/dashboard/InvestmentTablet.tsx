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
import { investments } from "@/lib/constant";

const myInvestments = [
  {
    name: "Fractional Ownership Naira Scheme",
    slug: "fractionalOwnershipNairaScheme",
    maturityDate: "30 September 2028",
    amount: "NGN 10,000,000",
    dailyIncome: "NGN 4,931.51",
    status: "Maturing",
  },
  {
    name: "Fractional Ownership Naira Scheme",
    slug: "fractionalOwnershipNairaScheme",
    maturityDate: "30 September 2024",
    amount: "NGN 5,000,000",
    dailyIncome: "NGN 2,739.73",
    status: "Maturing",
  },
  {
    name: "Fractional Ownership Dollar Scheme",
    slug: "fractional-ownership-dollar",
    maturityDate: "31 August 2026",
    amount: "USD 2,000,000",
    dailyIncome: "USD 850.00",
    status: "Maturing",
  },
  {
    name: "Jasper Ibeju Lekki Legacy",
    slug: "jasperIbejuLekkiLegacy",
    maturityDate: "31 August 2027",
    amount: "NGN 4,500,000",
    dailyIncome: "NGN 1,500.00",
    status: "Maturing",
  },
  {
    name: "Euro Investment Plan",
    slug: "euroInvestmentPlan",
    maturityDate: "31 August 2027",
    amount: "NGN 7,000,000",
    dailyIncome: "NGN 2,450.00",
    status: "Maturing",
  },
  {
    name: "Sapphire Ikorodu Heritage",
    slug: "sapphireIkoroduHeritage",
    maturityDate: "31 August 2025",
    amount: "NGN 4,800,000",
    dailyIncome: "NGN 1,700.60",
    status: "Maturing",
  },
];

// Items per page
const ITEMS_PER_PAGE = 5;

const InvestmentTable = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const router = useRouter();

  console.log("investments", investments);

  // Calculate total pages
  const totalPages = Math.ceil(myInvestments.length / ITEMS_PER_PAGE);

  // Calculate paginated data
  const paginatedInvestments = myInvestments.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
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
    <div className="w-full mx-auto">
      <Table>
        <TableHeader className="bg-lonestar-50 border border-gray-300">
          <TableRow>
            <TableHead className="text-lonestar-900 py-4">
              Investment Name
            </TableHead>
            <TableHead className="text-lonestar-900 py-4">
              Maturity Date
            </TableHead>
            <TableHead className="text-lonestar-900 py-4">Amount</TableHead>
            <TableHead className="text-lonestar-900 py-4">
              Daily Income
            </TableHead>
            <TableHead className="text-lonestar-900">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedInvestments.length > 0 ? (
            paginatedInvestments.map((investment, index) => (
              <TableRow
                key={index}
                className="cursor-pointer"
                onClick={() =>
                  router.push(`/dashboard/myinvestments/${investment.slug}`)
                }
              >
                <TableCell className="font-medium py-5">
                  {investment.name}
                </TableCell>
                <TableCell>{investment.maturityDate}</TableCell>
                <TableCell>{investment.amount}</TableCell>
                <TableCell>{investment.dailyIncome}</TableCell>
                <TableCell>
                  <span className="font-normal text-sm rounded-2xl bg-[#c0ffc0] px-3 py-2 h-fit text-green-950">
                    {investment.status}
                  </span>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-5 text-gray-500">
                No investments available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      {myInvestments.length > ITEMS_PER_PAGE && (
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              currentPage === 0
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
          >
            Previous
          </button>

          {/* Page Indicator */}
          <span className="text-sm font-medium text-gray-700">
            Page {currentPage + 1} of {totalPages}
          </span>

          <button
            onClick={nextPage}
            disabled={currentPage + 1 >= totalPages}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              currentPage + 1 >= totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default InvestmentTable;

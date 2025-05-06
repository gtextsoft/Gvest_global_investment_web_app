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
import { useUserAllInvestment } from "@/hooks/userProfileHook";

const ITEMS_PER_PAGE = 5;
type InvestmentItem = {
  name: string;
  ref: string;
  maturity_date: string | Date;
  currency: string;
  actual_cost: number;
  daily_income: number;
  status: string;
};
type FormattedInvestmentItem = {
  name: string;
  slug: string;
  maturityDate: string;
  amount: string;
  dailyIncome: string;
  status: string;
};



const OverviewInvestmentTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isPending, isError } = useUserAllInvestment();
  const router = useRouter();

  const formatInvestmentData = (data: InvestmentItem[]): FormattedInvestmentItem[] => {
    return data.map((item) => ({
      name: item.name,
      slug: item.ref.toLowerCase(),
      maturityDate: new Date(item.maturity_date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      amount: `${item.currency} ${item.actual_cost.toLocaleString()}`,
      dailyIncome: `${item.currency} ${item.daily_income.toFixed(2)}`,
      status: item.status,
    }));
  };

  const formattedInvestments = React.useMemo(() => {
    if (!data?.data || !Array.isArray(data.data)) return [];
    return formatInvestmentData(data.data);
  }, [data]);

  const totalPages = Math.ceil(formattedInvestments.length / ITEMS_PER_PAGE);

  const paginatedInvestments = formattedInvestments.slice(
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
              <TableHead className="text-lonestar-900 py-4">
                Investment Name
              </TableHead>
              <TableHead className="text-lonestar-900 py-4">Amount</TableHead>
              <TableHead className="text-lonestar-900 py-4">
                Maturity Date
              </TableHead>
              <TableHead className="text-lonestar-900 py-4">
                Daily Income
              </TableHead>
              <TableHead className="text-lonestar-900">Status</TableHead>
            </TableRow>
          </TableHeader>
          {data && (
            <TableBody className="border border-gray-300 pb-5">
              {paginatedInvestments.length > 0 ? (
                paginatedInvestments.map((investment, index) => (
                  <TableRow
                    key={index}
                    className="cursor-pointer"
                    onClick={() =>
                      router.push(`/dashboard/myinvestments/${investment.slug}`)
                    }
                  >
                    <TableCell className="max-w-[220px] truncate py-5">
                      <span className="block truncate">{investment.name}</span>
                    </TableCell>
                    <TableCell>{investment.amount}</TableCell>
                    <TableCell>{investment.maturityDate}</TableCell>
                    <TableCell>{investment.dailyIncome}</TableCell>
                    <TableCell>
                      <span className="font-normal text-sm rounded-2xl bg-[#c0ffc0] px-3 py-1 text-green-950 whitespace-nowrap">
                        {investment.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center py-5 text-gray-500"
                  >
                    No investments available.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
      )}

      {/* Pagination Controls */}
      {formattedInvestments.length > ITEMS_PER_PAGE && (
        <div className="flex justify-between items-center mt-4 px-4">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`px-3 md:px-4 py-2 text-xs md:text-sm font-medium rounded-md ${
              currentPage === 0
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : ""
            }`}
          >
            Previous
          </Button>

          <span className="text-xs md:text-sm font-medium text-gray-700">
            Page {currentPage + 1} of {totalPages}
          </span>

          <Button
            onClick={nextPage}
            disabled={currentPage + 1 >= totalPages}
            className={`px-3 md:px-4 py-2 text-xs md:text-sm font-medium rounded-md ${
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

export default OverviewInvestmentTable;

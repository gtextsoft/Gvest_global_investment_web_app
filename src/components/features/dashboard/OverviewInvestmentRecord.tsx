"use client";
import { useUserAllInvestment } from "@/hooks/userProfileHook";
import React, { useState } from "react";
import ItemDetailModal from "../modal/ItemDetailModal";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface RawInvestment {
  _id: string;
  name: string;
  actual_cost: number;
  daily_income: number;
  rate: number;
  tenor: number;
  investment_date: string;
  maturity_date: string;
  currency: string;
  matured: boolean;
  annual_return: number;
  return_on_investment: number;
  status: string;
  ref: string;
}

interface FormattedInvestment {
  name: string;
  totalAmount: string;
  status: string;
  maturityDate: string;
  todayAmount: string;
  ref: string;
  investment_date: string;
  currency: string;
  annual_return: number;
  return_on_investment: number;
}

const OverviewInvestmentRecord = () => {
  const router = useRouter();
  const { data, isPending, isError } = useUserAllInvestment();
  const [selectedInvestment, setSelectedInvestment] =
    useState<FormattedInvestment | null>(null);

  const formatInvestment = (investment: RawInvestment) => ({
    name: investment.name,
    totalAmount: `${investment.currency} ${Number(
      investment.actual_cost
    ).toLocaleString()}`,
    status: investment.status,
    maturityDate: new Date(investment.maturity_date).toLocaleDateString(
      "en-GB",
      {
        weekday: "short",
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
    todayAmount: `${investment.currency} ${Number(
      investment.daily_income
    ).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`,
    ref: investment.ref,
    investment_date: investment.investment_date,
    currency: investment.currency,
    annual_return: investment.annual_return,
    return_on_investment: investment.return_on_investment,
  });

  // Update this line depending on your actual structure
  const latestInvestments = (data?.data || [])
    .slice(0, 5)
    .map(formatInvestment);

  return (
    <section className="w-full">
      <div className="grid gap-0 w-full rounded-xl border border-gray-100 overflow-hidden bg-white shadow-sm">
        <div className="flex justify-between items-center border-b w-full bg-white p-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              My Recent Investments
            </h2>
            <p className="text-sm text-gray-500">
              Track your active investments and returns
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => router.push("/dashboard/investments")}
            className="h-9 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            View All
          </Button>
        </div>

        <div className="divide-y divide-gray-100">
          {isPending ? (
            <div className="flex justify-center items-center py-12">
              <span className="text-sm text-gray-500">
                Loading investments...
              </span>
            </div>
          ) : isError ? (
            <div className="flex justify-center items-center py-12">
              <span className="text-sm text-red-500">
                Failed to load investments. Please try again later.
              </span>
            </div>
          ) : latestInvestments.length < 1 ? (
            <div className="flex justify-center items-center py-12">
              <span className="text-sm text-gray-500">
                No investment records found.
              </span>
            </div>
          ) : (
            latestInvestments.map(
              (investment: FormattedInvestment, index: number) => (
                <div
                  key={index}
                  className="group flex p-6 transition-all duration-200 hover:bg-gray-50/50 cursor-pointer"
                  onClick={() => setSelectedInvestment(investment)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full gap-6">
                    {/* Left Side: Name & Maturity Date */}
                    <div className="flex flex-col gap-3 w-full">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                          <span className="text-lg font-semibold text-gray-600">
                            {investment.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-base font-medium text-gray-900 group-hover:text-gray-700">
                            {investment.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            Matures on {investment.maturityDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            investment.status === "Active"
                              ? "bg-emerald-50 text-emerald-700"
                              : investment.status === "Matured"
                              ? "bg-blue-50 text-blue-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {investment.status}
                        </span>
                      </div>
                    </div>

                    {/* Right Side: Amounts */}
                    <div className="flex flex-col gap-4 items-start md:items-end w-full">
                      <div className="flex flex-col items-start md:items-end">
                        <span className="text-xs font-medium text-gray-500 mb-1">
                          Total Investment
                        </span>
                        <p className="text-lg font-semibold text-gray-900">
                          {investment.totalAmount}
                        </p>
                      </div>
                      <div className="flex flex-col items-start md:items-end">
                        <span className="text-xs font-medium text-gray-500 mb-1">
                          Daily Returns
                        </span>
                        <div className="flex items-center gap-2">
                          <p className="text-lg font-semibold text-emerald-600">
                            {investment.todayAmount}
                          </p>
                          <span className="text-xs text-gray-500">/day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>

      {/* Individual Investment Detail Modal */}
      {selectedInvestment && (
        <ItemDetailModal
          title="Investment Details"
          description="View detailed information about this investment"
          isOpen={!!selectedInvestment}
          onClose={() => setSelectedInvestment(null)}
          viewMoreLink={`/dashboard/investments/${selectedInvestment.ref}`}
        >
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-xl font-semibold text-gray-600">
                  {selectedInvestment.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {selectedInvestment.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Matures on {selectedInvestment.maturityDate}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Total Investment
                  </h4>
                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {selectedInvestment.totalAmount}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Investment Date
                  </h4>
                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {new Date(
                      selectedInvestment.investment_date
                    ).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Status</h4>
                  <p
                    className={`mt-1 text-lg font-semibold ${
                      selectedInvestment.status === "Active"
                        ? "text-emerald-600"
                        : selectedInvestment.status === "Matured"
                        ? "text-blue-600"
                        : "text-amber-600"
                    }`}
                  >
                    {selectedInvestment.status}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Daily Returns
                  </h4>
                  <p className="mt-1 text-lg font-semibold text-emerald-600">
                    {selectedInvestment.todayAmount}
                    <span className="text-sm text-gray-500 ml-1">/day</span>
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Annual Return
                  </h4>
                  <p className="mt-1 text-lg font-semibold text-emerald-600">
                    {selectedInvestment.currency}{" "}
                    {Number(selectedInvestment.annual_return).toLocaleString()}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Return on Investment
                  </h4>
                  <p className="mt-1 text-lg font-semibold text-emerald-600">
                    {selectedInvestment.currency}{" "}
                    {Number(
                      selectedInvestment.return_on_investment
                    ).toLocaleString()}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Investment Reference
                  </h4>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {selectedInvestment.ref}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ItemDetailModal>
      )}
    </section>
  );
};

export default OverviewInvestmentRecord;

"use client";
import { Button } from "@/components/ui/button";
import { useUserAllInvestment } from "@/hooks/userProfileHook";
import { useRouter } from "next/navigation";
import React from "react";

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
}

const OverviewInvestmentRecord = () => {
  const router = useRouter();

  const { data, isPending, isError } = useUserAllInvestment();

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
    ), // e.g., Wed 30 September 2028
    todayAmount: `${investment.currency} ${Number(
      investment.daily_income
    ).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`,
  });

  // Update this line depending on your actual structure
  const latestInvestments = (data?.data || [])
    .slice(0, 5)
    .map(formatInvestment);

  return (
    <section className="w-full">
      <div className="grid gap-0 w-full rounded-lg border overflow-hidden">
        <div className="flex justify-between items-center border-b shadow-lg w-full bg-gray-100 p-6 py-5">
          <h2 className="text-base md:text-xl font-medium">
            My Recent Investments
          </h2>
          <Button
            variant="link"
            className="py-0 px-0 md:px-4 text-xs md:text-sm"
            onClick={() => router.push("/dashboard/investments")}
          >
            View More
          </Button>
        </div>
        {/* Loading and Error States */}

        <div className="divide-y divide-gray-200 overflow-hidden bg-white">
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
          ) : latestInvestments.length < 1 ? (
            <div className="flex justify-center items-center py-8">
              <span className="text-lg text-gray-500">
                No investment records found.
              </span>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 overflow-hidden bg-white rounded-b-lg">
              {latestInvestments.map(
                (investment: FormattedInvestment, index: number) => (
                  <div
                    key={index}
                    className="flex p-6 px-4 md:p-5 transition-all duration-300 bg-white hover:bg-gray-50 hover:scale-[1.008]"
                  >
                    <div className="grid grid-cols-2 items-center w-full gap-4 sm:gap-4">
                      {/* Left Side: Name & Maturity Date */}
                      <div className="flex flex-col gap-1 md:gap-2 w-full">
                        <h4 className="text-base font-medium truncate">
                          {investment.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="bg-orange-200 text-sm md:text-sm text-orange-950 py-1 px-2 font-normal rounded">
                            {investment.status}
                          </span>
                          {/* <span>on</span> */}
                          <p className="text-sm text-gray-600 truncate w-full">
                            on {investment.maturityDate}
                          </p>
                        </div>
                      </div>

                      {/* Right Side: Amounts */}
                      <div className="flex flex-col h-full justify-center gap-1 items-end w-full">
                        <div className="flex">
                          <p className="text-xs sm:text-sm md:text-sm text-gray-800 italic w-fit">
                            {investment.totalAmount}
                          </p>
                        </div>
                        <div className="flex w-fit items-center gap-2 md:gap-4">
                          <div className="flex gap-2 items-baseline w-full">
                            <p className="text-[#34C759] text-sm sm:text-lg md:text-lg truncate w-full">
                              {investment.todayAmount}
                            </p>
                            <span className="inline-block text-gray-800 text-xs">
                              Today
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
        {/* )} */}
      </div>
    </section>
  );
};

export default OverviewInvestmentRecord;

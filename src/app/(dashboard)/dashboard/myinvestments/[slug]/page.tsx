"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  AlertCircle,
  ArrowLeftRight,
  BadgeDollarSign,
  Banknote,
  Boxes,
  BriefcaseBusiness,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  CalendarRange,
  ChartNoAxesCombined,
  ChevronLeft,
  Clock,
  ListOrdered,
  Package,
  PiggyBank,
  Receipt,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { useUserInvestmentDetail } from "@/hooks/userProfileHook";
import { Button } from "@/components/ui/button";

const InvestmentId = () => {
  const params = useParams();
  const slug = params?.slug;
  const upperCaseSlug = typeof slug === "string" ? slug.toUpperCase() : "";
  const { data, isPending, isError } = useUserInvestmentDetail(upperCaseSlug);

  // const params = useParams();
  const filterData = data?.data;

  const DetailItem = ({
    icon,
    text,
  }: {
    icon: React.ReactNode;
    text: string;
  }) => (
    <li className="flex items-center gap-2 text-sm md:text-base text-black-900">
      <span className="size-6 text-black-800">{icon}</span>
      {text}
    </li>
  );

  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-10 px-5">
        <div className="flex flex-col gap-6 px-6 py-6 md:p-6 md:pb-10 bg-white rounded-b-xl min-h-screen">
          {/* <h2 className="font-medium text-xl">Smart Investment</h2> */}
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
              <div className="flex">
                <Button>
                  <ChevronLeft className="!size-5" /> Back To All Investments
                </Button>
              </div>
              <div className="flex flex-col w-full">
                {filterData ? (
                  <div className="flex flex-col items-center gap-4">
                    {/* <Image
                  src={filterData.image.src}
                  alt={filterData.name}
                  width={filterData.image.width}
                  height={filterData.image.height}
                  className="w-96"
                /> */}

                    <div className="flex flex-col gap-3 mt-4 w-full">
                      {/* Header Section */}
                      <div className="flex justify-between items-center gap-1 md:pr-4">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-lg font-semibold">
                            {filterData.name}
                          </h3>
                          <p className="flex flex-col md:flex-row items-baseline gap-2 text-sm text-black-900">
                            <span className="text-xl font-medium">
                              {filterData.currency}
                            </span>
                            <span className="text-xl font-medium text-lonestar-950 px-1">
                              {filterData.actual_cost.toLocaleString()}
                            </span>
                            / per unit
                          </p>
                        </div>

                        <span
                          className={`${
                            filterData.status === "Maturing"
                              ? "bg-yellow-200 text-yellow-900"
                              : "bg-[#c0ffc0] text-green-950"
                          } text-sm font-medium rounded-2xl px-3 py-2 w-fit h-fit`}
                        >
                          {filterData.status}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-base font-normal text-black-950 my-2">
                        {filterData.description}
                      </p>

                      {/* Investment Info Grid */}
                      <div className="grid gap-6 w-full">
                        <div className="flex flex-col gap-4 w-full">
                          <h3 className="text-base font-semibold text-black">
                            Investment Overview
                          </h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm font-normal">
                            <DetailItem
                              icon={<Wallet />}
                              text={`Currency: ${filterData.currency}`}
                            />
                            <DetailItem
                              icon={<BriefcaseBusiness />}
                              text={filterData.investment_type}
                            />
                            <DetailItem
                              icon={<CalendarCheck />}
                              text={`Investment Date: ${new Date(
                                filterData.investment_date
                              ).toLocaleDateString()}`}
                            />
                            <DetailItem
                              icon={<CalendarClock />}
                              text={`Maturity Date: ${new Date(
                                filterData.maturity_date
                              ).toLocaleDateString()}`}
                            />
                            <DetailItem
                              icon={<CalendarDays />}
                              text={`Capital Repayment: ${new Date(
                                filterData.capital_repayment_date
                              ).toLocaleDateString()}`}
                            />
                            <DetailItem
                              icon={<Clock />}
                              text={`${filterData.tenor} Days Tenor`}
                            />
                          </ul>
                        </div>

                        <div className="flex flex-col gap-4 w-full">
                          <h3 className="text-base font-semibold text-black">
                            Return Information
                          </h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm font-normal">
                            <DetailItem
                              icon={<ChartNoAxesCombined />}
                              text={`Annual ROI: ${filterData.rate}%`}
                            />
                            <DetailItem
                              icon={<BadgeDollarSign />}
                              text={` Daily Income: ₦${filterData.daily_income.toLocaleString()}`}
                            />

                            <DetailItem
                              icon={<TrendingUp />}
                              text={`Annual Return: ₦${filterData.annual_return.toLocaleString()}`}
                            />
                            <DetailItem
                              icon={<Banknote />}
                              text={`Total ROI: ₦${filterData.return_on_investment.toLocaleString()}`}
                            />
                            <DetailItem
                              icon={<CalendarRange />}
                              text={`ROI Frequency: every ${filterData.roi_frequency} months`}
                            />
                            <DetailItem
                              icon={<ListOrdered />}
                              text={`Number of ROI Payments: ${filterData.no_of_roi_payments}`}
                            />
                            <DetailItem
                              icon={<ArrowLeftRight />}
                              text={`ROI Payment Index: ${filterData.roi_payment_index}`}
                            />
                            <DetailItem
                              icon={<AlertCircle />}
                              text={`Pending Payment: ${
                                filterData.pending_payment ? "Yes" : "No"
                              }`}
                            />
                          </ul>
                        </div>

                        {/* === Unit Details === */}
                        <div className="flex flex-col gap-4 w-full">
                          <h3 className="text-base font-semibold text-black">
                            Unit & Cost Breakdown
                          </h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm font-normal">
                            <DetailItem
                              icon={<Boxes />}
                              text={`Total Unit: ${filterData.total_unit}`}
                            />
                            <DetailItem
                              icon={<Package />}
                              text={`Unit Price: ₦${filterData.unit_price.toLocaleString()}`}
                            />
                            <DetailItem
                              icon={<Receipt />}
                              text={`Actual Cost: ₦${filterData.actual_cost.toLocaleString()}`}
                            />
                            <DetailItem
                              icon={<PiggyBank />}
                              text={`Deposited: ₦${filterData.deposited_amount.toLocaleString()}`}
                            />
                          </ul>
                        </div>

                        {/* === ROI Payment Dates === */}
                        <div className="flex flex-col gap-4 w-full">
                          <h3 className="text-base font-semibold text-black">
                            ROI Payment Dates
                          </h3>
                          {filterData.annual_return_payment_date?.length > 0 ? (
                            <ul className="list-disc text-sm text-black-950 space-y-3">
                              {filterData.annual_return_payment_date.map(
                                (date: string, i: number) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-2"
                                  >
                                    <CalendarDays className="w-5 h-5 text-black-800" />
                                    {new Date(date).toLocaleDateString(
                                      undefined,
                                      {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                      }
                                    )}
                                  </li>
                                )
                              )}
                            </ul>
                          ) : (
                            <p className="text-sm text-gray-500">
                              No payment dates available.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>No Data</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default InvestmentId;

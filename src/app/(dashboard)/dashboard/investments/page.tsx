"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BriefcaseBusiness, ChartNoAxesCombined, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { investments } from "@/lib/constant";

const InvestmentPage = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("all");

  const router = useRouter();

  const filteredInvestments = investments.filter((inv) => {
    return (
      (selectedType === "all" || inv.type === selectedType) &&
      (selectedCurrency === "all" || inv.currency === selectedCurrency)
    );
  });

  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-10 px-5">
        <div className="flex flex-col gap-6 min-h-screen">
          <div className="flex flex-col gap-6 px-6 py-6 md:p-6 bg-white rounded-b-xl">
            <h2 className="font-medium text-xl">Smart Investment</h2>
            <div className="flex items-center gap-2">
              {/* Step 1: Select Investment Type */}
              <Select onValueChange={setSelectedType} value={selectedType}>
                <SelectTrigger className="w-full md:w-[250px]">
                  <SelectValue placeholder="Select Investment Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Investments</SelectItem>
                  <SelectItem value="simple">Simple Investment</SelectItem>
                  <SelectItem value="compound">Compound Investment</SelectItem>
                </SelectContent>
              </Select>

              {/* Step 2: Select Currency */}
              <Select
                onValueChange={setSelectedCurrency}
                value={selectedCurrency}
              >
                <SelectTrigger className="w-full md:w-[250px]">
                  <SelectValue placeholder="Select Currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Currencies</SelectItem>
                  <SelectItem value="naira">Naira (NGN)</SelectItem>
                  <SelectItem value="dollar">Dollar (USD)</SelectItem>
                  <SelectItem value="euro">Euro (EUR)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-6 py-6 md:p-6 bg-white rounded-xl">
            {/* Filtered Investments */}
            <div className="mt-4">
              <h4 className="text-md font-medium">Filtered Results:</h4>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {filteredInvestments.length > 0 ? (
                filteredInvestments.map((investment) => (
                  <div
                    key={investment.id}
                    className="grid sm:grid-cols-2 gap-5 bg-white shadow-sm justify-items-center items-center border rounded-2xl"
                  >
                    <Image
                      src={investment.image}
                      alt={investment.name}
                      className="w-auto h-64"
                      width={300}
                      height={250}
                    />
                    <div className="flex flex-col w-full gap-4 px-4 py-10">
                      <div className="flex flex-col gap-2">
                        <h4 className="text-base sm:text-lg md:text-lg font-medium leading-normal">
                          {investment.name}
                        </h4>
                        <p className="flow items-baseline gap-2 text-black-900 text-sm">
                          <span className="text-xl font-medium">
                            {investment.currencySign}
                          </span>
                          <span className="text-lonestar-950 text-xl w-full truncate font-medium px-1">
                            {investment.price.toLocaleString()}
                          </span>
                          /per unit
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <ul className="text-sm list-disc font-normal flex flex-col gap-1">
                          <li className="flex items-center gap-1.5 text-black-900">
                            <Clock className="size-4" /> {investment.duration}
                          </li>
                          <li className="flex items-center gap-1.5 text-black-900">
                            <ChartNoAxesCombined className="size-4" />
                            {investment.roi}
                          </li>
                          <li className="flex items-center gap-1.5 text-black-900">
                            <BriefcaseBusiness className="size-4" />
                            {investment.type}
                          </li>
                        </ul>
                        <p className="text-base italic text-end text-blue-700 underline">
                          {investment.slots} slots remaining
                        </p>
                      </div>
                      <Button
                        variant="secondary"
                        className="w-fit px-6 mt-2 hover:bg-lonestar-950 hover:text-white"
                        onClick={() =>
                          router.push(
                            `/dashboard/investments/${investment.slug}`
                          )
                        }
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No matching investments found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPage;

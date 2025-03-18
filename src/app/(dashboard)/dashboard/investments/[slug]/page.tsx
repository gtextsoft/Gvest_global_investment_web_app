"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { investments } from "@/lib/constant";
import { BriefcaseBusiness, ChartNoAxesCombined, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const InvestmentId = () => {
  const params = useParams();
  const filterData = investments.filter((item) => item.slug === params.slug);

  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-10 px-5">
        <div className="flex flex-col gap-6 px-6 py-6 md:p-6 md:pb-10 bg-white rounded-b-xl min-h-screen">
          {/* <h2 className="font-medium text-xl">Smart Investment</h2> */}
          <div className="flex flex-col w-full">
            {filterData.length > 0 ? (
              <div className="flex flex-col gap-4 items-center">
                <Image
                  src={filterData[0].image.src}
                  alt={filterData[0].name}
                  width={filterData[0].image.width}
                  height={filterData[0].image.height}
                  className="w-96"
                />
                <div className="flex flex-col gap-3 mt-4 w-full">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">
                      {filterData[0].name}
                    </h3>
                    <p className="flow items-baseline gap-2 text-black-900 text-sm">
                      <span className="text-xl font-medium">
                        {filterData[0].currencySign}
                      </span>
                      <span className="text-lonestar-950 text-xl font-medium px-1">
                        {filterData[0].price.toLocaleString()}
                      </span>
                      /per unit
                    </p>
                  </div>
                  <p className="font-normal text-base my-2">{filterData[0].paragraph}</p>
                  <div className="flex flex-col gap-3">
                    <ul className="text-sm list-disc font-normal grid grid-cols-1 md:grid-cols-2 gap-5">
                      <li className="flex items-center text-sm md:text-base gap-2 text-black-900">
                        <Clock className="size-6" /> {filterData[0].duration}
                      </li>
                      <li className="flex items-center text-sm md:text-base gap-2 text-black-900">
                        <ChartNoAxesCombined className="size-6" />
                        {filterData[0].roi}
                      </li>
                      <li className="flex items-center text-sm md:text-base gap-2 text-black-900">
                        <BriefcaseBusiness className="size-6" />
                        {filterData[0].type}
                      </li>
                    </ul>
                    <p className="text-lg mt-5 italic text-black-950 underline">
                      {filterData[0].slots} slots remaining
                    </p>
                  </div>
                  <Button variant='default' className="px-10 w-fit mt-5">invest now</Button>
                </div>
              </div>
            ) : (
              <p>No Data</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentId;

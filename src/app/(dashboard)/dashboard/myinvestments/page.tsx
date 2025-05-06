import React from "react";
import OverviewInvestmentTable from "@/components/features/dashboard/OverviewInvestmentTable";

const MyInvestments = () => {
  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-10 md:px-5">
        <div className="flex flex-col gap-6 md:px-6 py-6 md:p-6 bg-white rounded-b-xl min-h-screen">
          <h2 className="font-medium text-lg md:text-xl">My Investments</h2>
          <div className="flex">
            <OverviewInvestmentTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyInvestments;

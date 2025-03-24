import React from "react";
import InvestorsTable from "@/components/features/admin/InvestorsTable";
import RecentTransactionTable from "@/components/features/admin/RecentTransaction";

const Page = () => {
  const stats = [
    { title: "Total Users", value: "20" },
    { title: "Total Transaction in Dollar", value: "$ 60,000" },
    { title: "Total Transaction in Naira", value: "# 1,000,000" },
  ];

  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-5 px-5">
        <div className="flex flex-col gap-6 px-6 py-6 md:p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-4 md:gap-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col justify-between w-full border shadow rounded-lg py-6 px-6 gap-5 bg-white"
              >
                <h3 className="text-sm text-black-600">{stat.title}</h3>
                <p className="text-4xl font-medium text-black truncate">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 bg-white pt-6 pb-10 px-6">
          <InvestorsTable />
          <RecentTransactionTable />
        </div>
      </div>
    </section>
  );
};

export default Page;

import { Button } from "@/components/ui/button";
import React from "react";

const InvestmentRecord = () => {
  const investmentData = [
    {
      name: "Fractional Ownership Naira Scheme",
      totalAmount: "NGN 10,000,000",
      status: "Maturing",
      maturityDate: "Wed 30 September 2028",
      todayAmount: "NGN 4931.51",
    },
    {
      name: "Jasper Ibeju Lekki Legacy",
      totalAmount: "NGN 6,000,000",
      status: "Maturing",
      maturityDate: "27th July 2024",
      todayAmount: "NGN 730,000",
    },
    {
      name: "Sapphire Ikorodu Heritage",
      totalAmount: "NGN 10,000,000",
      status: "Maturing",
      maturityDate: "27th July 2024",
      todayAmount: "NGN 50,000",
    },
  ];
  return (
    <section className="w-full ">
      <div className="grid gap-0 w-full">
        <div className="flex justify-between items-center border-b shadow-lg w-full  p-6 py-5 bg-white rounded-t-lg">
          <h2 className="text-base md:text-xl font-medium">My Investments</h2>
          <Button variant="link" className="py-0 px-0 md:px-4 text-xs md:base">
            View More
          </Button>
        </div>

        <div className="divide-y divide-gray-200 overflow-hidden pb-5 bg-white">
          {investmentData.map((investment, index) => (
            <div
              key={index}
              className="flex p-6 px-4 md:p-6 transition-all duration-300 bg-white hover:bg-lonestar-50 hover:scale-[1.02]"
            >
              <div className="grid grid-cols-2 items-center w-full gap-4 sm:gap-4">
                {/* Left Side: Name & Maturity Date */}
                <div className="flex flex-col gap-1 md:gap-2 w-full">
                  <h4 className="text-base font-medium truncate">
                    {investment.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="bg-orange-200 text-sm md:text-base text-orange-950 py-1 px-2 font-normal rounded">
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
                    <p className="text-xs sm:text-sm md:text-base text-gray-800 italic w-fit">
                      {investment.totalAmount}
                    </p>
                  </div>
                  <div className="flex w-full md:w-fit items-center gap-2 md:gap-4">
                    <div className="flex gap-2 items-center w-full">
                      <p className="text-[#34C759] text-sm sm:text-lg md:text-xl truncate w-full">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentRecord;

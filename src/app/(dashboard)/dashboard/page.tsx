import Image from "next/image";
import React from "react";
import atmSim from "../../../../public/icons/atm_sim.svg";
import KYC from "@/components/features/dashboard/KYC";
import TransactionRecords from "@/components/features/dashboard/TransactionRecord";
import OverviewInvestmentRecord from "@/components/features/dashboard/OverviewInvestmentRecord";

const Page = () => {
  const wallets = [
    {
      name: "Naira Wallet",
      amount: "₦ 302,000",
      walletId: "5355   0348   5945   5045",
      gradient: "bg-[linear-gradient(170deg,#000,#6E0000)]",
    },
    {
      name: "Dollar Wallet",
      amount: "$ 0",
      walletId: "5355   0348   5945   5045",
      gradient: "bg-[linear-gradient(170deg,#000,#03045E)]",
    },
    {
      name: "GBP Wallet",
      amount: "£ 0",
      walletId: "5355   0348   5945   5045",
      gradient: "bg-[linear-gradient(170deg,#000,#8D731D)]",
    },
    {
      name: "Dirhams Wallet",
      amount: "0 د.إ",
      walletId: "5355   0348   5945   5045",
      gradient: "bg-[linear-gradient(170deg,#000,#6E0000)]",
    },
  ];

  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-10 px-5">
        <div className="flex flex-col gap-6 px-6 py-6 md:p-6 bg-white rounded-b-xl">
          <div className="flex items-center flex-row gap-1">
            <h2 className="font-medium text-xl"> Good Afternoon</h2>
            <p className="font-normal text-xl">Fred,</p>
          </div>
          <div className="flex gap-2 w-full overflow-x-scroll pb-8">
            {wallets.map((wallet, index) => (
              <div
                key={index}
                className={`flex flex-col gap-4 justify-between w-full min-w-72 h-fit rounded-md p-4 text-white ${wallet.gradient}`}
              >
                <h2 className="text-base font-medium">{wallet.name}</h2>
                <div className="flex flex-col gap-1">
                  <Image src={atmSim} className="w-7 h-auto" alt="atmSim" />
                  <span>{wallet.walletId}</span>
                </div>
                <p className="text-2xl font-semibold">{wallet.amount}</p>
              </div>
            ))}
          </div>
        </div>
        <KYC />
        <OverviewInvestmentRecord />
        <TransactionRecords />
      </div>
    </section>
  );
};

export default Page;

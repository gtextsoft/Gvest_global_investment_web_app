"use client";
import React, { useState } from "react";
import Image from "next/image";
import atmSim from "../../../../../public/icons/atm_sim.svg";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
import TransactionTable from "@/components/features/dashboard/TransactionTable";

// Wallet Data
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

// Deposit History Data
// const depositHistory = [
//   {
//     date: "Jan 5, 2024",
//     investment: "Jasper Estate",
//     amount: "$2,500",
//     method: "Wallet Transfer",
//     status: "Completed",
//   },
//   {
//     date: "Dec 15, 2023",
//     investment: "Urban Heights Residences",
//     amount: "$1,200",
//     method: "Bank Transfer",
//     status: "Pending",
//   },
//   {
//     date: "Nov 30, 2023",
//     investment: "Commercial Real Estate",
//     amount: "$4,000",
//     method: "Credit Card",
//     status: "Completed",
//   },
//   {
//     date: "Oct 25, 2023",
//     investment: "Luxury Apartments",
//     amount: "$3,500",
//     method: "Bank Transfer",
//     status: "Completed",
//   },
//   {
//     date: "Sep 10, 2023",
//     investment: "Real Estate Fund",
//     amount: "$5,000",
//     method: "Crypto",
//     status: "Pending",
//   },
// ];

// Withdrawal History Data
// const withdrawalHistory = [
//   {
//     date: "Feb 10, 2024",
//     investment: "Jasper Estate",
//     amount: "$1,000",
//     method: "Bank Transfer",
//     status: "Processing",
//   },
//   {
//     date: "Jan 22, 2024",
//     investment: "Urban Heights Residences",
//     amount: "$800",
//     method: "Crypto",
//     status: "Completed",
//   },
//   {
//     date: "Dec 5, 2023",
//     investment: "Luxury Apartments",
//     amount: "$3,000",
//     method: "Wallet Transfer",
//     status: "Completed",
//   },
//   {
//     date: "Nov 18, 2023",
//     investment: "Commercial Real Estate",
//     amount: "$1,500",
//     method: "Bank Transfer",
//     status: "Pending",
//   },
//   {
//     date: "Oct 8, 2023",
//     investment: "Real Estate Fund",
//     amount: "$2,200",
//     method: "Credit Card",
//     status: "Completed",
//   },
// ];

// Pagination Settings
// const itemsPerPage = 5;

const Wallet = () => {
  const [activeTab, setActiveTab] = useState("fund"); // Toggle state
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
console.log("currentPage", currentPage);

  // Determine which data to show based on the active tab
  // const historyData = activeTab === "fund" ? depositHistory : withdrawalHistory;

  // Paginated data
  // const totalPages = Math.ceil(historyData.length / itemsPerPage);
  // const currentData = historyData.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  return (
    <section className="flex flex-col w-full gap-2 px-5 pb-4">
      {/* Wallet Section */}
      <div className="flex w-full flex-col gap-6 bg-white rounded-b-xl min-h-screen p-6">
        <h2 className="font-medium text-xl">Wallet</h2>

        {/* Wallet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {wallets.map((wallet, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 justify-between p-4 text-white rounded-md ${wallet.gradient}`}
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

        {/* Toggle Wallet Actions */}
        <div className="flex pt-4">
          <div className="flex w-full">
            <button
              className={`py-4 px-5 transition-all w-fit ${
                activeTab === "fund"
                  ? "bg-lonestar-950 text-white"
                  : "bg-lonestar-100 text-lonestar-950"
              }`}
              onClick={() => {
                setActiveTab("fund");
                setCurrentPage(1); // Reset to first page
              }}
            >
              Fund Wallet
            </button>
            <button
              className={`py-4 px-5 transition-all w-fit ${
                activeTab === "withdraw"
                  ? "bg-lonestar-950 text-white"
                  : "bg-lonestar-100 text-lonestar-950"
              }`}
              onClick={() => {
                setActiveTab("withdraw");
                setCurrentPage(1); // Reset to first page
              }}
            >
              Initiate Withdrawal
            </button>
          </div>
          
        </div>

        {/* Deposit/Withdrawal History Table */}
      </div>
        <div className="grid w-full gap-5 mb-5">
          <h2 className="w-full font-medium text-xl">Withdraw History</h2>
          <TransactionTable />
        </div>
    </section>
  );
};

export default Wallet;

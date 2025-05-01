"use client";
import React from "react";
import { useGetUserBankDetail } from "@/hooks/userProfileHook";

const BankDetailCard = () => {
  const { data, isPending, isError } = useGetUserBankDetail();
  return (
    <div className="flex flex-col gap-6 px-6 py-6 md:p-6 md:pb-10 bg-[linear-gradient(170deg,#000,#6E0000)] rounded-xl">
      <div className="flex flex-col gap-5"></div>
      <h2 className="font-medium text-xl text-white">Bank Information</h2>

      {/* Bank Details List */}
      {isPending ? (
        <div className="flex justify-center items-center py-8">
          <span className="text-md md:text-lg text-white">
            Loading Bank Details...
          </span>
        </div>
      ) : isError ? (
        <div className="flex justify-center items-center py-8">
          <span className="text-md md:text-lg text-red-500">
            Failed to bank detail. Please try again later.
          </span>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-2 justify-between border-b border-black-400 pb-2">
              <p className="font-medium text-gray-200">Bank Name:</p>
              <p className="text-white">{data?.data?.bank_name}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-between border-b border-black-400 pb-2">
              <p className="font-medium text-gray-200">Account Name:</p>
              <p className="text-white">{data?.data?.account_name}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-between border-b border-black-400 pb-2">
              <p className="font-medium text-gray-200">Account Number:</p>
              <p className="text-white">{data?.data?.account_number}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BankDetailCard;

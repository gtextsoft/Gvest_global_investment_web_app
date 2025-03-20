import { Edit3Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

const bankDetails = [
  { label: "Bank Name", value: "Access Bank" },
  { label: "Account Number", value: "0706835807" },
  { label: "Account Name", value: "JOSEPH YOUMNA TAUKEK" },
];

const Bank = () => {
  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-3 px-5 py-10 w-full max-w-4xl mx-auto">
        <div className="flex w-full justify-end px-6 py-6">
          <Link href="/dashboard/bank/edit" className="flex bg-lonestar-100 cursor-pointer p-2 rounded-sm items-center px-4">
            <p className="text-base text-lonestar-950">
              Edit Your Bank Details
            </p>
            <Edit3Icon className="size-10 rounded-md p-2 text-lonestar-950" />
          </Link>
        </div>
        <div className="flex flex-col gap-6 px-6 py-6 md:p-6 md:pb-10 bg-[linear-gradient(170deg,#000,#6E0000)] rounded-xl">
          <div className="flex flex-col gap-5"></div>
          <h2 className="font-medium text-xl text-white">Bank Information</h2>

          {/* Bank Details List */}
          <div className="flex flex-col gap-4">
            {bankDetails.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-2 justify-between border-b border-black-400 pb-2"
              >
                <p className="font-medium text-gray-200">{item.label}:</p>
                <p className="text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bank;

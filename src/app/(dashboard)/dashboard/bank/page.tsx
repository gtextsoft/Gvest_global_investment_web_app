import React from "react";
import Link from "next/link";
import { Edit3Icon } from "lucide-react";
import BankDetailCard from "@/components/features/dashboard/BankDetailCard";

const Bank = () => {
  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-3 px-5 py-10 w-full max-w-4xl mx-auto">
        <div className="flex w-full justify-end px-6 py-6">
          <Link
            href="/dashboard/bank/edit"
            className="flex bg-lonestar-100 cursor-pointer p-2 rounded-sm items-center px-4"
          >
            <p className="text-base text-lonestar-950">
              Edit Your Bank Details
            </p>
            <Edit3Icon className="size-10 rounded-md p-2 text-lonestar-950" />
          </Link>
        </div>
        <BankDetailCard />
      </div>
    </section>
  );
};

export default Bank;

"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { useAddBank, useAllListedBank } from "@/hooks/userProfileHook";
import { toast } from "sonner";

type Bank = {
  code: string;
  name: string;
};

const EditPage = () => {
  const { data, isPending: isLoading, isError } = useAllListedBank();
  const { mutate: addBank } = useAddBank();
  const router = useRouter();

  const [bankCode, setBankCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const banks = useMemo(() => {
    if (!Array.isArray(data?.data)) return [];
    return data.data;
  }, [data]);

  const handleSubmit = () => {
    if (!bankCode || !accountNumber) {
      toast.info("Please select a bank and enter your account number.");
      return;
    }

    addBank(
      {
        bank_id: bankCode,
        account_number: accountNumber,
      },
      {
        onSuccess: () => {
          alert("Bank added successfully!");
          router.push("/dashboard/bank");
        },
        onError: (error: unknown) => {
          if (error instanceof Error) {
            alert(error.message);
          } else {
            alert("Failed to add bank.");
          }
        },
      }
    );
  };

  const renderSelectContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center">
          <span className="text-base text-gray-500">
            Loading Listed Banks...
          </span>
        </div>
      );
    }

    if (isError) {
      return (
        <div className="flex justify-center items-center">
          <span className="text-base text-red-500">
            Failed to load listed banks. Please try again later.
          </span>
        </div>
      );
    }

    return (
      <select
        name="bank_code"
        id="bank_code"
        value={bankCode}
        onChange={(e) => setBankCode(e.target.value)}
        className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="">--Select A Bank--</option>
        {banks.map((item: Bank, i: number) => (
          <option key={i} value={item.code}>
            {item.name}
          </option>
        ))}
      </select>
    );
  };

  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-4 px-5 mt-8">
        <div className="flex flex-col gap-6 px-6 py-6 md:p-6 md:pb-10 bg-white rounded-xl shadow-md">
          <h2 className="font-medium text-xl">Edit Bank Details</h2>
          <p className="text-gray-600">
            Please fill in your correct bank details
          </p>

          <div className="flex flex-col gap-4">
            <Label>Bank Name</Label>
            {renderSelectContent()}
          </div>

          <div className="flex flex-col gap-4">
            <Label>Account Number</Label>
            <Input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter your account number"
            />
          </div>

          <div className="grid items-center gap-5 w-full">
            <Button
              className="mt-4 w-full !py-4 h-fit bg-lonestar-950 hover:bg-lonestar-900"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "ADD"}
            </Button>
            <Button
              variant="secondary"
              onClick={() => router.push("/dashboard/bank")}
              className="w-full !px-4 !py-3 h-fit hover:bg-lonestar-950 hover:text-white"
            >
              <ArrowLeft className="size-6" /> Back
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditPage;

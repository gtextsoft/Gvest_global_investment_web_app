"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";

const EditPage = () => {
    const router = useRouter()
  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-4 px-5 mt-8">
        <div className="flex flex-col gap-6 px-6 py-6 md:p-6 md:pb-10 bg-white rounded-xl shadow-md">
          <h2 className="font-medium text-xl">Edit Bank Details</h2>
          <p className="text-gray-600">
            Please fill in your correct bank details
          </p>

          {/* Bank Name Selection */}
          <div className="flex flex-col gap-4">
            <Label>Bank Name</Label>
            <Select>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="--Select A Bank--" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="access">Access Bank</SelectItem>
                <SelectItem value="gtb">GTBank</SelectItem>
                <SelectItem value="uba">UBA</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Account Number Input */}
          <div className="flex flex-col gap-4">
            <Label>Account Number</Label>
            <Input type="text" placeholder="Enter your account number" />
          </div>

          {/* Add Information Button */}
          <Button className="mt-4 w-full !py-4 h-fit">ADD INFORMATION</Button>
        </div>
        <div className="flex items-end justify-end py-5">
          <Button variant="secondary" onClick={() => router.push("/dashboard/bank")} className="mt-4 w-fit !px-4 !py-3 h-fit hover:bg-lonestar-950 hover:text-white"> <ArrowLeft className="size-6"/> Back</Button>
        </div>
      </div>
    </section>
  );
};

export default EditPage;

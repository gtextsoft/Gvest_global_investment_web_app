"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Referrals = () => {
  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-10 px-5 mt-10">
        <div className="flex flex-col gap-5 px-6 py-6 md:p-6 md:pb-10 bg-white rounded-xl shadow-md h-fit">
          <div>
            <h2 className="font-medium text-xl">Referrals</h2>
          </div>
          <div className="flex flex-col gap-10">
            {/* Referral Code Section */}
            <div className="flex flex-col gap-4">
              <Label>Your Referral Code</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                <Input value="GVOSQY" readOnly className="font-medium" />
                <Button
                  size="sm"
                  variant="outline"
                  className="w-fit px-10 py-6 font-medium"
                  onClick={() => navigator.clipboard.writeText("GVOSQY")}
                >
                  COPY
                </Button>
              </div>
            </div>

            {/* Referral Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 p-5 border rounded shadow-md bg-green-100 text-white">
                <p className="font-medium">Approved</p>
                <p className="text-lg font-semibold">1 Referral</p>
              </div>
              <div className="flex flex-col gap-2 p-5 border rounded shadow-md bg-yellow-100 text-yellow-950">
                <p className="font-medium">Pending</p>
                <p className="text-lg font-semibold">0 Referral</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referrals;

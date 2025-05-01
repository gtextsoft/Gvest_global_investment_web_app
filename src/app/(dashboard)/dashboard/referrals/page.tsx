"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ReferralContainer from "@/components/features/dashboard/ReferralContainer";
import { useAllReferral } from "@/hooks/userProfileHook";
import { toast } from "sonner";

const Referrals = () => {
  const { data, isPending, isError } = useAllReferral();
  const referralCode = data?.message?.referral_code;

  const handleCopy = async () => {
    if (!referralCode) return;
    await navigator.clipboard.writeText(referralCode);
    toast("Referral code copied!", {
      description: "You can now share it with your friends 🎉",
      className:
        "bg-white max-w-fit text-black border border-gray-200 shadow-md rounded-lg px-4 py-3",
      duration: 3000, // Optional, but feels nice
    });
  };

  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-10 px-5 mt-10">
        <div className="flex flex-col gap-5 px-6 py-6 md:p-6 md:pb-10 bg-white rounded-xl shadow-md h-fit">
          <div>
            <h2 className="font-medium text-xl">Referrals</h2>
          </div>

          {isPending ? (
            <div className="flex justify-center items-center py-8">
              <span className="text-md md:text-lg text-gray-500">
                Loading Referrals...
              </span>
            </div>
          ) : isError ? (
            <div className="flex justify-center items-center py-8">
              <span className="text-md md:text-lg text-red-500">
                Failed to load referrals. Please try again later.
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              {/* Referral Code Section */}
              <div className="flex flex-col gap-4">
                <Label>Your Referral Code</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                  <Input
                    value={referralCode}
                    readOnly
                    className="font-normal truncate"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-fit px-6 py-6 font-medium"
                    onClick={handleCopy}
                  >
                    COPY
                  </Button>
                </div>
              </div>

              {/* Referral Status */}
              <ReferralContainer data={data} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Referrals;

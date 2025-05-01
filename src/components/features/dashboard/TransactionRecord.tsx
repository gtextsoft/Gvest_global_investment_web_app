"use client";
import { Button } from "@/components/ui/button";
import { useUserAllTransaction } from "@/hooks/userProfileHook";
import { useRouter } from "next/navigation";
import React from "react";


interface FormattedTransactionRecord {
  transaction_description: string;
  transaction_payment_method: string;
  transaction_currency: string;
  transaction_type: string;
  createdAt: string;
  _id: string;
}

const TransactionRecords = () => {
  const { data, isPending, isError } = useUserAllTransaction();
  const router = useRouter();

  const latestFiveTransactions = data?.data?.slice(0, 5); // last 5, most recent first

  return (
    <section className="w-full">
      <div className="grid gap-0 w-full rounded-lg border overflow-hidden">
        <div className="flex justify-between items-center border-b shadow-2xl w-full bg-gray-100 p-6 py-5">
          <h2 className="text-base md:text-xl font-medium">My Recent Transactions</h2>
          <Button
            variant="link"
            className="text-xs sm:text-sm px-0 sm:px-4"
            onClick={() => router.push("/dashboard/transactions")}
          >
            View More
          </Button>
        </div>

        <div className="divide-y divide-gray-200 overflow-hidden bg-white">
          {isPending ? (
            <div className="flex justify-center items-center py-8">
              <span className="text-md md:text-lg text-gray-500">
                Loading investments...
              </span>
            </div>
          ) : isError ? (
            <div className="flex justify-center items-center py-8">
              <span className="text-md md:text-lg text-red-500">
                Failed to load investments. Please try again later.
              </span>
            </div>
          ) : latestFiveTransactions?.length > 0 ? (
            latestFiveTransactions.map((txn: FormattedTransactionRecord) => (
              <div
                key={txn._id}
                className="flex p-5 transition-all duration-300 bg-white hover:bg-gray-50 hover:scale-[1.02]"
              >
                <div className="grid grid-cols-2 items-center w-full gap-4 sm:gap-4">
                  {/* Left Side: Description & Date */}
                  <div className="flex flex-col gap-1 md:gap-2 w-full">
                    <h4 className="text-base font-medium truncate">
                      {txn.transaction_description}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm md:text-sm py-1 px-2 font-medium rounded ${
                          txn.transaction_type === "Credit"
                            ? "bg-[#D0FFE4] text-[#04632C]"
                            : "bg-red-100 text-red-500"
                        }`}
                      >
                        {txn.transaction_type}
                      </span>
                      <p className="text-sm text-gray-600 truncate w-full">
                        on {new Date(txn.createdAt).toDateString()}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Amount */}
                  <div className="flex flex-col h-full justify-center gap-1 items-end w-full">
                    <p className="text-xs sm:text-sm md:text-sm text-gray-800 italic w-fit">
                      {txn.transaction_currency}{" "}
                      {Number(txn.transaction_amount).toLocaleString()}
                    </p>
                    <div className="flex w-fit items-center gap-2 md:gap-4">
                      <div className="flex gap-2 items-baseline w-full">
                        <p className="text-[#34C759] text-sm sm:text-base md:text-xl truncate w-full">
                          {txn.transaction_payment_method}
                        </p>
                        <span className="inline-block text-gray-800 text-xs">
                          Method
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            !isPending && (
              <div className="p-6 text-sm text-gray-500">
                No transactions found.
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TransactionRecords;

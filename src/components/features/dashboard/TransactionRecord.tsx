"use client";
import { useUserAllTransaction } from "@/hooks/userProfileHook";
import React, { useState } from "react";
import ItemDetailModal from "../modal/ItemDetailModal";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface FormattedTransactionRecord {
  transaction_description: string;
  transaction_payment_method: string;
  transaction_currency: string;
  transaction_type: string;
  transaction_amount: number;
  createdAt: string;
  _id: string;
  transaction_purpose: string;
  transaction_ref: string;
  customer: string;
}

const TransactionRecords = () => {
  const router = useRouter();
  const { data, isPending, isError } = useUserAllTransaction();
  const [selectedTransaction, setSelectedTransaction] =
    useState<FormattedTransactionRecord | null>(null);

  const latestFiveTransactions = data?.data?.slice(0, 5);

  return (
    <section className="w-full">
      <div className="grid gap-0 w-full rounded-xl border border-gray-100 overflow-hidden bg-white shadow-sm">
        <div className="flex justify-between items-center border-b w-full bg-white p-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              My Recent Transactions
            </h2>
            <p className="text-sm text-gray-500">
              Track your latest financial activities
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => router.push("/dashboard/transactions")}
            className="h-9 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            View All
          </Button>
        </div>

        <div className="divide-y divide-gray-100">
          {isPending ? (
            <div className="flex justify-center items-center py-12">
              <span className="text-sm text-gray-500">
                Loading transactions...
              </span>
            </div>
          ) : isError ? (
            <div className="flex justify-center items-center py-12">
              <span className="text-sm text-red-500">
                Failed to load transactions. Please try again later.
              </span>
            </div>
          ) : latestFiveTransactions?.length > 0 ? (
            latestFiveTransactions.map((txn: FormattedTransactionRecord) => (
              <div
                key={txn._id}
                className="group flex p-6 transition-all duration-200 hover:bg-gray-50/50 cursor-pointer"
                onClick={() => setSelectedTransaction(txn)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full gap-6">
                  {/* Left Side: Description & Date */}
                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          txn.transaction_type === "Credit"
                            ? "bg-emerald-50"
                            : "bg-red-50"
                        }`}
                      >
                        <span
                          className={`text-lg font-semibold ${
                            txn.transaction_type === "Credit"
                              ? "text-emerald-600"
                              : "text-red-600"
                          }`}
                        >
                          {txn.transaction_type === "Credit" ? "+" : "-"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-base font-medium text-gray-900 group-hover:text-gray-700">
                          {txn.transaction_description}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {new Date(txn.createdAt).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          txn.transaction_type === "Credit"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        {txn.transaction_type}
                      </span>
                      <span className="text-xs text-gray-500">
                        via {txn.transaction_payment_method}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Amount */}
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <span className="text-xs font-medium text-gray-500">
                      Amount
                    </span>
                    <p
                      className={`text-lg font-semibold ${
                        txn.transaction_type === "Credit"
                          ? "text-emerald-600"
                          : "text-red-600"
                      }`}
                    >
                      {txn.transaction_currency}{" "}
                      {Number(txn.transaction_amount).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center py-12">
              <span className="text-sm text-gray-500">
                No transactions found.
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Individual Transaction Detail Modal */}
      {selectedTransaction && (
        <ItemDetailModal
          title="Transaction Details"
          description="View detailed information about this transaction"
          isOpen={!!selectedTransaction}
          onClose={() => setSelectedTransaction(null)}
          viewMoreLink={`/dashboard/transactions/${selectedTransaction._id}`}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div
                className={`h-12 w-12 rounded-full flex items-center justify-center ${
                  selectedTransaction.transaction_type === "Credit"
                    ? "bg-emerald-50"
                    : "bg-red-50"
                }`}
              >
                <span
                  className={`text-xl font-semibold ${
                    selectedTransaction.transaction_type === "Credit"
                      ? "text-emerald-600"
                      : "text-red-600"
                  }`}
                >
                  {selectedTransaction.transaction_type === "Credit"
                    ? "+"
                    : "-"}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {selectedTransaction.transaction_description}
                </h3>
                <p className="text-sm text-gray-500">
                  {new Date(selectedTransaction.createdAt).toLocaleDateString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Transaction Type
                  </h4>
                  <p
                    className={`mt-1 text-lg font-semibold ${
                      selectedTransaction.transaction_type === "Credit"
                        ? "text-emerald-600"
                        : "text-red-600"
                    }`}
                  >
                    {selectedTransaction.transaction_type}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Payment Method
                  </h4>
                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {selectedTransaction.transaction_payment_method}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Transaction Purpose
                  </h4>
                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {selectedTransaction.transaction_purpose}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Amount</h4>
                  <p
                    className={`mt-1 text-lg font-semibold ${
                      selectedTransaction.transaction_type === "Credit"
                        ? "text-emerald-600"
                        : "text-red-600"
                    }`}
                  >
                    {selectedTransaction.transaction_currency}{" "}
                    {Number(
                      selectedTransaction.transaction_amount
                    ).toLocaleString()}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Transaction Reference
                  </h4>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {selectedTransaction.transaction_ref}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Customer
                  </h4>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {selectedTransaction.customer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ItemDetailModal>
      )}
    </section>
  );
};

export default TransactionRecords;

"use client";

import { Button } from "@/components/ui/button";

const AdminTransactionTable = () => {
  return (
    // <div className="w-full max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
    <div className="w-full mx-auto">
      <h1 className="text-lg font-bold mb-4 text-center">Fund User</h1>

      {/* User Selection */}
      <div className="mb-4">
        <h5 className="font-medium mb-2">User</h5>

        <select
          name="user"
          id="user"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500"
        >
          <option value="" disabled selected>
            Enter Client Mail or Email. Min 3 Char...
          </option>
          <option value="">No User Available</option>
        </select>
      </div>

      {/* Currency & Amount (Flex) */}
      <div className="flex items-center gap-4 mb-4">
        {/* Currency */}
        <div className="w-1/3">
          <label htmlFor="currency" className="block text-sm font-medium mb-1">
            Select Currency
          </label>
          <select
            name="currency"
            id="currency"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500"
          >
            <option value="NGN">NGN</option>
            <option value="USD">USD</option>
          </select>
        </div>

        {/* Amount */}
        <div className="w-2/3">
          <label htmlFor="amount" className="block text-sm font-medium mb-1">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            placeholder="Enter Amount"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      {/* Transaction Date */}
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium mb-1">
          Transaction Date
        </label>
        <input
          type="date"
          id="date"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Submit Button */}
      <Button className="w-full py-7 text-base font-semibold  text-white rounded-md">
        Create
      </Button>
    </div>
  );
};

export default AdminTransactionTable;

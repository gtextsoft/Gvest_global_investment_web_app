import React from "react";

const ReferralContainer = ({ data }: { data: any }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Referrals */}
      <div className="flex flex-col gap-1 p-5 border rounded-md shadow-md bg-[linear-gradient(170deg,#000,#1E90FF)] text-white">
        <p className="text-sm font-medium">Total Referrals</p>
        <p className="text-2xl font-bold">{data.message.noOfTotalReferrals}</p>
      </div>

      {/* Approved */}
      <div className="flex flex-col gap-1 p-5 border rounded-md shadow-md bg-[linear-gradient(170deg,#000,#03045E)] text-white">
        <p className="text-sm font-medium">Approved</p>
        <p className="text-2xl font-bold">
          {data.message.noOfApprovedReferrals}
        </p>
      </div>

      {/* Pending */}
      <div className="flex flex-col gap-1 p-5 border rounded-md shadow-md bg-[linear-gradient(170deg,#000,#8D731D)] text-white">
        <p className="text-sm font-medium">Pending</p>
        <p className="text-2xl font-bold">
          {data.message.noOfPendingReferrals}
        </p>
      </div>

      {/* Rejected */}
      <div className="flex flex-col gap-1 p-5 border rounded-md shadow-md bg-[linear-gradient(170deg,#000,#8B0000)] text-white">
        <p className="text-sm font-medium">Rejected</p>
        <p className="text-2xl font-bold">
          {data.message.noOfRejectedReferrals}
        </p>
      </div>
    </div>
  );
};

export default ReferralContainer;

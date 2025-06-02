"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Investment } from "@/types";

interface AllInvestmentsModalProps {
  investments: Investment[];
}

const AdminAllInvestmentsModal: React.FC<AllInvestmentsModalProps> = ({
  investments,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View All Investments</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>All Investments</DialogTitle>
          <DialogDescription>
            A list of all current investments.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {investments.length > 0 ? (
            investments.map((inv, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-sm bg-gray-50"
              >
                <p><strong>Name:</strong> {inv.name}</p>
                <p><strong>Cost:</strong> ₦{inv.actual_cost.toLocaleString()}</p>
                <p><strong>Pending Payment:</strong> {inv.pending_payment ? "Yes" : "No"}</p>
                <p><strong>Daily Income:</strong> ₦{inv.daily_income?.toFixed(2)}</p>
                {inv.rate && <p><strong>Rate:</strong> {inv.rate}%</p>}
                {inv.roi_frequency && <p><strong>ROI Frequency:</strong> {inv.roi_frequency}</p>}
              </div>
            ))
          ) : (
            <p>No investment data found.</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminAllInvestmentsModal;

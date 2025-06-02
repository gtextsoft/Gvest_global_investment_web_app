"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAdminAllInvestments } from "@/hooks/useAdminMutation";
import { Investment } from "@/types";

const AdminInvestmentsTable = () => {
  const { data } = useAdminAllInvestments();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null);
  const [open, setOpen] = useState(false);

  const investments = data?.data?.investments || [];
  const paginatedInvestments = investments.slice(
    currentPage * 10,
    (currentPage + 1) * 10
  );

  const handleOpenModal = (investment: Investment) => {
    setSelectedInvestment(investment);
    setOpen(true);
  };

  return (
    <div>
      <Table>
        <TableHeader className="bg-lonestar-50 border border-gray-300">
          <TableRow>
            <TableHead className="text-lonestar-900 py-4 max-w-[150px] truncate">Reference</TableHead>
            <TableHead className="text-lonestar-900 py-4 max-w-[150px] truncate">Name</TableHead>
            <TableHead className="text-lonestar-900 py-4 max-w-[150px] truncate">Customer</TableHead>
            <TableHead className="text-lonestar-900 py-4 max-w-[150px] truncate">Amount</TableHead>
            <TableHead className="text-lonestar-900 py-4">ROI Frequency</TableHead>
            <TableHead className="text-lonestar-900 py-4">Pending Payment</TableHead>
            <TableHead className="text-lonestar-900 py-4">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedInvestments.map((investment: Investment, index: number) => (
            <TableRow key={index}>
              <TableCell className="max-w-[150px] truncate">{investment.ref}</TableCell>
              <TableCell className="max-w-[150px] truncate">{investment.name}</TableCell>
              <TableCell className="max-w-[150px] truncate">{investment.customer}</TableCell>
              <TableCell className="max-w-[150px] truncate">₦{Number(investment.actual_cost).toLocaleString()}</TableCell>
              <TableCell className="text-center">{investment.roi_frequency || "—"}</TableCell>
              <TableCell className="text-center">{investment.pending_payment ? "Yes" : "No"}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleOpenModal(investment)}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
<div className="flex justify-center items-center gap-2 mt-4">
  <Button
    variant="outline"
    size="sm"
    disabled={currentPage === 0}
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
  >
    Prev
  </Button>

  {Array.from({ length: Math.ceil(investments.length / 10) }).map((_, index) => (
    <Button
      key={index}
      variant={currentPage === index ? "default" : "outline"}
      size="sm"
      onClick={() => setCurrentPage(index)}
    >
      {index + 1}
    </Button>
  ))}

  <Button
    variant="outline"
    size="sm"
    disabled={(currentPage + 1) * 10 >= investments.length}
    onClick={() =>
      setCurrentPage((prev) => (prev + 1) * 10 < investments.length ? prev + 1 : prev)
    }
  >
    Next
  </Button>
</div>

      {/* Investment Details Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Investment Details</DialogTitle>
          </DialogHeader>
          {selectedInvestment && (
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Customer</h4>
                  <p>{selectedInvestment.customer}</p>
                </div>
                <div>
                  <h4 className="font-medium">Status</h4>
                  <p>{selectedInvestment.status}</p>
                </div>
                <div>
                  <h4 className="font-medium">Matured</h4>
                  <p>{selectedInvestment.matured ? "Yes" : "No"}</p>
                </div>
                <div>
                  <h4 className="font-medium">Amount</h4>
                  <p>₦{Number(selectedInvestment.actual_cost).toLocaleString()}</p>
                </div>
                <div>
                  <h4 className="font-medium">Total Units</h4>
                  <p>{selectedInvestment.total_unit}</p>
                </div>
                <div>
                  <h4 className="font-medium">ROI Frequency</h4>
                  <p>{selectedInvestment.roi_frequency || "—"}</p>
                </div>
                <div>
                  <h4 className="font-medium">Return on Investment</h4>
                  <p>₦{Number(selectedInvestment.return_on_investment).toLocaleString()}</p>
                </div>
                <div>
                  <h4 className="font-medium">Daily Income</h4>
                  <p>₦{Number(selectedInvestment.daily_income).toLocaleString()}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminInvestmentsTable;

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"; // <- Add this import
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAdminAllInvestments } from "@/hooks/useAdminMutation";

const AdminInvestmentsTable = () => {
  const { data, isLoading, isError } = useAdminAllInvestments();
  const [currentPage, setCurrentPage] = useState(0);

  // ✅ Add modal state
  const [selectedInvestment, setSelectedInvestment] = useState<any | null>(
    null
  );
  const [open, setOpen] = useState(false);

  const investments = data?.data?.investments || [];
  const paginatedInvestments = investments.slice(
    currentPage * 10,
    (currentPage + 1) * 10
  );

  const handleOpenModal = (investment: any) => {
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
            <TableHead className="text-lonestar-900 py-4">
              ROI Frequency
            </TableHead>
            <TableHead className="text-lonestar-900 py-4">
              Pending Payment
            </TableHead>
            <TableHead className="text-lonestar-900 py-4">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedInvestments.map((inv, index) => (
            <TableRow key={index}>
              <TableCell className="max-w-[150px] truncate">{inv.ref}</TableCell>
              <TableCell className="max-w-[150px] truncate">{inv.name}</TableCell>
              <TableCell className="max-w-[150px] truncate">{inv.customer}</TableCell>
              <TableCell className="max-w-[150px] truncate">₦{Number(inv.actual_cost).toLocaleString()}</TableCell>
              <TableCell className="text-center">{inv.roi_frequency || "—"}</TableCell>
              <TableCell className="text-center">{inv.pending_payment ? "Yes" : "No"}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleOpenModal(inv)} // <- 🔁 Replace router.push with modal
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
        <DialogContent className="sm:max-w-lg p-0 pb-4 gap-0">
          <DialogHeader className="shadow p-4">
            <DialogTitle>Investment Details</DialogTitle>
          </DialogHeader>
          <div className="flex max-h-[400px] p-4 overflow-y-auto">
          {console.log("selectedInvestment", selectedInvestment)}

          {selectedInvestment && (
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>Ref:</strong> {selectedInvestment.ref}
              </p>
              <p>
                <strong>Name:</strong> {selectedInvestment.name}
              </p>
              <p>
                <strong>Customer:</strong> {selectedInvestment.customer}
              </p>
              <p>
                <strong>Currency:</strong> {selectedInvestment.currency}
              </p>
              <p>
                <strong>Status:</strong> {selectedInvestment.status}
              </p>
              <p>
                <strong>Matured:</strong>{" "}
                {selectedInvestment.matured ? "Yes" : "No"}
              </p>

              <p>
                <strong>Amount:</strong> ₦
                {Number(selectedInvestment.actual_cost).toLocaleString()}
              </p>
              <p>
                <strong>Unit Price:</strong> ₦
                {Number(selectedInvestment.unit_price).toLocaleString()}
              </p>
              <p>
                <strong>Total Unit:</strong> {selectedInvestment.total_unit}
              </p>
              <p>
                <strong>ROI Frequency (months):</strong>{" "}
                {selectedInvestment.roi_frequency}
              </p>
              <p>
                <strong>Rate (%):</strong> {selectedInvestment.rate}
              </p>
              <p>
                <strong>Return on Investment:</strong> ₦
                {Number(
                  selectedInvestment.return_on_investment
                ).toLocaleString()}
              </p>
              <p>
                <strong>Daily Income:</strong> ₦
                {Number(selectedInvestment.daily_income).toFixed(2)}
              </p>

              <p>
                <strong>Tenor (months):</strong> {selectedInvestment.tenor}
              </p>
              <p>
                <strong>No. of ROI Payments:</strong>{" "}
                {selectedInvestment.no_of_roi_payments}
              </p>
              <p>
                <strong>ROI Payment Index:</strong>{" "}
                {selectedInvestment.roi_payment_index}
              </p>
              <p>
                <strong>Pending Payment:</strong>{" "}
                {selectedInvestment.pending_payment ? "Yes" : "No"}
              </p>

              <p>
                <strong>Investment Date:</strong>{" "}
                {new Date(
                  selectedInvestment.investment_date
                ).toLocaleDateString()}
              </p>
              <p>
                <strong>Maturity Date:</strong>{" "}
                {new Date(
                  selectedInvestment.maturity_date
                ).toLocaleDateString()}
              </p>
              <p>
                <strong>Capital Repayment Date:</strong>{" "}
                {new Date(
                  selectedInvestment.capital_repayment_date
                ).toLocaleDateString()}
              </p>

              {selectedInvestment.annual_return !== undefined && (
                <p>
                  <strong>Annual Return:</strong> ₦
                  {Number(selectedInvestment.annual_return).toLocaleString()}
                </p>
              )}

              <p>
                <strong>Created By (Admin ID):</strong>{" "}
                {selectedInvestment.createdBy}
              </p>
              <p>
                <strong>User ID:</strong> {selectedInvestment.user}
              </p>

              {selectedInvestment.annual_return_payment_date?.length > 0 && (
                <div>
                  <strong>Annual Return Payment Dates:</strong>
                  <ul className="list-disc list-inside">
                    {selectedInvestment.annual_return_payment_date.map(
                      (date: string, i: number) => (
                        <li key={i}>{new Date(date).toLocaleDateString()}</li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminInvestmentsTable;

"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAllUsers } from "@/hooks/adminHooks";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Show only first 6 investors
const ITEMS_TO_DISPLAY = 6;

interface Investor {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  phone: string;
  noOfInvestments: number;
  account_verification: boolean;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}

const OverviewInvestorsTable = () => {
  const { data, isLoading, isError } = useAllUsers();
  const router = useRouter();
  const [selectedInvestor, setSelectedInvestor] = useState<Investor | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const users = data?.data?.users || [];
  
  // Slice first 6 users only
  const displayedInvestors = users.slice(0, ITEMS_TO_DISPLAY);

  const handleInvestorClick = (investor: Investor) => {
    setSelectedInvestor(investor);
    setIsDialogOpen(true);
  };

  if (isLoading) {
    return <div>Loading investors...</div>;
  }

  if (isError) {
    return <div>Failed to load investors.</div>;
  }

  return (
    <div className="grid w-full mx-auto md:col-span-2 gap-5">
      <div className="flex justify-between items-center w-full bg-white rounded-t-lg">
        <h2 className="text-base md:text-xl font-medium">List of Investors</h2>
        <Button
          variant="link"
          className="py-0 px-0 md:px-4 text-xs md:text-sm hover:text-lonestar-950"
          onClick={() => router.push("/admin/investors")}
        >
          View More
        </Button>
      </div>
      <Table>
        <TableHeader className="bg-lonestar-50 border border-gray-300">
          <TableRow>
            <TableHead className="text-lonestar-900 py-4">Name</TableHead>
            <TableHead className="text-lonestar-900 py-4">Email</TableHead>
            <TableHead className="text-lonestar-900 py-4">Phone</TableHead>
            <TableHead className="text-lonestar-900 py-4">
              No. of Investments
            </TableHead>
            <TableHead className="text-lonestar-900 py-4">Verification</TableHead>
            <TableHead className="text-lonestar-900 py-4">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedInvestors.length > 0 ? (
            displayedInvestors.map((investor: Investor, index: number) => (
              <Dialog 
                key={index}
                open={selectedInvestor?._id === investor._id && isDialogOpen}
                onOpenChange={(open) => {
                  setIsDialogOpen(open);
                  if (!open) setSelectedInvestor(null);
                }}
              >
                <DialogTrigger asChild>
                  <TableRow
                    className="cursor-pointer hover:bg-lonestar-50/50"
                    onClick={() => handleInvestorClick(investor)}
                  >
                    <TableCell className="font-medium py-5 capitalize">
                      {investor.first_name} {investor.last_name}
                    </TableCell>
                    <TableCell>{investor.email}</TableCell>
                    <TableCell>{investor.phone}</TableCell>
                    <TableCell className="text-center">{investor.noOfInvestments}</TableCell>
                    <TableCell className="text-center">
                      {investor.account_verification ? "Verified" : "Not Verified"}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleInvestorClick(investor);
                        }}
                      >
                        View Detail
                      </Button>
                    </TableCell>
                  </TableRow>
                </DialogTrigger>
                <DialogContent className="px-0 pt-0 gap-0 sm:max-w-md max-h-[90vh] overflow-hidden flex flex-col">
                  <DialogHeader className="px-4 py-4 text-left flex-shrink-0 shadow">
                    <DialogTitle>Investor Details</DialogTitle>
                    <DialogDescription>
                      Quick overview of investor information
                    </DialogDescription>
                  </DialogHeader>
                  <div className="px-4 space-y-4 py-4 overflow-y-auto flex-1">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Full Name</p>
                      <p className="text-sm text-gray-500 capitalize">
                        {investor.first_name} {investor.last_name}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-gray-500">{investor.email}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                      <div className="space-y-2 flex-1">
                        <p className="text-sm font-medium">Gender</p>
                        <p className="text-sm text-gray-500 capitalize">
                          {investor.gender}
                        </p>
                      </div>
                      <div className="space-y-2 flex-1">
                        <p className="text-sm font-medium">Phone</p>
                        <p className="text-sm text-gray-500">
                          {investor.phone}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Investments</p>
                      <p className="text-sm text-gray-500">
                        {investor.noOfInvestments} investments
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Verification Status</p>
                      <p className="text-sm text-gray-500">
                        {investor.account_verification ? "Verified" : "Not Verified"}
                      </p>
                    </div>
                    <div className="flex px-2">
                      <Button
                        className="w-full mt-4"
                        onClick={() =>
                          router.push(`/admin/investors/${investor._id}`)
                        }
                      >
                        View Full Profile
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-5 text-gray-500">
                No investors available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default OverviewInvestorsTable;

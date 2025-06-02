"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAllUsers } from "@/hooks/adminHooks";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

const ITEMS_PER_PAGE = 10;

const InvestorsTable = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useAllUsers();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedInvestor, setSelectedInvestor] = useState<Investor | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const users = data?.data?.users || [];
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const paginatedInvestors = users.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    if (currentPage + 1 < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleInvestorClick = (investor: Investor) => {
    setSelectedInvestor(investor);
    setIsDialogOpen(true);
  };

  if (isLoading) return <div>Loading investors...</div>;
  if (isError) return <div>Failed to load investors.</div>;

  return (
    <div>
      <Table>
        <TableHeader className="bg-lonestar-50 border border-gray-300">
          <TableRow>
            <TableHead className="text-lonestar-900 py-4">Name</TableHead>
            <TableHead className="text-lonestar-900 py-4">Email</TableHead>
            <TableHead className="text-lonestar-900 py-4">Phone</TableHead>
            <TableHead className="text-lonestar-900 py-4">
              No. of Investments
            </TableHead>
            <TableHead className="text-lonestar-900 py-4">
              Verification
            </TableHead>
            <TableHead className="text-lonestar-900 py-4">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedInvestors.length > 0 ? (
            paginatedInvestors.map((investor: Investor, index: number) => (
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
                <TableCell className="text-center">
                  {investor.noOfInvestments}
                </TableCell>
                <TableCell className="text-center">
                      {investor.account_verification
                        ? "Verified"
                        : "Not Verified"}
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
                    View Details
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
                        {investor.account_verification
                          ? "Verified"
                          : "Not Verified"}
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

      {/* Pagination Controls */}
      {users.length > ITEMS_PER_PAGE && (
        <div className="flex justify-between items-center mt-4">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            variant="outline"
          >
            Previous
          </Button>

          <span className="text-sm font-medium text-gray-700">
            Page {currentPage + 1} of {totalPages}
          </span>

          <Button
            onClick={nextPage}
            disabled={currentPage + 1 >= totalPages}
            variant="outline"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default InvestorsTable;

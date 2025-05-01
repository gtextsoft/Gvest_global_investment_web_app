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
import React from "react";
import { Button } from "@/components/ui/button";
import { useAllUsers } from "@/hooks/adminHooks";


// Show only first 6 investors
const ITEMS_TO_DISPLAY = 6;
// const displayedInvestors = investorsList.slice(0, ITEMS_TO_DISPLAY);

const OverviewInvestorsTable = () => {
  const { data, isLoading, isError } = useAllUsers();
  const router = useRouter();
  
  const users = data?.data?.users || [];
  
  // Slice first 10 users only
  const displayedInvestors = users.slice(0, ITEMS_TO_DISPLAY);

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
          onClick={() => router.push("/admin/users")}
        >
          View More
        </Button>
      </div>
      <Table>
        <TableHeader className="bg-lonestar-50 border border-gray-300">
          <TableRow>
            <TableHead className="text-lonestar-900 py-4">Name</TableHead>
            <TableHead className="text-lonestar-900 py-4">Email</TableHead>
            <TableHead className="text-lonestar-900 py-4">
              Phone
            </TableHead>
            <TableHead className="text-lonestar-900 py-4">
              No. of Investments
            </TableHead>
            <TableHead className="text-lonestar-900 py-4">Verification</TableHead>
            <TableHead className="text-lonestar-900 py-4"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedInvestors.length > 0 ? (
            displayedInvestors.map((investor: any, index: number) => (
              <TableRow
                key={index}
                className="cursor-pointer hover:bg-lonestar-50/50"
                onClick={() => router.push(`/admin/users/${index}`)}
              >
                <TableCell className="font-medium py-5">
                  {investor.first_name} {investor.last_name}
                </TableCell>
                <TableCell>{investor.email}</TableCell>
                <TableCell>{investor.phone}</TableCell>
                <TableCell className="text-center">{investor.noOfInvestments}</TableCell>
                <TableCell>{investor.account_verification === true ? "True" : "False"}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/admin/investors/${investor._id}`);
                    }}
                  >
                    View Detail
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-5 text-gray-500">
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

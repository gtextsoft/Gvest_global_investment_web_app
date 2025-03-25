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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import dollarscheme from "../../../../../public/images/investmentplans/dollarscheme.png";
import nairascheme from "../../../../../public/images/investmentplans/nairascheme.png";
import poundScheme from "../../../../../public/images/investmentplans/poundScheme.png";
import Modal from "@/components/features/modal/Modal";
import { X } from "lucide-react";

const investments = Array(7).fill({
  id: "GVEIPMCRN420AC5",
  title: "Jasper Estate Richmond TX",
  amount: "$2,500",
  paymentMethod: "Credit Card",
  roi: "20%",
  status: "Completed",
  years: 3,
  type: "Buy Land",
  nextRoiDate: "2024-09-30",
  investedDate: "2023-06-15",
  users: "Yes",
  img: poundScheme,
});

const tableHeaders = [
  "Investment ID",
  "Title",
  "Amount",
  "ROI",
  "No of Years",
  "Type",
  "Actions",
];

const InvestmentPlans = () => {
  const [filterType, setFilterType] = useState("All");
  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle row click
  const handleRowClick = (investment: any) => {
    setSelectedInvestment(investment);
    setIsModalOpen(true);
  };

  return (
    <section className="flex flex-col w-full gap-10 p-6">
      <div className="flex flex-wrap gap-10 gap-y-5 items-center justify-between">
        <h2 className="text-lg md:text-xl font-medium">Investment Plans</h2>
        <Button variant="secondary">Add New Investment Plan</Button>
        <div className="flex items-center gap-4">
          <p>Filter:</p>
          <Select onValueChange={setFilterType}>
            <SelectTrigger className="w-full md:w-[250px]">
              <SelectValue placeholder="Select Investment Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Types</SelectItem>
              <SelectItem value="Buy Land">Buy Land</SelectItem>
              <SelectItem value="Sell Property">Sell Property</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Table>
        <TableHeader className="bg-lonestar-50 border border-gray-300">
          <TableRow>
            {tableHeaders.map((header) => (
              <TableHead key={header} className="py-4 text-lonestar-900">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {investments.map((investment, index) => (
            <TableRow
              key={investment.id + index}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation(); // Prevent row click event
                handleRowClick(investment);
              }}
            >
              <TableCell className="max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">
                <div className="flex items-center">
                  <p className="truncate">{investment.id}qwqwwqwqwqwqw</p>
                </div>
              </TableCell>
              <TableCell className="">
                <div className="flex items-center">
                  <Image
                    src={investment.img}
                    alt={investment.title}
                    width={60}
                    height={60}
                  />
                  <p className="truncate">{investment.title}</p>
                </div>
              </TableCell>
              <TableCell>{investment.amount}</TableCell>
              <TableCell>{investment.roi}</TableCell>
              <TableCell>{investment.years}</TableCell>
              <TableCell>{investment.type}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent row click event
                    handleRowClick(investment);
                  }}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal Component */}
      {isModalOpen && selectedInvestment && (
        <Modal
          title="Investment Plan Details"
          description="Detailed information about this investment."
          onClose={() => setIsModalOpen(false)} // Close modal
        >
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center w-full">
              <Image
                src={selectedInvestment.img}
                alt={selectedInvestment.title}
                width={30}
                height={30}
                className="size-20 md:size-40"
              />
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-10 justify-between w-full">
                  <p className="text-sm text-black-900 text-nowrap min-w-20">
                    Investment ID
                  </p>
                  <p className="text-sm text-black-950">GVEIPMCRN420AC5</p>
                </div>
                <div className="flex items-center gap-10 justify-between w-full">
                  <p className="text-sm text-black-900 text-nowrap min-w-20">
                    Title:
                  </p>
                  <p className="text-sm text-black-950">
                    Jasper Estate Richmond T
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-normal border-b border-black-800 pb-2">Investment Overview</h3>
            </div>

            <div className="grid gap-4">
              {/* Investment Details */}
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <p className="font-normal text-black-900">Investment ID:</p>
                  <p className="text-base text-black-950">{selectedInvestment.id}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-normal text-black-900">Title:</p>
                  <p className="text-base text-black-950">{selectedInvestment.title}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-normal text-black-900">Amount:</p>
                  <p className="text-base text-black-950">{selectedInvestment.amount}</p>
                </div>
              </div>

              {/* Recent Transaction Detail */}
              <h3 className="text-lg font-normal border-b border-black-600 pb-2">
                Recent Transaction Detail
              </h3>
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <p className="font-normal text-black-900">ROI:</p>
                  <p className="text-base text-black-950">{selectedInvestment.roi}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-normal text-black-900">No of Years:</p>
                  <p className="text-base text-black-950">{selectedInvestment.years}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-normal text-black-900">Description:</p>
                  <p className="text-base text-black-950">Fund added to wallet</p>
                </div>
              </div>

              {/* Additional Information */}
              <h3 className="text-lg font-normal border-b border-black-600 pb-2">Additional Details</h3>
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <p className="text-base font-normal text-black-900">Investment Type:</p>
                  <p className="text-base font-normal text-black-950">{selectedInvestment.type}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base font-normal text-black-900">Transaction Status:</p>
                  <p className="text-base font-normal text-black-950">{selectedInvestment.status}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base font-normal text-black-900">Priority Level:</p>
                  <p className="text-base font-normal text-black-950">Medium</p>
                </div>
              </div>
            </div>
          {/* Close Button */}
          <div className="flex justify-end mt-10">
            <Button
              variant="default"
              size="lg"
              className="py-2 px-4 text-lg font-medium"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="size-5"/>
              Close
            </Button>
          </div>
          </div>

        </Modal>
      )}
    </section>
  );
};

export default InvestmentPlans;

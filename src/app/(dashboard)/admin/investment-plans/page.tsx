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
import Image, { StaticImageData } from "next/image";
import dollarscheme from "../../../../../public/images/investmentplans/dollarscheme.png";
import nairascheme from "../../../../../public/images/investmentplans/nairascheme.png";
import poundScheme from "../../../../../public/images/investmentplans/poundScheme.png";
import Modal from "@/components/features/modal/Modal";
import { X } from "lucide-react";

const images = [dollarscheme, nairascheme, poundScheme];

interface Investment {
  id: string;
  title: string;
  amount: string;
  roi: string;
  years: number;
  type: string;
  nextRoiDate: string;
  investedDate: string;
  users: string;
  img: StaticImageData;
}

const investments: Investment[] = Array(7)
  .fill(null)
  .map((_, index) => ({
    id: `INVESTMENT-${index + 1}`,
    title: "Jasper Estate Richmond TX",
    amount: "$2,500",
    roi: "20%",
    years: 3,
    type: index % 2 === 0 ? "Buy Land" : "Sell Property",
    nextRoiDate: "2024-09-30",
    investedDate: "2023-06-15",
    users: "Yes",
    img: images[index % images.length],
  }));

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
  const [filterType, setFilterType] = useState<string>("All");
  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtered investments based on type
  const filteredInvestments = filterType === "All"
    ? investments
    : investments.filter((inv) => inv.type === filterType);

  const handleRowClick = (investment: Investment) => {
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
          <Select onValueChange={(value) => setFilterType(value)} value={filterType}>
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
          {filteredInvestments.map((investment) => (
            <TableRow
              key={investment.id}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => handleRowClick(investment)}
            >
              <TableCell>{investment.id}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Image src={investment.img} alt={investment.title} width={60} height={60} />
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
                    e.stopPropagation();
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

      {isModalOpen && selectedInvestment && (
        <Modal title="Investment Plan Details" onClose={() => setIsModalOpen(false)}>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center w-full">
              <Image
                src={selectedInvestment.img}
                alt={selectedInvestment.title}
                width={60}
                height={60}
                className="size-20 md:size-40"
              />
              <div className="ml-4">
                <p className="text-lg font-semibold">{selectedInvestment.title}</p>
                <p className="text-gray-700">Investment ID: {selectedInvestment.id}</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold border-b pb-2">Investment Overview</h3>
            <div className="grid gap-2">
              <div className="flex justify-between">
                <p className="font-normal">Amount:</p>
                <p className="text-base">{selectedInvestment.amount}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-normal">ROI:</p>
                <p className="text-base">{selectedInvestment.roi}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-normal">No of Years:</p>
                <p className="text-base">{selectedInvestment.years}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-normal">Investment Type:</p>
                <p className="text-base">{selectedInvestment.type}</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold border-b pb-2">Transaction Details</h3>
            <div className="grid gap-2">
              <div className="flex justify-between">
                <p className="font-normal">Next ROI Date:</p>
                <p className="text-base">{selectedInvestment.nextRoiDate}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-normal">Invested Date:</p>
                <p className="text-base">{selectedInvestment.investedDate}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-normal">Users:</p>
                <p className="text-base">{selectedInvestment.users}</p>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button variant="default" size="lg" onClick={() => setIsModalOpen(false)}>
                <X className="size-5" />
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

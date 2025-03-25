"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const documents = {
  myDocuments: [
    {
      uploadDate: "Jan 5, 2024",
      title: "Investment Agreement - Jasper Estate.",
      description: "Detailed agreement for Phase 1 real estate deals.",
      type: "Contract",
    },
    {
      uploadDate: "Dec 12, 2024",
      title: "Monthly ROI Report - October 2023",
      description: "Summary of returns for October 2023 investments.",
      type: "Report",
    },
    {
      uploadDate: "Dec 12, 2024",
      title: "Land Acquisition Proposal",
      description: "Proposal for acquiring land in emerging markets.",
      type: "Proposal",
    },
  ],
  companyDocuments: [
    {
      uploadDate: "Dec 12, 2024",
      title: "Compliance Checklist - Q3 2023",
      description: "Checklist ensuring legal compliance for Q3.",
      type: "Legal Document",
    },
    {
      uploadDate: "Dec 12, 2024",
      title: "Jasper Estate Progress Update",
      description: "Updates on Jasper Estate construction milestones.",
      type: "Update",
    },
  ],
};

const ITEMS_PER_PAGE = 5;

const FileManagement = () => {
  const [fileBtnToggle, setFileBtnToggle] = useState(false);
  const [filterType, setFilterType] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const activeDocuments = fileBtnToggle
    ? documents.companyDocuments
    : documents.myDocuments;
  const filteredDocuments =
    filterType === "All"
      ? activeDocuments
      : activeDocuments.filter((doc) => doc.type === filterType);

  const sortedDocuments = [...filteredDocuments].sort((a, b) => {
    const dateA = new Date(a.uploadDate).getTime();
    const dateB = new Date(b.uploadDate).getTime();
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const totalPages = Math.ceil(sortedDocuments.length / ITEMS_PER_PAGE);
  const paginatedDocuments = sortedDocuments.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-10 px-5">
        <div className="flex flex-col gap-6 px-6 py-6 md:p-6 bg-white rounded-b-xl min-h-screen">
          <div className="flex w-full">
            <button
              className={`flex cursor-pointer px-5 transition-all justify-center items-center w-full max-w-80 py-3 ${
                !fileBtnToggle
                  ? "bg-lonestar-950 text-white"
                  : "bg-lonestar-100 text-lonestar-950"
              }`}
              onClick={() => setFileBtnToggle(false)}
            >
              My Documents
            </button>
            <button
              className={`flex cursor-pointer px-5 transition-all justify-center items-center w-full max-w-80 py-3 ${
                fileBtnToggle
                  ? "bg-lonestar-950 text-white"
                  : "bg-lonestar-100 text-lonestar-950"
              }`}
              onClick={() => setFileBtnToggle(true)}
            >
              Company Documents
            </button>
          </div>

          {/* Document Type Filter */}
          <Select onValueChange={(value) => setFilterType(value)}>
            <SelectTrigger className="w-full md:w-[250px]">
              <SelectValue placeholder="Select Document Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Types</SelectItem>
              {[...new Set(activeDocuments.map((doc) => doc.type))].map(
                (type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>

          {/* Document List */}
          <div className="mt-4">
            <Table>
              <TableHeader className="bg-lonestar-50 border border-gray-300">
                <TableRow>
                  <TableHead
                    className="cursor-pointer text-lonestar-900 py-4"
                    onClick={toggleSortOrder}
                  >
                    Upload Date{" "}
                    <ArrowUpDown size={16} className="inline-block ml-1" />
                  </TableHead>
                  <TableHead className="text-lonestar-900 py-4">
                    Document Title
                  </TableHead>
                  <TableHead className="text-lonestar-900 py-4">
                    Description
                  </TableHead>
                  <TableHead className="text-lonestar-900 py-4">
                    Document Type
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedDocuments.map((doc, index) => (
                  <TableRow key={index}>
                    <TableCell className="py-5">{doc.uploadDate}</TableCell>
                    <TableCell className="font-semibold">{doc.title}</TableCell>
                    <TableCell>{doc.description}</TableCell>
                    <TableCell className="text-sm italic">{doc.type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between mt-4">
            <Button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 border rounded ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : ""
              }`}
            >
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border rounded ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : ""
              }`}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileManagement;

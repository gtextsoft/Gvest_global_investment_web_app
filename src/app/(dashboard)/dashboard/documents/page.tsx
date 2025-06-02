"use client";

import { useState } from "react";
import { ArrowUpDown, Download } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useUserAllDocument } from "@/hooks/userProfileHook";
import Link from "next/link";

interface Document {
  createdAt: string;
  document_type: string;
  status: string;
  document_url: string;
}

interface NormalizedDocument {
  uploadDate: string;
  title: string;
  description: string;
  type: string;
  documentUrl: string;
}

const ITEMS_PER_PAGE = 5;

const FileManagement = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isPending, isError } = useUserAllDocument();

  const normalizedDocuments = Array.isArray(data?.data)
    ? data.data.map((doc: Document) => ({
        uploadDate: new Date(doc.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        title: doc.document_type,
        description: doc.status,
        type: "User Upload",
        documentUrl: doc.document_url,
      }))
    : [];

  const activeDocuments = normalizedDocuments;

  const sortedDocuments = [...activeDocuments].sort((a, b) => {
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
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
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
          <h2>List of Documents</h2>

          {isPending ? (
            <div className="flex justify-center items-center py-8">
              <span className="text-md md:text-lg text-gray-500">
                Loading Documents...
              </span>
            </div>
          ) : isError ? (
            <div className="flex justify-center items-center py-8">
              <span className="text-md md:text-lg text-red-500">
                Failed to load Documents. Please try again later.
              </span>
            </div>
          ) : (
            <>
              {/* Document Table */}
              <div className="mt-4">
                <Table>
                  <TableHeader className="bg-lonestar-50 border border-gray-300">
                    <TableRow>
                      <TableHead
                        className="cursor-pointer text-lonestar-900 py-4"
                        onClick={toggleSortOrder}
                      >
                        Upload Date
                        <ArrowUpDown size={16} className="inline-block ml-1" />
                      </TableHead>
                      <TableHead className="text-lonestar-900 py-4">
                        Document Type
                      </TableHead>
                      <TableHead className="text-lonestar-900 py-4">
                        Status
                      </TableHead>
                      <TableHead className="text-lonestar-900 py-4">
                        Description
                      </TableHead>
                      <TableHead className="text-lonestar-900 py-4">
                        
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedDocuments.map((doc: NormalizedDocument, index) => (
                      <TableRow key={index}>
                        <TableCell className="py-5">{doc.uploadDate}</TableCell>
                        <TableCell className="font-semibold">
                          {doc.title}
                        </TableCell>
                        <TableCell>{doc.description}</TableCell>
                        <TableCell className="text-sm italic">
                          {doc.type}
                        </TableCell>
                        <TableCell>
                          <Link href={doc.documentUrl} className="text-sm flex items-center gap-1"> View File<Download className="!size-4"/></Link>
                        </TableCell>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FileManagement;

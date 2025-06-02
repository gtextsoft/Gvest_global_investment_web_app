"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAdminAllDocuments } from "@/hooks/adminHooks";
import { useSearchParams } from "next/navigation";

const ITEMS_PER_PAGE = 10;

const DocumentPage = () => {
  // const router = useRouter();
  const searchParams = useSearchParams();

  const { data, isPending, isError } = useAdminAllDocuments();
  // const documents = data?.data?.documents || [];

  const [emailFilter, setEmailFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const query = searchParams.get("query");
    const status = searchParams.get("status");
    const sort = searchParams.get("sort");
    const page = searchParams.get("page");

    if (query) setEmailFilter(query);
    if (status) setStatusFilter(status);
    if (sort === "latest" || sort === "oldest") setSortOrder(sort);
    if (page) setCurrentPage(parseInt(page));
  }, [searchParams]);

  const updateQueryParams = ({
    query = emailFilter,
    status = statusFilter,
    sort = sortOrder,
    page = currentPage,
  }) => {
    const params = new URLSearchParams();
    if (query) params.set("query", query);
    if (status) params.set("status", status);
    if (sort) params.set("sort", sort);
    if (page) params.set("page", page.toString());

    // router.push(`/admin/document/all?${params.toString()}`);
  };

  const filteredDocuments = useMemo(() => {
    const docs = data?.data?.documents || [];
    let result = [...docs]

    if (emailFilter) {
      result = result.filter((doc) =>
        doc.email.toLowerCase().includes(emailFilter.toLowerCase())
      );
    }

    if (statusFilter) {
      result = result.filter((doc) => doc.status === statusFilter);
    }

    result.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [data, emailFilter, statusFilter, sortOrder]);

  const totalPages = Math.ceil(filteredDocuments.length / ITEMS_PER_PAGE);
  const currentDocuments = filteredDocuments.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-10">
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
            <div className="w-full p-4 md:p-6 bg-white">
              <div className="mb-6">
                <h1 className="text-xl font-semibold text-gray-800">
                  Files Management
                </h1>
                <p className="text-sm text-gray-500">
                  View uploaded user documents
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
                {/* Email */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Enter User Email Address
                  </label>
                  <input
                    type="email"
                    value={emailFilter}
                    onChange={(e) => {
                      setEmailFilter(e.target.value);
                      updateQueryParams({ query: e.target.value, page: 1 });
                    }}
                    placeholder="e.g. user@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-lonestar-500"
                  />
                </div>

                {/* Status */}
                <div className="w-full md:w-48">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={statusFilter}
                    onChange={(e) => {
                      setStatusFilter(e.target.value);
                      updateQueryParams({ status: e.target.value, page: 1 });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-lonestar-500"
                  >
                    <option value="">All</option>
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>

                {/* Sort */}
                <div className="w-full md:w-48">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sort By
                  </label>
                  <select
                    value={sortOrder}
                    onChange={(e) => {
                      const sort = e.target.value as "latest" | "oldest";
                      setSortOrder(sort);
                      updateQueryParams({ sort, page: 1 });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-lonestar-500"
                  >
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto mt-4">
                <Table>
                  <TableHeader className="bg-lonestar-50 border border-gray-300">
                    <TableRow>
                      <TableHead className="py-4">Upload Date</TableHead>
                      <TableHead className="py-4">User</TableHead>
                      <TableHead className="py-4">Email</TableHead>
                      <TableHead className="py-4">Document Type</TableHead>
                      <TableHead className="py-4">Status</TableHead>
                      <TableHead className="py-4">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentDocuments.map((doc) => (
                      <TableRow key={doc._id}>
                        <TableCell className="py-4">
                          {new Date(doc.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="font-medium">
                          {doc.customer}
                        </TableCell>
                        <TableCell className="max-w-40 w-full truncate">
                          {doc.email}
                        </TableCell>
                        <TableCell className="max-w-40 w-full truncate">
                          {doc.document_type}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              doc.status === "Pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : doc.status === "Approved"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {doc.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Link
                            href={doc.document_url}
                            target="_blank"
                            className="text-sm flex items-center gap-1 text-blue-600 hover:underline"
                          >
                            View File <Download className="!size-4" />
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={() => {
                    const prev = Math.max(currentPage - 1, 1);
                    setCurrentPage(prev);
                    updateQueryParams({ page: prev });
                  }}
                  disabled={currentPage === 1}
                  className="text-sm px-3 py-1 border rounded disabled:opacity-50"
                >
                  Prev
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setCurrentPage(i + 1);
                        updateQueryParams({ page: i + 1 });
                      }}
                      className={`text-sm px-3 py-1 rounded border ${
                        currentPage === i + 1
                          ? "bg-lonestar-500 text-white"
                          : ""
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => {
                    const next = Math.min(currentPage + 1, totalPages);
                    setCurrentPage(next);
                    updateQueryParams({ page: next });
                  }}
                  disabled={currentPage === totalPages}
                  className="text-sm px-3 py-1 border rounded bg-white disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </>
          )}
        </div>
    </section>
  );
};

export default DocumentPage;

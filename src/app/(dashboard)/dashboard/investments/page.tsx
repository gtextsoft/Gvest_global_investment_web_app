"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useInvestmentPlans } from "@/hooks/userProfileHook";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Investment {
  _id: string;
  name: string;
  description: string;
  unit_price: number;
  rate: number;
  tenor: number;
  currency: string;
  available_slots: number;
  banner: string;
  plan: string;
  type: string;
  ref: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const formatCurrency = (amount: number, currency: string) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  });
  return formatter.format(amount);
};

export default function InvestmentsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("Simple Interest");
  const [selectedCurrency, setSelectedCurrency] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Show 6 items per page

  const { data: simplePlans, isLoading: isLoadingSimple } =
    useInvestmentPlans("Simple Interest");
  const { data: compoundPlans, isLoading: isLoadingCompound } =
    useInvestmentPlans("Compound Interest");

  const allPlans = [
    ...(simplePlans?.data || []),
    ...(compoundPlans?.data || []),
  ];

  const filteredInvestments = allPlans.filter((investment: Investment) => {
    const matchesSearch = investment.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType =
      selectedType === "all" 
        ? true 
        : investment.plan === selectedType;
    const matchesCurrency =
      selectedCurrency === "all" || investment.currency === selectedCurrency;

    return matchesSearch && matchesType && matchesCurrency;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredInvestments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInvestments = filteredInvestments.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages are less than maxVisiblePages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate start and end of visible pages
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if at the start
      if (currentPage <= 2) {
        end = 4;
      }
      // Adjust if at the end
      if (currentPage >= totalPages - 1) {
        start = totalPages - 3;
      }

      // Add ellipsis if needed
      if (start > 2) {
        pages.push(-1); // -1 represents ellipsis
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pages.push(-2); // -2 represents ellipsis
      }

      // Always show last page
      pages.push(totalPages);
    }

    return (
      <div className="flex items-center justify-center gap-2 my-8">
        <Button
          variant="outline"
          size="icon"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="h-fit w-fit p-2 text-gray-700 hover:bg-emerald-600/10"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        {pages.map((page, index) =>
          page < 0 ? (
            <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
              ...
            </span>
          ) : (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              onClick={() => handlePageChange(page)}
              className={`h-8 w-8 text-gray-700 hover:bg-gray-50 ${currentPage === page ? "bg-emerald-600 border-emerald-600/40 text-white hover:text-white/80" : "hover:bg-emerald-600/10"}`}
            >
              {page}
            </Button>
          )
        )}

        <Button
          variant="outline"
          size="icon"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="h-fit w-fit p-2 text-gray-700 hover:bg-emerald-600/10"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    );
  };

  const isLoading = isLoadingSimple || isLoadingCompound;

  if (isLoading) {
    return (
      <div className="space-y-6 px-5">
      <div className="flex flex-col gap-4 md:justify-between px-6 py-6 md:p-6 bg-white rounded-b-xl">
        <h1 className="text-2xl font-bold">Smart Investment</h1>
          <div className="flex flex-col gap-4 md:flex-row">
            <Skeleton className="h-10 w-[200px]" />
            <Skeleton className="h-10 w-[200px]" />
            <Skeleton className="h-10 w-[200px]" />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border bg-card p-4">
              <Skeleton className="h-48 w-full" />
              <div className="mt-4 space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 px-5">
      <div className="flex flex-col gap-6 px-6 py-6 md:p-6 bg-white rounded-b-xl border border-gray-100 shadow-sm">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Smart Investment</h1>
          
          {/* Investment Type Toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant={selectedType === "all" ? "default" : "outline"}
              onClick={() => setSelectedType("all")}
              className={`flex-1 md:flex-none ${
                selectedType === "all"
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "hover:bg-emerald-600/10"
              }`}
            >
              All Plans
            </Button>
            <Button
              variant={selectedType === "Simple Interest" ? "default" : "outline"}
              onClick={() => setSelectedType("Simple Interest")}
              className={`flex-1 md:flex-none ${
                selectedType === "Simple Interest"
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "hover:bg-emerald-600/10"
              }`}
            >
              Simple Interest
              {isLoadingSimple && selectedType === "Simple Interest" && (
                <span className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              )}
            </Button>
            <Button
              variant={selectedType === "Compound Interest" ? "default" : "outline"}
              onClick={() => setSelectedType("Compound Interest")}
              className={`flex-1 md:flex-none ${
                selectedType === "Compound Interest"
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "hover:bg-emerald-600/10"
              }`}
            >
              Compound Interest
              {isLoadingCompound && selectedType === "Compound Interest" && (
                <span className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              )}
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <Input
            placeholder="Search investments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-3 !h-fit w-full md:w-[200px]"
          />
          <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
            <SelectTrigger className="py-3 !h-fit w-full md:w-[200px]">
              <SelectValue placeholder="All Currencies" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Currencies</SelectItem>
              <SelectItem value="NGN">Naira (NGN)</SelectItem>
              <SelectItem value="USD">Dollar (USD)</SelectItem>
              <SelectItem value="GBP">Euro (GBP)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-6 py-6 md:p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
        {currentInvestments.map((investment: Investment) => (
                  <div
            key={investment._id}
            className="rounded-lg border border-gray-100 bg-white p-4 transition-all shadow-sm hover:shadow-lg flex flex-col"
                  >
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
                    <Image
                src={investment.banner || "/placeholder-image.jpg"}
                      alt={investment.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex flex-col flex-grow">
              <div className="flex flex-col gap-2 mb-3">
                <div className="flex items-start gap-2">
                  <h3 className="text-lg leading-tight font-semibold line-clamp-2 flex-1 min-h-[2.5rem] text-gray-900">
                          {investment.name}
                  </h3>
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800 whitespace-nowrap flex-shrink-0 mt-0.5">
                    {investment.plan}
                          </span>
                </div>
                <p className="line-clamp-2 text-sm text-gray-500">
                  {truncateText(investment.description, 120)}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                <div>
                  <p className="text-gray-500">Unit Price</p>
                  <p className="font-medium truncate text-gray-900" title={formatCurrency(investment.unit_price, investment.currency)}>
                    {formatCurrency(investment.unit_price, investment.currency)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium truncate text-gray-900" title={`${investment.tenor} months`}>
                    {investment.tenor} months
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">ROI</p>
                  <p className="font-medium truncate text-gray-900" title={`${investment.rate}%`}>
                    {investment.rate}%
                        </p>
                      </div>
                <div>
                  <p className="text-gray-500">Available Slots</p>
                  <p className="font-medium truncate text-gray-900" title={`${investment.available_slots}`}>
                    {investment.available_slots}
                        </p>
                      </div>
              </div>
              <div className="mt-auto">
                      <Button
                  variant="ghost"
                  className="w-full border hover:bg-emerald-600/10 border-emerald-600/40 text-emerald-600 hover:text-emerald-700"
                  onClick={() => router.push(`/dashboard/investments/${investment.ref}`)}
                >
                  View More
                      </Button>
                    </div>
            </div>
          </div>
        ))}
      </div>

      {renderPagination()}
    </div>
  );
}

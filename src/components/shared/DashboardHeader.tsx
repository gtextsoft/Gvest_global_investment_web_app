"use client";

import { usePathname } from "next/navigation";
import { AvatarDropdown } from "../features/dashboard/AvatarDropdown";
import { AvatarWithNotification } from "../features/dashboard/AvatarNotification";

const pageTitles: Record<string, string> = {
  dashboard: "Dashboard",
  investments: "Investment",
  myinvestments: "My Investments",
  transactions: "Transactions",
  documents: "Documents",
  wallet: "Wallet",
  bank: "Bank",
  referrals: "Referrals",
  settings: "Settings",
  "help-center": "Help Center",
  logout: "Logout",
};

export default function DashboardHeader() {
  const pathname = usePathname();

  // Extract the last part of the pathname (after "/dashboard/")
  const pathSegments = pathname.split("/").filter(Boolean); // Removes empty segments
  let currentPage = pathname.startsWith("/admin") ? "Admin" : "Dashboard"; // Default overview based on role

  if (pathSegments.length > 1) {
    const key = pathSegments[pathSegments.length - 1]
      .toLowerCase()
      .replace(/-/g, ""); // Normalize key
    currentPage = pageTitles[key] || currentPage; // Use mapped title or default based on role
  }

  return (
    <header className="bg-white shadow-sm border-b p-4 flex justify-between items-center">
      <div className="container justify-between px-3 flex w-full mx-auto">
        <h1 className="text-lg font-semibold">{currentPage}</h1>

        <div className="flex items-center gap-1">
          <AvatarWithNotification />
          <AvatarDropdown />
        </div>
      </div>
    </header>
  );
}

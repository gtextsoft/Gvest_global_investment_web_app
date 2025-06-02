"use client";

import Link from "next/link";
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
  users: "Users",
  investors: "Investors",
  "investment-plans": "Investment Plans",
};

export default function DashboardHeader() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  // Extract role dynamically (assumes first segment is the role)
  const role = pathSegments[0] || "dashboard";
  const roleHref = `/${role}`;
  const subPath = pathSegments[1] ? pageTitles[pathSegments[1]] || pathSegments[1] : null;

  const breadcrumb = (
    <div className="flex md:items-center flex-col md:flex-row md:gap-2">
      <Link href={roleHref} className="text-sm sm:text-lg text-lonestar-950 hover:underline capitalize">
        {role}
      </Link>
      {subPath && <span className="text-sm sm:text-lg text-gray-500 font-medium capitalize">/ {subPath}</span>}
    </div>
  );

  return (
    <header className="bg-white shadow-sm border-b p-4 flex justify-between items-center">
      <div className="container flex items-center justify-between md:px-3 w-full mx-auto">
        <h1 className="text-lg font-semibold">{breadcrumb}</h1>

        <div className="flex items-center gap-1">
          <AvatarWithNotification />
          <AvatarDropdown />
        </div>
      </div>
    </header>
  );
}

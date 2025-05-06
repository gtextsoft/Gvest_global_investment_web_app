"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
  LogOut,
  ChartNoAxesCombined,
  HandCoins,
  ArrowLeftRight,
  File,
  Wallet,
  Landmark,
  Headset,
  LayoutGrid,
  ShieldCheck, // Example admin icon
  UserCog, // Example admin settings icon
} from "lucide-react";

import gVestLogo from "../../../public/icons/gVestLogo.svg";
import { Button } from "../ui/button";
import { useLogout } from "@/hooks/useAdminMutation";

const userMenuTop = [
  { name: "Dashboard", icon: LayoutGrid, href: "/dashboard" },
  {
    name: "Investment",
    icon: ChartNoAxesCombined,
    href: "/dashboard/investments",
  },
  { name: "My Investments", icon: HandCoins, href: "/dashboard/myinvestments" },
  {
    name: "Transactions",
    icon: ArrowLeftRight,
    href: "/dashboard/transactions",
  },
  { name: "Documents", icon: File, href: "/dashboard/documents" },
  { name: "Wallet", icon: Wallet, href: "/dashboard/wallet" },
  { name: "Bank", icon: Landmark, href: "/dashboard/bank" },
  { name: "Referrals", icon: Users, href: "/dashboard/referrals" },
];

const userMenuBottom = [
  { name: "Settings", icon: UserCog, href: "/dashboard/settings" },
  { name: "Help Center", icon: Headset, href: "/dashboard/help" },
  { name: "Logout", icon: LogOut, href: "/logout" },
];

const adminMenuTop = [
  { name: "Overview", icon: ShieldCheck, href: "/admin" },
  { name: "Investors", icon: Users, href: "/admin/investors" },
  {
    name: "Investments",
    icon: ChartNoAxesCombined,
    href: "/admin/investments",
  },
  { name: "Transactions", icon: ArrowLeftRight, href: "/admin/transactions" },
  { name: "Documents", icon: File, href: "/admin/documents" },
];

const adminMenuBottom = [
  // { name: "Settings", icon: Settings, href: "/admin/settings" },
  { name: "Logout", icon: LogOut, isLogout: true },
];

const AdminDashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const currentRoute = usePathname();
  const router = useRouter();
  const { mutate: logout } = useLogout();

  const handleLogout = () => {
    logout();
    router.push("/admin/sign-in")
    console.log("Done Logout");
    
  };

  // Determine if the user is in admin or user dashboard
  const isAdmin = useMemo(
    () => currentRoute.startsWith("/admin"),
    [currentRoute]
  );

  // Select the correct menu items based on role
  const menuItemsTop = isAdmin ? adminMenuTop : userMenuTop;
  const menuItemsBottom = isAdmin ? adminMenuBottom : userMenuBottom;

  return (
    <aside
      className={`hidden font-inter md:flex flex-col bg-white text-lonestar-950 h-screen p-4 px-0 transition-[max-width] duration-300 border-r border-gray-200 
      ${collapsed ? "max-w-28" : "max-w-56 min-w-56"} overflow-hidden`}
    >
      <div className="flex flex-col px-2 gap-2">
        <Image
          src={gVestLogo}
          alt="gVestLogo"
          className="w-16 h-16 transition-all duration-300"
        />
        <Button
          variant="ghost"
          className="mb-2 mx-2 p-2 self-end"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </Button>
      </div>

      <nav
        className={`flex flex-col h-full px-4 gap-20 space-y-4 overflow-y-scroll pb-4 ${
          collapsed ? "items-center !px-3" : "items-start"
        }`}
      >
        {/* Top Menu Items */}
        <div className="flex flex-col gap-4 space-y-4 flex-grow m- w-full">
          {menuItemsTop.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center transition-all w-full h-10 m-0 duration-300 gap-2 p-2 hover:bg-lonestar-950 hover:text-white rounded-md  
              ${currentRoute === item.href ? "bg-lonestar-950 text-white" : ""}
               ${collapsed && "justify-center"}`}
            >
              <item.icon size={20} />
              <span
                className={`transition-opacity text-sm duration-300 ${
                  collapsed ? "opacity-0 w-0 hidden" : "opacity-100 w-auto"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom Menu Items */}
        <div className="flex flex-col gap-4 space-y-4 flex-grow m-0 w-full">
          {/* {menuItemsBottom.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center transition-all w-full h-10 m-0 duration-300 gap-2 p-2 hover:bg-lonestar-950 hover:text-white rounded-md  ${
                collapsed && "justify-center"
              }`}
            >
              <item.icon size={20} />
              <span
                className={`transition-opacity text-sm duration-300 ${
                  collapsed ? "opacity-0 w-0 hidden" : "opacity-100 w-auto"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))} */}

          {menuItemsBottom.map((item) => {
            const isLogout = item.name === "Logout";
            const content = (
              <>
                <item.icon size={20} />
                <span
                  className={`transition-opacity text-sm duration-300 ${
                    collapsed ? "opacity-0 w-0 hidden" : "opacity-100 w-auto"
                  }`}
                >
                  {item.name}
                </span>
              </>
            );

            return isLogout ? (
              <button
                key={item.name}
                onClick={handleLogout}
                className={`flex items-center transition-all w-full h-10 m-0 duration-300 gap-2 p-2 hover:bg-lonestar-950 hover:text-white rounded-md ${
                  collapsed && "justify-center"
                }`}
              >
                {content}
              </button>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center transition-all w-full h-10 m-0 duration-300 gap-2 p-2 hover:bg-lonestar-950 hover:text-white rounded-md ${
                  collapsed && "justify-center"
                }`}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default AdminDashboardSidebar;

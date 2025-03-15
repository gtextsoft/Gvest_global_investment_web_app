"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Home,
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  LogOut,
} from "lucide-react";
import gVestLogo from "../../../public/icons/gVestLogo.svg";

const menuItemsTop = [
  { name: "Dashboard", icon: Home, href: "/dashboard" },
  { name: "Users", icon: Users, href: "/users" },
];

const menuItemsBottom = [
  { name: "Settings", icon: Settings, href: "/settings" },
  { name: "Contact Agency", icon: MessageCircle, href: "/contact" },
  { name: "Logout", icon: LogOut, href: "/logout" },
];

const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`flex flex-col bg-white text-lonestar-950 h-screen p-4 transition-[max-width] duration-300 border-r border-gray-200 
    ${collapsed ? "max-w-20" : "max-w-52"} overflow-hidden`}
    >
      <div className="flex flex-col gap-4">
        <Image
          src={gVestLogo}
          alt="gVestLogo"
          className="w-16 h-16 transition-all duration-300"
        />
        <button
          className="mb-6 p-2 self-end"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>
      </div>
      <nav className="flex flex-col h-full space-y-4">
        {/* Top Menu Items */}
        <div className="flex flex-col space-y-4 flex-grow">
          {menuItemsTop.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center transition-all duration-300 gap-3 p-2 hover:bg-lonestar-950 hover:text-white rounded-md"
            >
              <item.icon size={24} />
              <span
                className={`transition-opacity duration-300 ${
                  collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom Menu Items (Pushed to Bottom) */}
        <div className="flex flex-col space-y-4 mt-auto">
          {menuItemsBottom.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center transition-all duration-300 gap-3 p-2 hover:bg-lonestar-950 hover:text-white rounded-md"
            >
              <item.icon size={24} />
              <span
                className={`transition-opacity duration-300 ${
                  collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;

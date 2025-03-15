"use client";

import { Menu, UserRound } from "lucide-react";
import UserAvatar from "./UserAvatar";

export default function DashboardHeader() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <UserRound className="w-8 h-8 text-black-600 bg-black-50 border rounded-full p-1" />
      </div>
    </header>
  );
}

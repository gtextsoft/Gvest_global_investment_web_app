"use client";

import { AvatarDropdown } from "../features/dashboard/AvatarDropdown";
import { AvatarWithNotification } from "../features/dashboard/AvatarNotification";

export default function DashboardHeader() {
  return (
    <header className="bg-white shadow-xl border-b p-4 flex justify-between items-center">
      <div className="container justify-between px-3 flex w-full mx-auto">
        <h1 className="text-lg font-semibold">Dashboard</h1>

        <div className="flex items-center gap-1">
          <AvatarWithNotification />
          <AvatarDropdown />
        </div>
      </div>
    </header>
  );
}

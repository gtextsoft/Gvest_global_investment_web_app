"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { LayoutDashboard, LogOut, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "@/components/shared/UserAvatar";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function UserDropdown() {
  const router = useRouter();
  const userAuth = useSelector((state: RootState) => state.auth);

  const profileImg = userAuth?.user?.profile_picture;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="!p-0 hover:p-0 rounded-full w-fit hover:bg-none hover: overflow-hidden"
        >
          {profileImg ? (
            <Image
              src={profileImg}
              alt="user_profile"
              width={40}
              height={40}
              className="!size-10"
            />
          ) : (
            <UserAvatar size={40} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="end">
        <DropdownMenuItem
          onClick={() => {
            const role = userAuth?.user?.role;
            const targetUrl =
              role === "admin"
                ? "/admin"
                : role === "user"
                ? "/dashboard"
                : "/";
            router.push(targetUrl);
          }}
        >
          <LayoutDashboard className="w-4 h-4 mr-2" />
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            const role = userAuth?.user?.role;
            const settingsPath =
              role === "admin"
                ? "/admin/settings"
                : role === "user"
                ? "/dashboard/settings"
                : "/";
            router.push(settingsPath);
          }}
        >
          <User className="w-4 h-4 mr-2" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            // Handle sign-out logic here
            router.push("/login");
          }}
          className="text-red-600"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { LogOut, Settings, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "@/components/shared/UserAvatar";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useLogout } from "@/hooks/useAdminMutation";

export function AdminAvatarDropdown() {
  const router = useRouter();
  const { mutate: logout, isPending } = useLogout();

  const user = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  console.log("UseraDMIN", user);
  console.log("isAuthenticated", isAuthenticated);

  // const profileImg = userAuth?.user?.profile_picture;
  // const { data } = useUserProfile();
  // const profileImg = data?.data?.user?.profile_picture;

  const handleLogout = () => {
    logout();
    window.location.href = "/admin/sign-in"; // Forces full reload and navigation
    console.log("Done Logout");
  };
  
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="!p-0 hover:p-0 rounded-full w-fit hover:bg-none hover: overflow-hidden"
        >
          <UserAvatar size={40} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20" align="end">
        <DropdownMenuItem
          // onClick={() => {
          //   // Handle sign-out logic here
          //   router.push("/login");
          // }}
          onClick={handleLogout} disabled={isPending}
          className="text-red-600 gap-0"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

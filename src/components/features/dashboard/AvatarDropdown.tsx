"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { LogOut, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "@/components/shared/UserAvatar";
import { useUserProfile } from "@/hooks/userProfileHook";
import Image from "next/image";

export function AvatarDropdown() {
  const router = useRouter();

  const { data } = useUserProfile();
  const profileImg = data?.data?.user?.profile_picture;
  
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
        <DropdownMenuItem onClick={() => router.push("/dashboard/settings")}>
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

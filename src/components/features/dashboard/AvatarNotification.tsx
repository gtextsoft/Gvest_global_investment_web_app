"use client";

import * as React from "react";
import { Mail, CheckCircle, Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function AvatarWithNotification() {
  const [notifications] = React.useState([
    { id: 1, message: "New message from Alex", type: "message" },
    { id: 2, message: "Project approved!", type: "success" },
  ]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={`relative p-0 !px-2 rounded-full ${notifications.length > 0 && ""} `}>
          {/* Avatar */}
          <Bell className="size-5"/>

          {/* Notification Badge */}
          {notifications.length > 0 && (
            <span className="absolute -top-0.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
              {notifications.length}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>

      {/* Notification Dropdown */}
      <DropdownMenuContent className="w-58" align="end">
        <div className="px-2 py-2 text-sm font-medium">Notifications</div>

        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <DropdownMenuItem
              key={notif.id}
              className="flex items-center space-x-1 gap-1 cursor-pointer"
            >
              {notif.type === "message" ? (
                <Mail className="w-4 h-4 text-blue-500" />
              ) : (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
              <span>{notif.message}</span>
            </DropdownMenuItem>
          ))
        ) : (
          <div className="p-1 pb-2 text-center text-sm text-gray-500">
           <p className="text-base"> No new notifications</p>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

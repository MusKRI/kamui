"use client";

import {
  LayoutGridIcon,
  TrashIcon,
  Building2,
  UserCircleIcon,
  BellIcon,
  SettingsIcon,
  LogOutIcon,
} from "lucide-react";

import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/registry/pure-ui/components/shadcn/ui/dropdown-menu";
import { Button } from "@/registry/pure-ui/components/shadcn/ui/button";

import { cn } from "@/lib/classes";

const MENU_ITEMS = [
  { icon: <UserCircleIcon size={16} />, name: "Profile", shortcut: "⌘P" },
  { icon: <LayoutGridIcon size={16} />, name: "Applications", shortcut: "⌘A" },
  { icon: <Building2 size={16} />, name: "Teams", shortcut: "⌘T" },
  { icon: <BellIcon size={16} />, name: "Notifications", shortcut: "⌘N" },
];

const DANGER_ITEMS = [
  {
    icon: <LogOutIcon size={16} />,
    name: "Sign out",
    className: "text-muted-foreground hover:text-foreground",
  },
  {
    icon: <TrashIcon size={16} />,
    name: "Delete account",
    className:
      "text-red-400 focus:bg-red-500/30 focus:text-red-400 focus:border-red-400/30",
  },
];

export const DropdownMenuMotionAnimationDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          reduceMotion
          variant="ghost"
          className="flex items-center gap-2"
          size="sm"
        >
          <SettingsIcon size={16} />
          <span className="text-sm">Account settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-64"
        animationPreset="motion"
        transitionPreset="outQuad"
      >
        {MENU_ITEMS.map(({ icon, name, shortcut }, index) => (
          <DropdownMenuItem key={index} className="cursor-pointer">
            <div className="flex items-center gap-3 w-full">
              {icon}
              <span className="flex-1">{name}</span>
              <span className="text-xs text-(--muted-foreground) ml-auto">
                {shortcut}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        {DANGER_ITEMS.map(({ icon, name, className }, index) => (
          <DropdownMenuItem
            key={index}
            className={cn("cursor-pointer", className)}
          >
            <div className="flex items-center gap-3">
              {icon}
              <span>{name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

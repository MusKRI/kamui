"use client";

import { useState } from "react";
import { BugIcon } from "lucide-react";

import { Button } from "@/registry/pure-ui/components/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/pure-ui/components/shadcn/ui/dropdown-menu";

export function DropdownMenuRadioGroupCustomIconUsage() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState("top");

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="center">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={(event) => event.preventDefault()}>
            Profile
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Teams</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={setPosition}
          activeIcon={<BugIcon className="size-4" />}
        >
          <DropdownMenuRadioItem
            value="top"
            onSelect={(event) => event.preventDefault()}
          >
            Top
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="bottom"
            onSelect={(event) => event.preventDefault()}
          >
            Bottom
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="right"
            onSelect={(event) => event.preventDefault()}
          >
            Right
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

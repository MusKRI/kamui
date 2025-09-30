"use client";

import { cn } from "@/lib/classes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function PureUIHeaderNav() {
  const pathname = usePathname();

  const isDocs = pathname.startsWith("/pure-ui/docs");
  const isComponents = pathname.startsWith("/pure-ui/components");
  const isBlocks = pathname.startsWith("/pure-ui/blocks");

  return (
    <div className="hidden md:flex space-x-4 lg:space-x-8">
      <Link
        href="/pure-ui/docs"
        className={cn(
          "text-base",
          isDocs
            ? "text-(--accent)"
            : "text-(--muted-foreground) hover:text-(--link)"
        )}
      >
        Docs
      </Link>
      <Link
        href="/pure-ui/components"
        className={cn(
          "text-base",
          isComponents
            ? "text-(--accent)"
            : "text-(--muted-foreground) hover:text-(--link)"
        )}
      >
        Components
      </Link>
      <Link
        href="#"
        className={cn(
          "text-base",
          isBlocks
            ? "text-(--accent)"
            : "text-(--muted-foreground) hover:text-(--link)"
        )}
      >
        Blocks
      </Link>
    </div>
  );
}

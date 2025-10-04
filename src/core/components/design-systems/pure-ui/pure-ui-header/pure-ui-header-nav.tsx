"use client";

import { cn } from "@/lib/classes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pureUIHeaderLinks } from "./data";

export function PureUIHeaderNav() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex space-x-4 lg:space-x-8">
      {pureUIHeaderLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={cn(
            "text-base",
            pathname.startsWith(link.href)
              ? "text-(--accent)"
              : "text-(--muted-foreground) hover:text-(--link)"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

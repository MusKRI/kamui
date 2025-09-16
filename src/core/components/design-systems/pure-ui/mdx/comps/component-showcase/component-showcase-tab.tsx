"use client";

import { motion } from "motion/react";
import * as Tabs from "@radix-ui/react-tabs";

import { cn } from "@/lib/classes";

import { tabs } from "./component-showcase.client";

interface ShowcaseTabProps {
  tab: (typeof tabs)[number];
  isActive: boolean;
  uniqueId: string;
}

export function ComponentShowcaseTab({
  tab,
  isActive,
  uniqueId,
}: ShowcaseTabProps) {
  return (
    <Tabs.Trigger
      value={tab.name}
      className={cn(
        "relative flex items-center gap-2 px-3 py-1.5 text-sm font-medium [transition:color_0.05s] ease-spring-soft rounded-lg transform cursor-poniter",
        isActive
          ? "text-(--foreground)"
          : "text-(--muted-foreground) hover:text-(--foreground)"
      )}
    >
      {isActive && (
        <>
          <motion.span
            className="absolute inset-0 flex items-center justify-center bg-(--surface-2) pointer-events-none border border-(--border) z-0 rounded-lg"
            transition={{
              duration: 0.4,
              ease: [0.175, 0.885, 0.32, 1.1],
            }}
            layoutId={`tab-${uniqueId}`}
          >
            <span className="absolute left-0 right-0 top-[0px] h-4.5 rounded-full bg-gradient-to-t z-1  from-(--background) to-(--link) opacity-10 blur-[2px]"></span>
          </motion.span>
        </>
      )}
      <tab.icon className="w-4 h-4 relative z-1" />
      <span className="capitalize relative z-1">{tab.name}</span>
    </Tabs.Trigger>
  );
}

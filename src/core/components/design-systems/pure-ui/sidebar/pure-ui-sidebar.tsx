"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { getSidebarConfig } from "./data";
import { SidebarSection } from "./sidebar-section";

export function PureUISidebar() {
  const pathname = usePathname();

  const sidebarConfig = useMemo(() => getSidebarConfig(pathname), [pathname]);

  return (
    <div className="p-4">
      <div className="space-y-2">
        {sidebarConfig.map((section) => {
          return <SidebarSection key={section.id} section={section} pathname={pathname} />;
        })}
      </div>
    </div>
  );
}

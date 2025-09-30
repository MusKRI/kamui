"use client";

import { usePathname } from "next/navigation";
import { useMemo, useRef } from "react";
import { motion } from "motion/react";

import { getSidebarConfig } from "./data";
import { SidebarSection } from "./sidebar-section";
import { useSidebar } from "./use-sidebar";
import { useMediaQuery } from "@/core/hooks/use-media-query";
import { useOutsideClick } from "@/core/hooks/use-outside-click";

export function PureUISidebar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { isOpen, close: closeSidebar, toggleButtonRef } = useSidebar();
  const pathname = usePathname();

  const sidebarConfig = useMemo(() => getSidebarConfig(pathname), [pathname]);

  const sidebarRef = useRef<HTMLDivElement>(null);

  useOutsideClick(
    sidebarRef,
    () => {
      if (isMobile && isOpen) {
        closeSidebar();
      }
    },
    true,
    toggleButtonRef ? [toggleButtonRef] : []
  );

  return (
    <>
      {isMobile && isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="absolute left-0 right-0 top-0 bottom-0 bg-black/50 z-40 backdrop-blur-[2px]"
        />
      )}
      <motion.aside
        ref={sidebarRef}
        initial={false}
        animate={{ x: isOpen ? 0 : -260 }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        className="h-[calc(100vh-4rem)] border-r border-(--border) w-[260px] shrink-0 lg:flex-col overflow-y-auto top-16 fixed bg-(--surface-2) overscroll-y-contain scrollbar-gutter z-50"
      >
        <div className="p-4">
          <div className="space-y-2">
            {sidebarConfig.map((section) => {
              return (
                <SidebarSection
                  key={section.id}
                  section={section}
                  pathname={pathname}
                />
              );
            })}
          </div>
        </div>
      </motion.aside>
    </>
  );
}

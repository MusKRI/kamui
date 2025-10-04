import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

import { cn } from "@/lib/classes";
import { ChevronDownIcon } from "icons/icons1";

import { type SidebarSection } from "./types";
import { getSavedExpandedState, saveExpandedState } from "./sidebar-utils";

type SidebarSectionProps = {
  section: SidebarSection;
  pathname: string;
  handleClosingSidebar: () => void;
};

export function SidebarSection({
  section,
  pathname,
  handleClosingSidebar,
}: SidebarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(() => {
    const savedState = getSavedExpandedState();
    const savedExpanded = savedState[section.id];
    return savedExpanded !== undefined
      ? savedExpanded
      : section.defaultExpanded ?? false;
  });
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const toggleExpanded = useCallback(() => {
    if (section.collapsible !== false) {
      const newExpanded = !isExpanded;
      setIsExpanded(newExpanded);
      saveExpandedState(section.id, newExpanded);
    }
  }, [section.id, section.collapsible, isExpanded]);

  // Don't render animated content until hydrated to avoid hydration mismatch
  if (!isHydrated) {
    return (
      <div className="mb-3">
        <div
          className={cn(
            "flex items-center justify-between py-1 text-sm font-medium text-(--muted-foreground) cursor-pointer hover:text-(--link) transition-colors group",
            section.collapsible === false && "cursor-default"
          )}
        >
          <span>{section.title}</span>
          {section.collapsible !== false && (
            <ChevronDownIcon className="w-4 h-4 opacity-0" />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-3">
      <div
        className={cn(
          "flex items-center justify-between py-1 text-xs font-medium text-(--muted-foreground) cursor-pointer hover:text-(--link) transition-colors group font-mono",
          section.collapsible === false && "cursor-default"
        )}
        onClick={toggleExpanded}
      >
        <span>{section.title}</span>
        {section.collapsible !== false && (
          <motion.div
            animate={{ rotate: isExpanded ? 0 : -90 }}
            transition={{ duration: 0.2 }}
            // className="group-hover:opacity-100 opacity-0"
          >
            <ChevronDownIcon className="w-4 h-4" />
          </motion.div>
        )}
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-l-[1.5px] border-(--border)"
          >
            <div className="space-y-1 pl-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;

                const ItemContent = (
                  <div
                    className={cn(
                      "flex items-center justify-between px-3 py-1 text-sm rounded-md [transition:color_0.01s,translate_0.2s] ease-spring-soft group before:content-[''] before:absolute before:h-px before:w-5 before:border-t before:border-dashed before:[transition:left_0.15s] before:ease-spring-soft before:-left-full before:border-(--border)",
                      isActive
                        ? "text-(--foreground) font-medium translate-x-2 before:-left-4 before:border-(--link)"
                        : "text-(--muted-foreground) hover:text-(--foreground)",
                      item.disabled && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {item.icon && (
                        <item.icon
                          className={cn(
                            "w-4 h-4",
                            isActive && "text-(--accent-foreground)"
                          )}
                        />
                      )}
                      {item.title}
                    </span>
                    {item.badge && (
                      <span className="text-xs px-2 py-0.5 bg-(--accent-soft) text-(--accent-soft-foreground) rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                );

                return (
                  <motion.div
                    key={item.id}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    style={{ willChange: "transform" }}
                  >
                    {item.href && !item.disabled ? (
                      <Link
                        href={item.href as any}
                        className="block"
                        onClick={handleClosingSidebar}
                      >
                        {ItemContent}
                      </Link>
                    ) : (
                      ItemContent
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

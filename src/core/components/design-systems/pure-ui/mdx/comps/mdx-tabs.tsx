"use client";

import {
  createContext,
  useContext,
  useId,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/classes";

// Context for managing tab state
interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
  uniqueId: string;
  defaultValue: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

// Hook to use tabs context
function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tab components must be used within a Tabs component");
  }
  return context;
}

// Main Tabs component
interface TabsProps {
  defaultValue: string;
  value?: string;
  children: ReactNode;
  className?: string;
}

export function Tabs({ defaultValue, value, children, className }: TabsProps) {
  const uniqueId = useId();
  const [internalValue, setInternalValue] = useState(defaultValue);

  const activeTab = value ?? internalValue;

  const handleTabChange = useCallback(
    (newValue: string) => {
      if (!value) {
        setInternalValue(newValue);
      }
    },
    [value]
  );

  const contextValue: TabsContextValue = {
    activeTab,
    setActiveTab: handleTabChange,
    uniqueId,
    defaultValue,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <LayoutGroup>
        <TabsPrimitive.Root
          className={cn("relative h-full", className)}
          defaultValue={defaultValue}
          value={value}
          onValueChange={handleTabChange}
          asChild
        >
          <div className="flex flex-col gap-4">{children}</div>
        </TabsPrimitive.Root>
      </LayoutGroup>
    </TabsContext.Provider>
  );
}

// TabsList component
interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export function TabsList({ children, className }: TabsListProps) {
  return (
    <TabsPrimitive.List
      className={cn("relative flex items-center gap-3", className)}
    >
      {children}
    </TabsPrimitive.List>
  );
}

// TabsTrigger component
interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export function TabsTrigger({
  value,
  children,
  className,
  disabled = false,
}: TabsTriggerProps) {
  const { activeTab, uniqueId } = useTabs();
  const isActive = activeTab === value;

  return (
    <TabsPrimitive.Trigger
      value={value}
      className={cn(
        "relative flex items-center gap-2 px-3 py-0.5 text-sm font-medium [transition:color_0.05s] ease-spring-soft rounded-lg transform-gpu",
        isActive
          ? "text-(--foreground)"
          : "text-(--muted-foreground) hover:text-(--foreground)",
        disabled &&
          "opacity-50 cursor-not-allowed hover:text-(--muted-foreground)",
        className
      )}
      disabled={disabled}
    >
      <AnimatePresence>
        {isActive && (
          <motion.span
            className="absolute inset-0 flex items-center justify-center bg-(--muted) pointer-events-none border border-(--border) z-0 rounded-lg"
            transition={{
              duration: 0.4,
              ease: [0.175, 0.885, 0.32, 1.1],
            }}
            layoutId={`tab-${uniqueId}`}
          >
            <span className="absolute left-0 right-0 top-[0px] h-4.5 rounded-full bg-gradient-to-t z-1  from-(--background) to-(--link) opacity-10 blur-[2px]"></span>
          </motion.span>
        )}
      </AnimatePresence>
      <span
        className={cn(
          "relative flex items-center gap-2 selt-start [&>p]:!mt-0 [&>p]:text-sm",
          isActive
            ? "[&>p]:text-(--foreground)"
            : "[&>p]:text-(--muted-foreground) hover:[&>p]:text-(--foreground)"
        )}
      >
        {children}
      </span>
    </TabsPrimitive.Trigger>
  );
}

// TabsContent component
interface TabsContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function TabsContent({ value, children, className }: TabsContentProps) {
  const { activeTab } = useTabs();
  const isActive = activeTab === value;
  const [hasBeenActive, setHasBeenActive] = useState(false);

  useEffect(() => {
    if (isActive && !hasBeenActive) {
      setHasBeenActive(true);
    }
  }, [isActive, hasBeenActive]);

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {isActive && (
        <TabsPrimitive.Content value={value} asChild forceMount>
          <motion.div
            layout
            key={value}
            className={cn("relative", className)}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: [0.19, 1, 0.22, 1],
            }}
            style={{ willChange: "opacity" }}
          >
            {/* Only render heavy components after the tab has been active */}
            {hasBeenActive ? (
              children
            ) : (
              <div className="flex items-center justify-center min-h-[200px]">
                <div className="flex items-center gap-2 text-(--muted-foreground)">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm">Loading content...</span>
                </div>
              </div>
            )}
          </motion.div>
        </TabsPrimitive.Content>
      )}
    </AnimatePresence>
  );
}

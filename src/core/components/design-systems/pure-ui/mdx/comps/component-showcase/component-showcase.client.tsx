"use client";

import { useId, useMemo, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { Code2, Eye } from "lucide-react";

import { ExtendedPureUIFile } from "@/lib/pure-ui/mdx/component-processor";
import { ExtendedRegistryItem } from "@/lib/pure-ui/utils/comp-registry";
import { cn } from "@/lib/classes";
import { ComponentShowcaseTab } from "./component-showcase-tab";
import { Index } from "@/registry/pure-ui/components/__index__";
import { ComponentSources } from "./component-sources";

interface ComponentShowcaseClientProps {
  processedFiles: ExtendedPureUIFile[];
  item: ExtendedRegistryItem;
  name: string;
}

export const tabs = [
  {
    name: "preview",
    icon: Eye,
  },
  {
    name: "code",
    icon: Code2,
  },
] as const;

export function ComponentShowcaseClient({
  processedFiles,
  item,
  name,
}: ComponentShowcaseClientProps) {
  const [activeTab, setActiveTab] = useState<string>("preview");

  const uniqueId = useId();

  const FoundComponent = Index[name];

  const ComponentDemo = useMemo(
    () => FoundComponent?.component,
    [FoundComponent]
  );

  return (
    <div className={cn("PureUIComponentShowcase relative mb-7")}>
      <LayoutGroup>
        <Tabs.Root asChild value={activeTab} onValueChange={setActiveTab}>
          <div className="flex flex-col gap-4">
            <Tabs.List className="relative flex items-center gap-3">
              {tabs.map((tab) => (
                <ComponentShowcaseTab
                  key={tab.name}
                  tab={tab}
                  isActive={activeTab === tab.name}
                  uniqueId={uniqueId}
                />
              ))}
            </Tabs.List>

            <AnimatePresence initial={false}>
              {activeTab === "preview" && (
                <Tabs.Content value="preview" asChild forceMount>
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, x: -10, height: "auto" }}
                    animate={{ opacity: 1, x: 0, height: "100%" }}
                    exit={{ opacity: 0, x: 10, height: "auto" }}
                    transition={{
                      duration: 0.4,
                      ease: [0.175, 0.885, 0.32, 1.1],
                    }}
                    style={{
                      willChange: "height",
                    }}
                    className="rounded-[12px] bg-(--muted) border border-(--border)"
                  >
                    <div className="px-8 flex items-center justify-center pb-12 pt-12 h-full">
                      <div className="h-full w-full">
                        <div className="flex items-center justify-center min-h-full h-full">
                          {ComponentDemo ? (
                            <div className="transform w-full flex items-center justify-center py-4">
                              <ComponentDemo />
                            </div>
                          ) : (
                            <div className="text-center p-8">
                              <p className="text-white font-medium">
                                Demo Loading...
                              </p>
                              <p className="text-gray-400 text-sm mt-2">
                                {FoundComponent.title}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Tabs.Content>
              )}

              {activeTab === "code" && (
                <Tabs.Content value="code" asChild forceMount>
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, x: 10, height: "auto" }}
                    animate={{ opacity: 1, x: 0, height: "100%" }}
                    exit={{ opacity: 0, x: 10, height: "auto" }}
                    transition={{
                      duration: 0.4,
                      ease: [0.175, 0.885, 0.32, 1.1],
                    }}
                    style={{
                      willChange: "height",
                    }}
                    className="rounded-[12px] border border-(--border) overflow-hidden"
                  >
                    <ComponentSources
                      name={name}
                      processedFiles={processedFiles}
                      item={item}
                    />
                  </motion.div>
                </Tabs.Content>
              )}
            </AnimatePresence>
          </div>
        </Tabs.Root>
      </LayoutGroup>
    </div>
  );
}

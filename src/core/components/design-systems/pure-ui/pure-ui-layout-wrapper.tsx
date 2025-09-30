"use client";

import { motion } from "motion/react";
import { useSidebar } from "./sidebar/use-sidebar";
import { PureUISidebar } from "./sidebar";
import { useMediaQuery } from "@/core/hooks/use-media-query";
import { useEffect } from "react";

export function PureUILayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, close } = useSidebar();

  const isMobile = useMediaQuery("(max-width: 768px)");

  // useEffect(() => {
  //   if (isMobile) {
  //     close();
  //   }
  // }, [isMobile]);

  return (
    <div className="h-full flex-1 flex flex-row mt-16">
      <PureUISidebar />
      <motion.div
        initial={false}
        animate={{
          marginLeft: isOpen && !isMobile ? 260 : 0,
        }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        className="flex-1"
      >
        {children}
      </motion.div>
    </div>
  );
}

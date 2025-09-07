"use client";

import { motion } from "motion/react";

export function DraggingSlide() {
  return (
    <div className="flex justify-center absolute top-0 -translate-x-1/2 left-1/2 -translate-y-[7.5px]">
      <motion.button
        drag="x"
        dragDirectionLock
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
        dragElastic={0.1}
        whileHover={{ cursor: "grab" }}
        whileDrag={{ cursor: "grabbing" }}
        className="bg-surface-1 py-1 px-0.5 flex items-center justify-center gap-1 cursor-grab"
      >
        <div className="h-px bg-primary-9 relative w-4 before:absolute before:size-1 before:left-0 before:bg-primary-9 before:-translate-y-[1.5px] before:rotate-45"></div>
        <div className="size-2 rounded-full bg-primary-9"></div>
        <div className="h-px bg-primary-9 relative w-4 before:absolute before:size-1 before:right-0 before:bg-primary-9 before:-translate-y-[1.5px] before:rotate-45"></div>
      </motion.button>
    </div>
  );
}

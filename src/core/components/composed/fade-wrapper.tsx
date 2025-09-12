"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { cn } from "@/lib/classes";

type Props = {
  children: React.ReactNode;
};

export function FadeWrapper({ children }: Props) {
  const scrollY = useMotionValue(0);

  const fadeOpacityBottom = useTransform(scrollY, [0, 15], [0, 1], {
    clamp: true,
  });

  const fadeOpacityTop = useTransform(scrollY, [0, 15], [0, 1], {
    clamp: true,
  });

  useEffect(() => {
    const handleWindowScroll = () => {
      // Use window.scrollY to drive the fade
      scrollY.set(window.scrollY || 0);
    };

    // Initialize once on mount
    handleWindowScroll();
    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [scrollY]);

  return (
    <div className="relative bg-surface-1">
      {/* Global top fade + blur overlay */}
      <motion.div
        className={cn(
          "fixed top-16 inset-x-0 h-12 pointer-events-none [--clr:#151515]",
          "bg-gradient-to-b from-background/40 to-transparent backdrop-blur-[6px] max-w-[1120px] mx-auto"
        )}
        style={{
          opacity: fadeOpacityTop,
          willChange: "opacity",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 25%, transparent)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 25%, transparent)",
        }}
        initial={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />
      {children}

      {/* Global bottom fade + blur overlay */}
      <motion.div
        className={cn(
          "fixed bottom-0 inset-x-0 h-12 z-30 pointer-events-none [--clr:#151515]",
          "bg-gradient-to-t from-transparent to-background/40 backdrop-blur-[6px] max-w-[1120px] mx-auto"
        )}
        style={{
          opacity: fadeOpacityBottom,
          willChange: "opacity",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 25%, transparent)",
          maskImage: "linear-gradient(to top, rgba(0,0,0,1) 25%, transparent)",
        }}
        initial={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />
    </div>
  );
}

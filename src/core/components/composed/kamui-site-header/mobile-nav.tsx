"use client";

import { useState } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
import { cn } from "@/lib/classes";
import { kamuiHeaderLinks } from "@/core/config/kamui-header-config";
import Link from "next/link";

export function KamuiSiteHeaderMobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <MobileNavBottomGates isOpen={isOpen} />
      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

type MobileNavBottomGates = {
  isOpen: boolean;
};

function MobileNavBottomGates({ isOpen }: MobileNavBottomGates) {
  return (
    <div className="absolute bottom-0 w-full left-0 flex items-center">
      <div
        className={cn(
          "w-full h-[1px] border-b border-surface-7 border-dashed",
          "[transition:rotate_0.2s_ease-out] origin-left",
          isOpen && "[rotate:90deg]"
        )}
      ></div>
      <div className="size-[0.3125rem] rounded-full absolute bottom-0 left-0 bg-surface-7 translate-x-[-2px] translate-y-[2px] ring-4 ring-transparent"></div>
      <div
        className={cn(
          "w-full h-[1px] border-b border-surface-7 border-dashed",
          "[transition:rotate_0.2s_ease-out] origin-right",
          isOpen && "[rotate:-90deg]"
        )}
      ></div>
      <div className="size-[0.3125rem] rounded-full absolute bottom-0 right-0 bg-surface-7 translate-x-[2px] translate-y-[2px] ring-4 ring-transparent"></div>
    </div>
  );
}

type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  const line1Variants: Variants = {
    initial: {
      rotate: 0,
      x: 0,
      y: 0,
    },
    animate: {
      rotate: -45,
      x: -2.35,
      y: 0.35,
      transformOrigin: "top right",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const line2Variants: Variants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  };

  const line3Variants: Variants = {
    initial: {
      rotate: 0,
      x: 0,
      y: 0,
    },
    animate: {
      rotate: 45,
      x: -2.35,
      y: -0.35,
      transformOrigin: "bottom right",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <button
      onClick={onClick}
      className="cursor-pointer focus:outline-none self-center my-auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4.5 [&>line]:[transition:x_0.15s,y_0.15s,rotate_0.15s] [&>line]:[transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
      >
        <motion.line
          x1={4}
          y1={6}
          x2={20}
          y2={6}
          variants={line1Variants}
          initial={false}
          animate={isOpen ? "animate" : "initial"}
        />
        <motion.line
          x1={4}
          y1={12}
          x2={20}
          y2={12}
          variants={line2Variants}
          initial={false}
          animate={isOpen ? "animate" : "initial"}
        />
        <motion.line
          x1={4}
          y1={18}
          x2={20}
          y2={18}
          variants={line3Variants}
          initial={false}
          animate={isOpen ? "animate" : "initial"}
        />
      </svg>
    </button>
  );
}

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute left-0 right-0 top-full px-1 min-h-[200px] h-full"
          initial={{
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
            backdropFilter: "blur(0px)",
          }}
          animate={{
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            backdropFilter: "blur(6px)",
            transition: { delay: 0.1 },
          }}
          exit={{
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
            backdropFilter: "blur(0px)",
          }}
        >
          <div className="w-full h-full rounded-lg px-4">
            <ul className="flex flex-col items-center justify-center gap-3 h-full">
              {kamuiHeaderLinks.map((link) => (
                <li key={link.label} className="flex items-center gap-4 group">
                  <Link
                    href={link.href as any}
                    className="text-surface-10 text-2xl font-semibold group-hover:text-surface-12 [transition:color_0.1s] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

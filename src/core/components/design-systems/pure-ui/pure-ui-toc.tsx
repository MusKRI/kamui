"use client";

import { Effect } from "effect";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import {
  createActiveHeadingTracker,
  type Heading,
  type ActiveHeadingOptions,
} from "@/lib/shared/heading-extractor";
import { LineLeaning } from "@/core/icons/icons1";
import { cn } from "@/lib/classes";
import { usePathname } from "next/navigation";
import { ParsedContent } from "@/lib/pure-ui/utils/content-parser";

type PureUITocProps = {
  parsedContent: ParsedContent;
};

export function PureUIToc({ parsedContent }: PureUITocProps) {
  const headings = parsedContent.headings;

  /**
   * Handles clicking on a ToC item to scroll to the corresponding heading
   */
  function handleScroll(id: string) {
    for (const heading of Array.from(document.querySelectorAll("h2,h3"))) {
      heading.setAttribute("data-highlight", "false");
    }

    const element = document.getElementById(id);

    if (element) {
      const top = element.offsetTop - 100;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      element.setAttribute("data-highlight", "true");

      setTimeout(() => {
        element.setAttribute("data-highlight", "false");
      }, 2000);
    }
  }

  // Don't render if no headings are available
  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <div className="py-6 font-mono">
      <div className="font-medium flex items-center">
        <LineLeaning className="w-4 h-4 mr-2" />
        Contents
      </div>

      <nav className="h-full relative">
        <div className="relative max-h-[calc(100vh-16rem)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-(--background) to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-(--background) to-transparent pointer-events-none z-10" />

          <div
            className="flex flex-col items-start max-h-[calc(100vh-16rem)] overflow-y-auto py-4"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE/Edge
            }}
          >
            {headings.map((heading, index, array) => {
              const currentHeading = array[index];
              const nextHeading = array[index + 1];
              const previousHeading = array[index - 1];

              const headingId = heading.id;

              return (
                <div
                  key={headingId}
                  onClick={() => handleScroll(headingId)}
                  // data-active={isActive}
                  className={cn(
                    "relative py-1.5 first:pt-0 last:pb-0 text-(--muted-foreground) cursor-pointer hover:text-(--accent) [overlap-wrap:anywhere]"
                  )}
                  style={{
                    paddingInlineStart: heading.level === 3 ? "26px" : "14px",
                  }}
                >
                  {currentHeading.level === 3 &&
                    previousHeading?.level === 2 && (
                      <svg
                        className="absolute -top-1.5 start-0 size-4"
                        viewBox="0 0 16 16"
                      >
                        <line
                          x1="0"
                          y1="0"
                          x2="10"
                          y2="12"
                          className="stroke-(--foreground)/10"
                          strokeWidth="1.2"
                        />
                      </svg>
                    )}
                  {currentHeading.level === 2 &&
                    previousHeading?.level === 3 && (
                      <svg
                        className="absolute -top-1.5 start-0 size-4"
                        viewBox="0 0 16 16"
                      >
                        <line
                          x1="10"
                          y1="0"
                          x2="0"
                          y2="12"
                          className="stroke-(--foreground)/10"
                          strokeWidth="1.2"
                        />
                      </svg>
                    )}
                  <div
                    className={cn(
                      "absolute inset-y-0 w-px bg-(--foreground)/10",
                      currentHeading?.level === 3 &&
                        previousHeading?.level === 2 &&
                        nextHeading?.level === 3 &&
                        "top-1.5",
                      currentHeading?.level === 3 &&
                        previousHeading?.level === 3 &&
                        nextHeading?.level === 2 &&
                        "bottom-1.5",
                      currentHeading?.level === 2 &&
                        previousHeading?.level === 3 &&
                        nextHeading?.level === 3 &&
                        "top-1.5 bottom-1.5",
                      currentHeading?.level === 2 &&
                        previousHeading?.level === 2 &&
                        nextHeading?.level === 3 &&
                        "bottom-1.5"
                    )}
                    style={{
                      insetInlineStart: heading.level === 3 ? "10px" : "0px",
                    }}
                  ></div>
                  <span className="text-xs">{heading.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}

function waitForElement(selector: string): Effect.Effect<Element> {
  return Effect.async<Element>((resolve) => {
    const checkForElement = () => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(Effect.succeed(element));
      } else {
        setTimeout(checkForElement, 100);
      }
    };

    checkForElement();
  });
}

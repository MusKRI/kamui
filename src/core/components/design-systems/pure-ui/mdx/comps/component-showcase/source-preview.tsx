"use client";

import React from "react";
import { cn } from "@/lib/classes";
import { ExtendedPureUIFile } from "@/lib/pure-ui/mdx/component-processor";
import { CopyButton } from "../copy-button";

interface SourcePreviewProps {
  currentFile: ExtendedPureUIFile;
}

export function SourcePreview({ currentFile }: SourcePreviewProps) {
  const code = currentFile.content || "";
  const language = currentFile.detectedLanguage || "text";
  const highlightedCode = currentFile.highlightedCode || "";

  // If no code content, show empty state
  if (!code.trim()) {
    return (
      <div className="flex items-center justify-center h-32 text-surface-9 text-sm">
        No code content available
      </div>
    );
  }

  // For text or no highlighted code, show plain text
  if (language === "text" || !highlightedCode) {
    return (
      <div className="relative group h-full">
        <div className="rounded-xl w-full h-full bg-surface-2/40 border border-surface-6/30 overflow-y-auto backdrop-blur-sm transition-all duration-300 ease-out">
          <div className="relative">
            <div className="absolute top-3 right-3 z-10">
              <CopyButton code={code} />
            </div>
          </div>
          <pre
            className={cn(
              "px-6 py-5 text-sm font-mono leading-[1.7] overflow-auto h-full",
              "bg-surface-2/40 text-surface-12 whitespace-pre",
              "scrollbar-thin scrollbar-track-surface-3/30 scrollbar-thumb-surface-7/50",
              "hover:scrollbar-thumb-surface-8/60"
            )}
            style={{
              fontFamily: "var(--font-mono)",
              fontFeatureSettings: '"liga" 0, "calt" 0',
            }}
          >
            <code>{code}</code>
          </pre>
          <div className="h-px bg-gradient-to-r from-transparent via-surface-6/40 to-transparent" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative group h-full">
      <div className="absolute top-3 right-8 z-10">
        <CopyButton code={code} />
      </div>

      <div className="w-full h-full overflow-y-auto transition-all duration-300 ease-out">
        <div
          className={cn(
            "relative overflow-y-auto rounded-lg font-mono",
            // Progressive masking for horizontal scroll
            "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-8 before:bg-gradient-to-r before:from-(--muted) before:to-transparent before:z-10 before:pointer-events-none",
            "after:absolute after:right-0 after:top-0 after:bottom-0 after:w-8 after:bg-gradient-to-l after:from-(--muted) after:to-transparent after:z-10 after:pointer-events-none",
            // Custom scrollbar styles with proper overflow handling
            "[&>pre]:overflow-x-auto [&>pre]:scrollbar-thin [&>pre]:scrollbar-track-transparent [&>pre]:scrollbar-thumb-(--muted-foreground)",
            // Responsive text size
            "[&>pre]:text-sm [&>pre]:leading-relaxed",
            // Padding and spacing - increased horizontal padding to account for fade
            "[&>pre]:px-8 [&>pre]:py-4",
            // Preserve whitespace and prevent wrapping
            "[&>pre]:whitespace-pre [&>pre>code]:whitespace-pre",
            // Ensure code block takes full width and doesn't wrap
            "[&>pre>code]:inline-block [&>pre>code]:w-max [&>pre>code]:min-w-full",
            // Tab size for proper indentation
            "[&>pre]:tab-size-4 [&>pre>code]:tab-size-4",
            // Ensure proper theme variable inheritance
            "[&>pre]:!bg-(--muted) [&>pre]:text-(--muted-foreground)"
          )}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </div>
    </div>
  );
}

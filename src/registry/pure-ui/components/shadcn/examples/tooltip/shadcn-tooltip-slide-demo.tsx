"use client";
import { useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/pure-ui/components/shadcn/ui/tooltip";
import { Button } from "@/registry/pure-ui/components/shadcn/ui/button";

export function TooltipSlideDemo() {
  const sides = ["top", "right", "bottom", "left"] as const;
  const [side, setSide] = useState<(typeof sides)[number]>("top");

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Slide Outside Demo
          </Button>
        </TooltipTrigger>
        <TooltipContent
          animationPreset="slideOutside"
          transitionPreset="outQuad"
          side={side}
        >
          <p className="text-sm">Copy Essence</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Slide Inside Demo
          </Button>
        </TooltipTrigger>
        <TooltipContent
          animationPreset="slideInside"
          transitionPreset="outQuad"
          side={side}
        >
          <p className="text-sm">Copy Essence</p>
        </TooltipContent>
      </Tooltip>

      <div className="absolute bottom-4 md:right-4 md:top-1/2 md:-translate-y-1/2 flex items-center gap-2">
        <label
          htmlFor="side-select"
          className="text-xs font-medium text-foreground/70"
        >
          Side
        </label>
        <select
          id="side-select"
          value={side}
          onChange={(e) => setSide(e.target.value as (typeof sides)[number])}
          className="text-xs px-2 py-1 rounded-xs border border-(--border) bg-(--background) text-(--foreground) focus:outline-hidden focus:ring-1 focus:ring-(--ring)"
        >
          {sides.map((preset) => (
            <option key={preset} value={preset}>
              {preset}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

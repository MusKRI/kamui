"use client";

import Link from "next/link";

import { cn } from "@/lib/classes";
import { useId } from "react";
import {
  getRandomWavyShapePattern,
  type WavyShapePattern,
} from "components/patterns/wavy-shape-patterns";

type ColorModeValue = string | { light: string; dark: string };

interface DesignSystemCardProps {
  title?: string;
  borderColor?: ColorModeValue; // light/dark aware
  blurColor?: ColorModeValue; // light/dark aware; also drives mesh color
  animated?: boolean;
  href?: string;
  content?: React.ReactNode;
  shapePattern?: WavyShapePattern;
  shapeStopColors?: [ColorModeValue, ColorModeValue];
}

export function DesignSystemCard({
  title = "Pure UI",
  borderColor = "#bb3f60",
  blurColor = "#bb3f60",
  animated = false,
  href = "#",
  content,
  shapePattern = 1,
  shapeStopColors = ["#bb3f60", "#bb3f60"],
}: DesignSystemCardProps) {
  const toMode = (value: ColorModeValue) =>
    typeof value === "string" ? { light: value, dark: value } : value;

  const border = toMode(borderColor);
  const blur = toMode(blurColor);

  const cardVars = {
    ["--card-border-color-light" as any]: border.light,
    ["--card-border-color-dark" as any]: border.dark,
    ["--card-blur-color-light" as any]: blur.light,
    ["--card-blur-color-dark" as any]: blur.dark,
  } as React.CSSProperties;

  const meshClass = cn("mesh-gradient", !animated && "mesh-gradient-static");

  const WavyShapePattern = getRandomWavyShapePattern(shapePattern);

  // Generate a stable, SSR-safe unique ID for this instance
  const reactId = useId();
  const uniquePatternId = `${reactId}-${shapePattern}`.replace(
    /[^a-zA-Z0-9_-]/g,
    ""
  );

  return (
    <Link
      href={href as any}
      className="relative group design-system-card focus:outline-none"
      style={cardVars}
    >
      <WavyShapePattern
        key={`${shapePattern}-${shapeStopColors}`}
        className="size-65 sm:size-75 md:size-auto mx-auto"
        stopColors={shapeStopColors}
        uniqueId={uniquePatternId}
      />

      <div className="absolute blur-2xl group-hover:blur-3xl group-focus:blur-3xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-18 [transition:filter_0.2s] ease-spring-soft bg-(--card-blur-color)"></div>
      <div className="inset-0 absolute flex flex-col">
        <div className="flex-1 grid place-content-center">
          <div
            className="relative size-[4.5rem] md:size-[7rem] rounded-[15px] overflow-hidden border-2 [grid-area:1/1] z-1 group-hover:-rotate-12 origin-bottom-right [transition:rotate_0.2s] ease-spring-soft"
            style={{ borderColor: "var(--card-border-color)" }}
          >
            <div
              className={cn(
                "absolute top-0 left-0 w-full h-full opacity-70",
                meshClass
              )}
            ></div>
          </div>
          <div
            className="relative size-[4.5rem] md:size-[7rem] rounded-[15px] overflow-hidden border-2 [grid-area:1/1] z-2 group-hover:rotate-12 backdrop-blur-sm origin-bottom-left [transition:rotate_0.2s] ease-spring-soft"
            style={{ borderColor: "var(--card-border-color)" }}
          >
            <div
              className={cn(
                "absolute top-0 left-0 w-full h-full flex items-center justify-center",
                meshClass
              )}
            >
              {content}
            </div>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-surface-12 text-xl font-merriweather">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

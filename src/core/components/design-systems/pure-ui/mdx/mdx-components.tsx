import * as React from "react";
import { MDXComponents } from "mdx/types";
import { Code2, Terminal } from "lucide-react";

import { cn } from "@/lib/classes";

import { ComponentShowcase } from "./comps/component-showcase";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./comps/mdx-tabs";
import { InstallationCommands } from "./comps/installation-commands";
import { Steps, Step } from "./comps/steps";
import { ComponentCodePreview } from "./comps/component-code-preview";
import { CodeBlock, CodeElement } from "./comps/code-block";

export const mdxComponents: MDXComponents = {
  h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
    <h1
      className={cn(
        "PureH1 font-mono mt-8 mb-6 scroll-m-28 text-4xl font-bold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.ComponentProps<"h2">) => {
    return (
      <h2
        id={props.children
          ?.toString()
          .replace(/ /g, "-")
          .replace(/'/g, "")
          .replace(/\?/g, "")
          .replace(/&/g, "and")
          .replace(/[^\w\-]/g, "")
          .toLowerCase()}
        className={cn(
          "PureH2 font-mono mt-16 mb-6 scroll-m-28 text-3xl font-medium tracking-tight first:mt-0 lg:mt-20 text-(--foreground)",
          className
        )}
        {...props}
      />
    );
  },
  h3: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      id={props.children
        ?.toString()
        .replace(/ /g, "-")
        .replace(/'/g, "")
        .replace(/\?/g, "")
        .replace(/&/g, "and")
        .replace(/[^\w\-]/g, "")
        .toLowerCase()}
      className={cn(
        "PureH3 font-mono mt-12 mb-4 scroll-m-28 text-xl font-semibold tracking-tight text-(--foreground)",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
    <h4
      className={cn(
        "PureH4 font-mono mt-10 mb-3 scroll-m-28 text-lg font-medium tracking-tight text-(--foreground)",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.ComponentProps<"h5">) => (
    <h5
      className={cn(
        "PureH5 font-mono mt-8 mb-3 scroll-m-28 text-base font-medium tracking-tight text-(--foreground)",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.ComponentProps<"h6">) => (
    <h6
      className={cn(
        "PureH6 font-mono mt-6 mb-2 scroll-m-28 text-sm font-medium tracking-tight uppercase text-(--foreground)",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p
      className={cn(
        "PureP !leading-[2] text-pretty text-(--default-foreground) text-base mb-6 last:mb-0 [&:not(:first-child)]:mt-6 [.ComponentShowcase+&]:!mt-0",
        className
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn("PureStrong font-semibold text-(--foreground)", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul
      className={cn(
        "PureUL my-6 ml-6 list-disc space-y-2 [&>li]:mt-2 marker:text-(--muted-foreground) UnorderedList ps-6 in-[.ListItem]:my-[1em]",
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
    <ol
      className={cn(
        "PureOL my-6 ml-6 list-decimal space-y-2 [&>li]:mt-2 marker:text-(--muted-foreground) marker:font-medium",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.ComponentProps<"li">) => (
    <li className={cn("PureLI leading-[2]", className)} {...props} />
  ),

  // Code blocks
  pre: CodeBlock,
  code: CodeElement,

  ComponentShowcase,
  ComponentCodePreview,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Steps,
  Step,

  // Icons
  Code2,
  Terminal,
  InstallationCommands,
};

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/classes";

const badgeVariants = cva(
  "inline-flex items-center justify-center border font-medium w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:pointer-events-none focus-visible:border-(--focus) focus-visible:ring-(--focus)/50 focus-visible:ring-[3px] aria-invalid:ring-(--danger)/20 dark:aria-invalid:ring-(--danger)/40 aria-invalid:border-(--danger) transition-[color,box-shadow] overflow-hidden data-[disabled=true]:opacity-50 data-[disabled=true]:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-(--accent) text-(--accent-foreground) [a&]:hover:bg-(--accent)/90",
        secondary:
          "border-transparent bg-(--surface-3) text-(--accent-soft-foreground) [a&]:hover:bg-[color:color-mix(in_oklab,black_10%,var(--accent-soft)_100%)] dark:[a&]:hover:bg-[color:color-mix(in_oklab,white_10%,var(--accent-soft)_100%)] [a&]:hover:text-(--default-foreground) focus-visible:border-[color:color-mix(in_oklab,black_50%,var(--muted-foreground)_100%)]",
        destructive:
          "[a&]:active:scale-95 border-(--danger)/10 bg-[color:color-mix(in_oklab,white_100%,var(--danger)_50%)] dark:bg-[color:color-mix(in_oklab,black_100%,var(--danger)_50%)] text-[color:color-mix(in_oklab,black_50%,var(--danger)_50%)] dark:text-[color:color-mix(in_oklab,white_50%,var(--danger)_50%)] [a&]:hover:bg-[color:color-mix(in_oklab,white_50%,var(--danger)_50%)] dark:[a&]:hover:bg-[color:color-mix(in_oklab,black_50%,var(--danger)_50%)] [a&]:hover:border-(--danger)/25 focus-visible:border-(--danger)/50",
        outline:
          "[a&]:active:scale-95 bg-(--accent)/10 border-(--accent)/50 text-(--accent) [a&]:hover:bg-(--accent)/20 [a&]:hover:border-(--accent) focus-visible:bg-(--accent)/20 focus-visible:border-(--accent)",
      },
      size: {
        sm: "px-2 py-0.5 text-xs [&>svg]:size-3",
        md: "px-2.5 py-0.5 text-sm [&>svg]:size-4",
        lg: "px-3 py-1 text-base [&>svg]:size-5",
      },
      radius: {
        full: "rounded-full",
        lg: "rounded-lg",
        md: "rounded-md",
        sm: "rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      radius: "md",
    },
  }
);

function Badge({
  className,
  variant,
  size,
  radius,
  asChild = false,
  disabled = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
    disabled?: boolean;
  }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      data-disabled={disabled}
      className={cn(badgeVariants({ variant, size, radius }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

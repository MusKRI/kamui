"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/classes";

const checkboxVariants = cva(
  [
    // Root
    `group size-7 relative inline-flex items-center justify-center shrink-0 overflow-hidden outline-hidden focus:outline-hidden focus-visible:outline-hidden cursor-pointer`,
    `before:content-[''] before:absolute before:border-2 before:inset-0 before:border-(--border) not-disabled:hover:before:bg-(--accent-soft)/40`,
    `disabled:cursor-not-allowed disabled:grayscale disabled:scale-100 disabled:opacity-50`,
    `after:content-[''] after:absolute after:inset-0 after:scale-50 after:opacity-0 after:origin-center data-[state=checked]:after:scale-100 data-[state=checked]:after:opacity-100 data-[state=indeterminate]:after:scale-100 data-[state=indeterminate]:after:opacity-100`,
    `before:transition-colors active:scale-97 transition-transform after:[transition:0.2s_linear] after:[transition-property:opacity,scale,transform]`,
    `after:bg-gradient-to-b after:from-(--accent)/80 after:to-(--accent) after:text-(--accent-foreground) text-(--accent-foreground)`,
    // indicator
    `[&>[data-slot="checkbox-indicator"]]:relative [&>[data-slot="checkbox-indicator"]]:z-10 [&>[data-slot="checkbox-indicator"]]:h-3 [&>[data-slot="checkbox-indicator"]]:w-4 [&>[data-slot="checkbox-indicator"]]:opacity-0 data-[state=checked]:[&>[data-slot="checkbox-indicator"]]:opacity-100 data-[state=indeterminate]:[&>[data-slot="checkbox-indicator"]]:opacity-100 [&>[data-slot="checkbox-indicator"]]:pointer-events-none`,
    `[&>[data-slot="checkbox-indicator"]]:transition-opacity`,
  ],
  {
    variants: {
      size: {
        sm: [
          "size-4",
          // indicator
          `[&>[data-slot="checkbox-indicator"]]:w-3 [&>[data-slot="checkbox-indicator"]]:h-2`,
        ],
        default: [
          "size-5",
          // indicator
          `[&>[data-slot="checkbox-indicator"]]:w-4 [&>[data-slot="checkbox-indicator"]]:h-3`,
        ],
        lg: [
          "size-6",
          // indicator
          `[&>[data-slot="checkbox-indicator"]]:w-5 [&>[data-slot="checkbox-indicator"]]:h-4`,
        ],
      },
      radius: {
        none: "rounded-none before:rounded-none after:rounded-none",
        sm: "rounded-[6px] before:rounded-[6px] after:rounded-[6px]",
        default: "rounded-[7.2px] before:rounded-[7.2px] after:rounded-[7.2px]",
        lg: "rounded-[8.4px] before:rounded-[8.4px] after:rounded-[8.4px]",
        full: "rounded-full before:rounded-full after:rounded-full",
      },
    },
    defaultVariants: {
      size: "default",
      radius: "default",
    },
  }
);

type CheckboxCheckedState = boolean | "indeterminate";

export type CheckboxIconProps = {
  checked: CheckboxCheckedState;
};

interface CheckboxRootProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  reduceMotion?: boolean;
}

interface CheckboxRootContextType {
  checked: CheckboxCheckedState;
  setChecked: (checked: CheckboxCheckedState) => void;
  reduceMotion?: boolean;
}

const CheckboxRootContext = React.createContext<
  CheckboxRootContextType | undefined
>(undefined);

const useCheckboxRoot = (): CheckboxRootContextType => {
  const context = React.useContext(CheckboxRootContext);
  if (!context) {
    throw new Error("useCheckboxRoot must be used within a CheckboxRoot");
  }
  return context;
};

function CheckboxRoot({
  className,
  size = "default",
  radius = "default",
  onCheckedChange,
  reduceMotion,
  ...props
}: CheckboxRootProps) {
  const [isChecked, setIsChecked] = React.useState<CheckboxCheckedState>(
    props?.checked ?? props?.defaultChecked ?? false
  );

  React.useEffect(() => {
    if (props?.checked !== undefined) setIsChecked(props.checked);
  }, [props?.checked]);

  const handleCheckedChange = React.useCallback(
    (checked: CheckboxCheckedState) => {
      if (isChecked === "indeterminate" && !onCheckedChange) {
        return;
      }

      setIsChecked(checked);
      onCheckedChange?.(checked);
    },
    [onCheckedChange, isChecked]
  );

  return (
    <CheckboxRootContext.Provider
      value={{
        checked: isChecked,
        setChecked: handleCheckedChange,
        reduceMotion: reduceMotion ?? undefined,
      }}
    >
      <CheckboxPrimitive.Root
        data-size={size}
        data-radius={radius}
        data-checked={isChecked}
        className={cn(checkboxVariants({ size, radius, className }))}
        checked={isChecked}
        onCheckedChange={handleCheckedChange}
        {...props}
      />
    </CheckboxRootContext.Provider>
  );
}

export interface CheckboxIndicatorProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Indicator> {
  icon?: React.ReactNode | ((props: CheckboxIconProps) => React.ReactNode);
}

function CheckboxIndicator({
  className,
  children,
  icon = CheckboxIcon,
  ref,
  ...props
}: CheckboxIndicatorProps) {
  const { checked } = useCheckboxRoot();

  const clonedIcon = React.useMemo(() => {
    const result =
      typeof icon === "function"
        ? icon({ checked })
        : React.cloneElement(icon as React.ReactElement<CheckboxIconProps>, {
            checked,
          });
    return result;
  }, [icon, checked]);

  return (
    <CheckboxPrimitive.Indicator
      data-slot="checkbox-indicator"
      className={cn(className)}
      {...props}
      asChild
      forceMount
    >
      {clonedIcon}
    </CheckboxPrimitive.Indicator>
  );
}

function CheckboxIcon({ checked }: CheckboxIconProps) {
  const isIndeterminate = checked === "indeterminate";
  const isChecked = checked === true;

  if (isIndeterminate) {
    return (
      <svg stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
        <line x1="21" x2="3" y1="12" y2="12" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      role="presentation"
      stroke="currentColor"
      strokeDasharray={22}
      strokeDashoffset={isChecked ? 44 : 66}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        transition: `stroke-dashoffset 250ms linear`,
        transitionDelay: `200ms`,
      }}
      viewBox="0 0 17 18"
    >
      <polyline points="1 9 7 14 15 4" />
    </svg>
  );
}

export interface CheckboxProps
  extends React.ComponentPropsWithRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  reduceMotion?: boolean | null;
  icon?: React.ReactNode | ((props: CheckboxIconProps) => React.ReactNode);
}

function Checkbox({
  className,
  size = "default",
  radius = "default",
  reduceMotion,
  children,
  ref,
  icon,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxRoot
      ref={ref}
      className={className}
      size={size}
      radius={radius}
      reduceMotion={reduceMotion ?? undefined}
      {...props}
    >
      <CheckboxIndicator icon={icon}>{children}</CheckboxIndicator>
    </CheckboxRoot>
  );
}

export { Checkbox, CheckboxRoot, CheckboxIndicator };

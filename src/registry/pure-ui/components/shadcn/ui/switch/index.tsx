"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { motion, MotionConfig } from "motion/react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/classes";

const switchVariants = cva(
  [
    "relative group inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:shadow-none cursor-pointer data-[disabled=true]:opacity-50 data-[disabled=true]:pointer-events-none",
    "[-webkit-tap-highlight-color:#0000]",
  ],
  {
    variants: {
      size: {
        xs: "h-5",
        sm: "h-6",
        default: "h-7",
        lg: "h-8",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface SwitchRootContextType {
  checked: boolean;
}

const SwitchRootContext = createContext<SwitchRootContextType>({
  checked: false,
});

const useSwitchRoot = (): SwitchRootContextType => {
  const context = useContext(SwitchRootContext);
  if (!context) {
    throw new Error("useSwitchRoot must be used within a SwitchRoot");
  }
  return context;
};

interface SwitchRootProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {
  reduceMotion?: boolean;
  elastic?: boolean;
  invalid?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

function SwitchRoot({
  className,
  size = "default",
  reduceMotion,
  elastic,
  invalid = false,
  leftIcon,
  rightIcon,
  children,
  onCheckedChange,
  disabled,
  ...props
}: SwitchRootProps) {
  const [isChecked, setIsChecked] = useState<boolean>(
    props?.checked ?? props?.defaultChecked ?? true
  );

  useEffect(() => {
    if (props?.checked !== undefined) setIsChecked(props.checked);
  }, [props?.checked]);

  const handleCheckedChange = useCallback(
    (checked: boolean) => {
      setIsChecked(checked);
      onCheckedChange?.(checked);
    },
    [onCheckedChange]
  );

  return (
    <MotionConfig
      reducedMotion={reduceMotion ? "always" : "never"}
      transition={{
        type: "tween",
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.4,
      }}
    >
      <SwitchRootContext.Provider value={{ checked: isChecked }}>
        <SwitchPrimitive.Root
          {...props}
          asChild
          checked={isChecked}
          onCheckedChange={handleCheckedChange}
          disabled={disabled}
        >
          <button
            data-slot="switch-root"
            data-elastic={elastic || false}
            data-size={size}
            data-reduce-motion={reduceMotion || false}
            data-invalid={invalid || false}
            data-disabled={disabled}
            className={cn(switchVariants({ size, className }))}
          >
            <div
              data-slot="switch-track"
              className={cn([
                "inline-flex items-center rounded-full justify-start group-data-[state=checked]:justify-end bg-(--surface-3) group-data-[state=checked]:bg-gradient-to-b group-data-[state=checked]:from-(--accent)/78 group-data-[state=checked]:to-(--accent) group-data-[invalid=true]:outline-(--danger)",
                "group-data-[size=xs]:w-7.5 group-data-[size=sm]:w-9.5 group-data-[size=default]:w-11.5 group-data-[size=lg]:w-13.5",
                "group-data-[size=xs]:p-[2px] group-data-[size=sm]:p-[2px] group-data-[size=default]:p-[3px] group-data-[size=lg]:p-[3px]",
                "outline -outline-offset-1 outline-(--border)/30 ring-offset-0 group-active:bg-(--surface-3)/75 group-active:group-data-[state=checked]:bg-(--accent) group-focus-visible:outline-(--accent) group-data-[state=checked]:group-focus-visible:outline-offset-2 group-data-[state=checked]:outline-(--accent)/30 group-data-[state=checked]:-outline-offset-1 transition-all ease-ease motion-reduce:transition-none group-data-[reduce-motion=true]:transition-none overflow-hidden relative",
              ])}
            >
              {leftIcon && (
                <motion.div
                  data-slot="switch-left-icon"
                  initial={false}
                  animate={
                    isChecked
                      ? { scale: 1, opacity: 1, x: 0 }
                      : { scale: 0.2, opacity: 0, x: -10 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 22,
                    mass: 0.75,
                    restDelta: 0.01,
                    restSpeed: 0.01,
                  }}
                  className="absolute group-data-[size=xs]:[&_svg]:size-2 group-data-[size=sm]:[&_svg]:size-3 group-data-[size=default]:[&_svg]:size-3.5 group-data-[size=lg]:[&_svg]:size-4 left-1.5 top-1/2 -translate-y-1/2 text-(--background)"
                >
                  {typeof leftIcon !== "string" ? leftIcon : null}
                </motion.div>
              )}
              {children}
              {rightIcon && (
                <motion.div
                  data-slot="switch-right-icon"
                  initial={false}
                  animate={
                    isChecked
                      ? { scale: 0.2, opacity: 0, x: 10 }
                      : { scale: 1, opacity: 1, x: 0 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 22,
                    mass: 0.75,
                    restDelta: 0.01,
                    restSpeed: 0.01,
                  }}
                  className="absolute group-data-[size=xs]:[&_svg]:size-2 group-data-[size=sm]:[&_svg]:size-3 group-data-[size=default]:[&_svg]:size-3.5 group-data-[size=lg]:[&_svg]:size-4 right-1.5 top-1/2 -translate-y-1/2 text-(--foreground)"
                >
                  {typeof rightIcon !== "string" ? rightIcon : null}
                </motion.div>
              )}
            </div>
          </button>
        </SwitchPrimitive.Root>
      </SwitchRootContext.Provider>
    </MotionConfig>
  );
}

SwitchRoot.displayName = SwitchPrimitive.Root.displayName;

interface SwitchThumbProps
  extends React.ComponentProps<typeof SwitchPrimitive.Thumb> {
  thumbIcon?: (props: { isChecked: boolean }) => React.ReactNode;
}

function SwitchThumb({
  className,
  thumbIcon,
  children,
  ...props
}: SwitchThumbProps) {
  const { checked } = useSwitchRoot();

  return (
    <SwitchPrimitive.Thumb asChild {...props}>
      <motion.div layout data-slot="switch-thumb">
        <span
          data-slot="switch-thumb-surface"
          className={cn(
            "flex items-center justify-center rounded-full select-none touch-none bg-(--background) shadow-[1px_1px_3px_0px_rgba(0,0,0,0.1)] group-data-[state=checked]:bg-(--accent-foreground) transition-all ease-ease motion-reduce:transition-none group-data-[reduce-motion=true]:transition-none",
            "group-data-[size=xs]:size-[12px] group-data-[size=sm]:size-[16px] group-data-[size=default]:size-[20px] group-data-[size=lg]:size-[24px]",
            "group-data-[size=xs]:group-data-[elastic=true]:group-active:w-[calc(12px*1.1)] group-data-[size=sm]:group-data-[elastic=true]:group-active:w-[calc(16px*1.1)] group-data-[size=default]:group-data-[elastic=true]:group-active:w-[calc(20px*1.1)] group-data-[size=lg]:group-data-[elastic=true]:group-active:w-[calc(24px*1.1)]",
            "[&>svg]:size-3.5 text-(--muted-foreground) group-data-[state=checked]:[&>svg]:text-(--foreground)",
            className
          )}
        >
          {thumbIcon && typeof thumbIcon !== "string"
            ? thumbIcon({ isChecked: checked })
            : null}
        </span>
      </motion.div>
    </SwitchPrimitive.Thumb>
  );
}

SwitchThumb.displayName = SwitchPrimitive.Thumb.displayName;

interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {
  reduceMotion?: boolean;
  elastic?: boolean;
  invalid?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  thumbIcon?: (props: { isChecked: boolean }) => React.ReactNode;
}

function Switch({
  className,
  size = "default",
  reduceMotion = false,
  elastic = false,
  invalid = false,
  leftIcon,
  rightIcon,
  thumbIcon,
  children,
  ...props
}: SwitchProps) {
  return (
    <SwitchRoot
      className={className}
      size={size}
      reduceMotion={reduceMotion}
      elastic={elastic}
      invalid={invalid}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      {...props}
    >
      <SwitchThumb thumbIcon={thumbIcon} />
    </SwitchRoot>
  );
}

Switch.displayName = "Switch";

export { Switch, SwitchRoot, SwitchThumb };

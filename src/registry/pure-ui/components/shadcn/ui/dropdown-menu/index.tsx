"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionConfig,
  TargetAndTransition,
  Transition,
} from "motion/react";

import { cn } from "@/lib/classes";

const contentAnimationPresets = {
  none: {
    initial: {},
    animate: {},
    exit: {},
  },
  scale: {
    initial: {
      opacity: 0,
      transform: "scale(0.8)",
    },
    animate: {
      opacity: 1,
      transform: "scale(1)",
    },
    exit: {
      opacity: 0,
      transform: "scale(0.8)",
    },
  },
  wipe: {},
  wipeScale: {},
  motion: {},
  motionBlur: {},
  slideOutside: {},
  slideInside: {},
};

function getWipeAnimation(side: "top" | "right" | "bottom" | "left") {
  const wipeConfigs = {
    // Top: reveals from bottom to top (down to up)
    top: {
      initial: {
        clipPath: "inset(100% 0 0 0 round 12px)",
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
        transition: {
          delayChildren: 0.1,
          staggerChildren: 0.1,
        },
      },
      exit: {
        clipPath: "inset(100% 0 0 0 round 12px)",
      },
    },
    // Right: reveals from left to right
    right: {
      initial: {
        clipPath: "inset(0 100% 0 0 round 12px)",
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
      },
      exit: {
        clipPath: "inset(0 100% 0 0 round 12px)",
      },
    },
    // Bottom: reveals from top to bottom (up to down)
    bottom: {
      initial: {
        clipPath: "inset(0 0 100% 0 round 12px)",
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
      },
      exit: {
        clipPath: "inset(0 0 100% 0 round 12px)",
      },
    },
    // Left: reveals from right to left
    left: {
      initial: {
        clipPath: "inset(0 0 0 100% round 12px)",
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
      },
      exit: {
        clipPath: "inset(0 0 0 100% round 12px)",
      },
    },
  };

  return wipeConfigs[side];
}

function getWipeScaleAnimation(side: "top" | "right" | "bottom" | "left") {
  const wipeConfigs = {
    // Top: reveals from bottom to top (down to up)
    top: {
      initial: {
        clipPath: "inset(100% 0 0 0 round 12px)",
        scale: 0.8,
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
        scale: 1,
      },
      exit: {
        clipPath: "inset(100% 0 0 0 round 12px)",
        scale: 0.8,
      },
    },
    // Right: reveals from left to right
    right: {
      initial: {
        clipPath: "inset(0 100% 0 0 round 12px)",
        scale: 0.8,
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
        scale: 1,
      },
      exit: {
        clipPath: "inset(0 100% 0 0 round 12px)",
        scale: 0.8,
      },
    },
    // Bottom: reveals from top to bottom (up to down)
    bottom: {
      initial: {
        clipPath: "inset(0 0 100% 0 round 12px)",
        scale: 0.8,
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
        scale: 1,
      },
      exit: {
        clipPath: "inset(0 0 100% 0 round 12px)",
        scale: 0.8,
      },
    },
    // Left: reveals from right to left
    left: {
      initial: {
        clipPath: "inset(0 0 0 100% round 12px)",
        scale: 0.8,
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
        scale: 1,
      },
      exit: {
        clipPath: "inset(0 0 0 100% round 12px)",
        scale: 0.8,
      },
    },
  };

  return wipeConfigs[side];
}

function getSlideOutsideAnimation(side: "top" | "right" | "bottom" | "left") {
  const slideOutsideConfigs = {
    top: {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
    },
    right: {
      initial: { opacity: 0, x: 10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 10 },
    },
    bottom: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 10 },
    },
    left: {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -10 },
    },
  };

  return slideOutsideConfigs[side];
}

function getSlideInsideAnimation(side: "top" | "right" | "bottom" | "left") {
  const slideInsideConfigs = {
    top: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 10 },
    },
    right: {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -10 },
    },
    bottom: {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
    },
    left: {
      initial: { opacity: 0, x: 10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 10 },
    },
  };

  return slideInsideConfigs[side];
}

function getMotionAnimation(side: "top" | "right" | "bottom" | "left") {
  const motionConfigs = {
    top: {
      initial: {
        opacity: 0,
        transform: `perspective(1000px) rotateX(70deg) scale(0.56) translateY(7px)`,
      },
      animate: {
        opacity: 1,
        transform: `perspective(1000px) rotateX(0deg) scale(1) translateY(0px)`,
      },
      exit: {
        opacity: 0,
        transform: `perspective(1000px) rotateX(70deg) scale(0.56) translateY(7px)`,
      },
    },
    right: {
      initial: {
        opacity: 0,
        transform: `perspective(1000px) rotateY(40deg) scale(0.56) translateX(7px)`,
      },
      animate: {
        opacity: 1,
        transform: `perspective(1000px) rotateY(0deg) scale(1) translateX(0px)`,
      },
      exit: {
        opacity: 0,
        transform: `perspective(1000px) rotateY(40deg) scale(0.56) translateX(7px)`,
      },
    },
    bottom: {
      initial: {
        opacity: 0,
        transform: `perspective(1000px) rotateX(-40deg) scale(0.56) translateY(-7px)`,
      },
      animate: {
        opacity: 1,
        transform: `perspective(1000px) rotateX(0deg) scale(1) translateY(0px)`,
      },
      exit: {
        opacity: 0,
        transform: `perspective(1000px) rotateX(-40deg) scale(0.56) translateY(-7px)`,
      },
    },
    left: {
      initial: {
        opacity: 0,
        transform: `perspective(1000px) rotateY(-40deg) scale(0.56) translateX(-7px)`,
      },
      animate: {
        opacity: 1,
        transform: `perspective(1000px) rotateY(0deg) scale(1) translateX(0px)`,
      },
      exit: {
        opacity: 0,
        transform: `perspective(1000px) rotateY(-40deg) scale(0.56) translateX(-7px)`,
      },
    },
  };

  return motionConfigs[side];
}

function getMotionBlurAnimation(side: "top" | "right" | "bottom" | "left") {
  const motionBlurConfigs = {
    top: {
      initial: {
        opacity: 0,
        filter: "blur(6px)",
        transform: `perspective(1000px) rotateX(70deg) scale(0.56) translateY(7px)`,
      },
      animate: {
        opacity: 1,
        filter: "blur(0px)",
        transform: `perspective(1000px) rotateX(0deg) scale(1) translateY(0px)`,
      },
      exit: {
        opacity: 0,
        filter: "blur(6px)",
        transform: `perspective(1000px) rotateX(70deg) scale(0.56) translateY(7px)`,
      },
    },
    right: {
      initial: {
        opacity: 0,
        filter: "blur(6px)",
        transform: `perspective(1000px) rotateY(40deg) scale(0.56) translateX(7px)`,
      },
      animate: {
        opacity: 1,
        filter: "blur(0px)",
        transform: `perspective(1000px) rotateY(0deg) scale(1) translateX(0px)`,
      },
      exit: {
        opacity: 0,
        filter: "blur(6px)",
        transform: `perspective(1000px) rotateY(40deg) scale(0.56) translateX(7px)`,
      },
    },
    bottom: {
      initial: {
        opacity: 0,
        filter: "blur(6px)",
        transform: `perspective(1000px) rotateX(-40deg) scale(0.56) translateY(-7px)`,
      },
      animate: {
        opacity: 1,
        filter: "blur(0px)",
        transform: `perspective(1000px) rotateX(0deg) scale(1) translateY(0px)`,
      },
      exit: {
        opacity: 0,
        filter: "blur(6px)",
        transform: `perspective(1000px) rotateX(-40deg) scale(0.56) translateY(-7px)`,
      },
    },
    left: {
      initial: {
        opacity: 0,
        filter: "blur(6px)",
        transform: `perspective(1000px) rotateY(-40deg) scale(0.56) translateX(-7px)`,
      },
      animate: {
        opacity: 1,
        filter: "blur(0px)",
        transform: `perspective(1000px) rotateY(0deg) scale(1) translateX(0px)`,
      },
      exit: {
        opacity: 0,
        filter: "blur(6px)",
        transform: `perspective(1000px) rotateY(-40deg) scale(0.56) translateX(-7px)`,
      },
    },
  };

  return motionBlurConfigs[side];
}

const contentTransitionPresets = {
  inExpo: {
    type: "tween",
    duration: 0.35,
    ease: [0.95, 0.05, 0.795, 0.035],
  },
  outExpo: {
    type: "tween",
    duration: 0.35,
    ease: [0.19, 1, 0.22, 1],
  },
  inOutExpo: {
    type: "tween",
    duration: 0.35,
    ease: [1, 0, 0, 1],
  },
  anticipate: {
    type: "tween",
    duration: 0.35,
    ease: [1, -0.4, 0.35, 0.95],
  },
  quickOut: {
    type: "tween",
    duration: 0.35,
    ease: [0, 0, 0.2, 1],
  },
  overshootOut: {
    type: "tween",
    duration: 0.35,
    ease: [0.175, 0.885, 0.32, 1.275],
  },
  swiftOut: {
    type: "tween",
    duration: 0.35,
    ease: [0.175, 0.885, 0.32, 1.1],
  },
  snappyOut: {
    type: "tween",
    duration: 0.35,
    ease: [0.19, 1, 0.22, 1],
  },
  in: {
    type: "tween",
    duration: 0.35,
    ease: [0.42, 0, 1, 1],
  },
  out: {
    type: "tween",
    duration: 0.35,
    ease: [0, 0, 0.58, 1],
  },
  inOut: {
    type: "tween",
    duration: 0.25,
    ease: [0.42, 0, 0.58, 1],
  },
  outIn: {
    type: "tween",
    duration: 0.35,
    ease: [0.1, 0.7, 0.9, 0.5],
  },
  inQuad: {
    type: "tween",
    duration: 0.35,
    ease: [0.55, 0.085, 0.68, 0.53],
  },
  outQuad: {
    type: "tween",
    duration: 0.25,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
  inOutQuad: {
    type: "tween",
    duration: 0.32,
    ease: [0.455, 0.03, 0.515, 0.955],
  },
  inCubic: {
    type: "tween",
    duration: 0.35,
    ease: [0.55, 0.055, 0.675, 0.19],
  },
  outCubic: {
    type: "tween",
    duration: 0.35,
    ease: [0.215, 0.61, 0.355, 1],
  },
  inOutCubic: {
    type: "tween",
    duration: 0.35,
    ease: [0.645, 0.045, 0.355, 1],
  },
  inQuart: {
    type: "tween",
    duration: 0.35,
    ease: [0.895, 0.03, 0.685, 0.22],
  },
  outQuart: {
    type: "tween",
    duration: 0.35,
    ease: [0.165, 0.84, 0.44, 1],
  },
  inOutQuart: {
    type: "tween",
    duration: 0.35,
    ease: [0.77, 0, 0.175, 1],
  },
  inQuint: {
    type: "tween",
    duration: 0.35,
    ease: [0.755, 0.05, 0.855, 0.06],
  },
  outQuint: {
    type: "tween",
    duration: 0.35,
    ease: [0.23, 1, 0.32, 1],
  },
  inOutQuint: {
    type: "tween",
    duration: 0.35,
    ease: [0.86, 0, 0.07, 1],
  },
  inCirc: {
    type: "tween",
    duration: 0.35,
    ease: [0.6, 0.04, 0.98, 0.335],
  },
  outCirc: {
    type: "tween",
    duration: 0.35,
    ease: [0.075, 0.82, 0.165, 1],
  },
  inOutCirc: {
    type: "tween",
    duration: 0.35,
    ease: [0.785, 0.135, 0.15, 0.86],
  },
  inOutBase: {
    type: "tween",
    duration: 0.35,
    ease: [0.25, 0.1, 0.25, 1],
  },
} as const;

type ContentAnimationPreset = keyof typeof contentAnimationPresets;
type ContentTransitionPreset = keyof typeof contentTransitionPresets;

interface CustomAnimation {
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  exit?: TargetAndTransition;
}

interface DropdownMenuContextType {
  isOpen?: boolean;
}

const DropdownMenuContext = createContext<DropdownMenuContextType>({});

interface DropdownMenuProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Root> {}

function DropdownMenu(props: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (props?.open !== undefined) setIsOpen(props.open);
  }, [props?.open]);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      setIsOpen(open);
      props.onOpenChange?.(open);
    },
    [props]
  );

  return (
    <DropdownMenuContext.Provider value={{ isOpen }}>
      <DropdownMenuPrimitive.Root
        data-slot="dropdown-menu"
        {...props}
        onOpenChange={handleOpenChange}
      />
    </DropdownMenuContext.Provider>
  );
}

interface DropdownMenuTriggerProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Trigger> {}

function DropdownMenuTrigger(props: DropdownMenuTriggerProps) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      className={cn(
        "focus-visible:ring-0 focus-visible:ring-offset-0",
        props.className
      )}
      {...props}
    />
  );
}

interface DropdownMenuPortalProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Portal> {}

function DropdownMenuPortal(props: DropdownMenuPortalProps) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

interface DropdownMenuContentProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Content> {
  animationPreset?: ContentAnimationPreset;
  transitionPreset?: ContentTransitionPreset;
  animation?: CustomAnimation;
  transition?: Transition;
  reduceMotion?: boolean;
}

function DropdownMenuContent({
  className,
  children,
  animationPreset = "scale",
  animation,
  transitionPreset = "overshootOut",
  transition,
  reduceMotion = false,
  sideOffset = 4,
  side = "bottom",
  ...props
}: DropdownMenuContentProps) {
  const { isOpen } = useContext(DropdownMenuContext);

  const animationConfig = useMemo(() => {
    if (reduceMotion) {
      return contentAnimationPresets.none;
    }

    if (animation) {
      return animation;
    }

    if (animationPreset) {
      if (animationPreset === "wipe") {
        return getWipeAnimation(side);
      }
      if (animationPreset === "slideOutside") {
        return getSlideOutsideAnimation(side);
      }
      if (animationPreset === "slideInside") {
        return getSlideInsideAnimation(side);
      }
      if (animationPreset === "wipeScale") {
        return getWipeScaleAnimation(side);
      }
      if (animationPreset === "motion") {
        return getMotionAnimation(side);
      }
      if (animationPreset === "motionBlur") {
        return getMotionBlurAnimation(side);
      }
      return contentAnimationPresets[animationPreset];
    }

    return contentAnimationPresets.scale;
  }, [animation, animationPreset, reduceMotion, side]);

  const transitionConfig = useMemo(() => {
    if (reduceMotion) {
      return {};
    }

    if (transition) {
      return transition;
    }

    if (transitionPreset) {
      return contentTransitionPresets[transitionPreset];
    }

    return contentTransitionPresets.outQuad;
  }, [transition, transitionPreset, reduceMotion]);

  return (
    <MotionConfig reducedMotion={reduceMotion ? "always" : "never"}>
      <AnimatePresence initial={false} mode="wait">
        {isOpen && (
          <DropdownMenuPortal forceMount>
            <DropdownMenuPrimitive.Content
              data-slot="dropdown-menu-content"
              asChild
              className={"pure-ui"}
              sideOffset={sideOffset}
              side={side}
              {...props}
            >
              <motion.div
                key="dropdown-menu-content"
                initial={animationConfig.initial}
                animate={animationConfig.animate}
                exit={animationConfig.exit}
                transition={transitionConfig}
                style={{
                  willChange: "transform, opacity, filter, clipPath",
                  perspective: "1000px",
                }}
                className={cn(
                  "border-[0.5px] border-(--border)/60 bg-(--surface-2) text-(--foreground)",
                  "rounded-[12px] p-1 shadow-lg !min-w-[8rem] z-50",
                  "w-(--radix-dropdown-menu-trigger-width) max-h-(--radix-dropdown-menu-content-available-height) origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto",
                  className
                )}
              >
                {children}
              </motion.div>
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPortal>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

interface DropdownMenuGroupProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Group> {}

function DropdownMenuGroup(props: DropdownMenuGroupProps) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

interface DropdownMenuItemProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Item> {}

function DropdownMenuItem({
  children,
  className,
  ...props
}: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        "text-(--foreground) border-[0.5px] border-transparent",
        "focus:bg-(--accent-foreground) focus:shadow-sm focus:text-(--accent) focus:border-(--border)/30 relative flex cursor-default items-center gap-2 rounded-[10px] px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "[transition:0.01s_ease] [transition-property:background-color,color,border-color,box-shadow]",
        className
      )}
      data-slot="dropdown-menu-item"
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  );
}

interface DropdownMenuCheckboxItemProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> {}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "text-(--foreground) border-[0.5px] border-transparent",
        "focus:bg-(--accent-foreground) focus:shadow-sm focus:text-(--accent) focus:border-(--border)/30 relative flex cursor-default items-center gap-2 rounded-[10px] px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "[transition:0.01s_ease] [transition-property:background-color,color,border-color,box-shadow]",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute right-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

interface DropdownMenuRadioGroupContextType {
  selectedValue?: string;
  activeIcon?: React.ReactNode;
}

const DropdownMenuRadioGroupContext =
  createContext<DropdownMenuRadioGroupContextType>({});

interface DropdownMenuRadioGroupProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup> {
  activeIcon?: React.ReactNode;
}

function DropdownMenuRadioGroup({
  className,
  activeIcon,
  ...props
}: DropdownMenuRadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    props.value ?? undefined
  );

  useEffect(() => {
    setSelectedValue(props.value ?? undefined);
  }, [props.value]);

  const handleValueChange = useCallback(
    (value: string) => {
      setSelectedValue(value);
      props.onValueChange?.(value);
    },
    [props]
  );

  return (
    <DropdownMenuRadioGroupContext.Provider
      value={{ selectedValue, activeIcon }}
    >
      <LayoutGroup>
        <DropdownMenuPrimitive.RadioGroup
          data-slot="dropdown-menu-radio-group"
          {...props}
          onValueChange={handleValueChange}
        />
      </LayoutGroup>
    </DropdownMenuRadioGroupContext.Provider>
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  value,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  const { selectedValue, activeIcon } = useContext(
    DropdownMenuRadioGroupContext
  );
  const isSelected = selectedValue === value;

  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "text-(--foreground) border-[0.5px] border-transparent",
        "focus:bg-(--accent-foreground) focus:shadow-sm focus:text-(--accent) focus:border-(--border)/30 relative flex cursor-default items-center gap-2 rounded-[10px] px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "[transition:0.01s_ease] [transition-property:background-color,color,border-color,box-shadow]",
        className
      )}
      value={value}
      {...props}
    >
      {children}
      {isSelected && (
        <motion.span
          layoutId="dropdown-menu-radio-indicator"
          className="pointer-events-none absolute right-2 flex size-3.5 items-center justify-center"
          style={{
            willChange: "transform",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <DropdownMenuPrimitive.ItemIndicator>
            {activeIcon ?? <CircleIcon className="size-2 fill-current" />}
          </DropdownMenuPrimitive.ItemIndicator>
        </motion.span>
      )}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-xs font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-(--border)/30 -mx-1 my-1 h-[0.5px]", className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-(--muted-foreground) ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}

interface DropdownMenuSubContextType {
  isOpen?: boolean;
}

const DropdownMenuSubContext = createContext<DropdownMenuSubContextType>({});

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  const [isOpen, setIsOpen] = useState(
    props?.open ?? props?.defaultOpen ?? false
  );

  useEffect(() => {
    if (props?.open !== undefined) setIsOpen(props.open);
  }, [props?.open]);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      setIsOpen(open);
      props.onOpenChange?.(open);
    },
    [props]
  );

  return (
    <DropdownMenuSubContext.Provider value={{ isOpen }}>
      <DropdownMenuPrimitive.Sub
        data-slot="dropdown-menu-sub"
        {...props}
        onOpenChange={handleOpenChange}
      />
    </DropdownMenuSubContext.Provider>
  );
}

interface DropdownMenuSubTriggerProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> {}

function DropdownMenuSubTrigger({
  className,
  children,
  ...props
}: DropdownMenuSubTriggerProps) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      className={cn(
        "text-(--foreground) border-[0.5px] border-transparent",
        "focus:bg-(--accent-foreground) focus:shadow-sm focus:text-(--accent) focus:border-(--border)/30 relative flex cursor-default items-center gap-2 rounded-[10px] px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "[transition:0.01s_ease] [transition-property:background-color,color,border-color,box-shadow]",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

interface DropdownMenuSubContentProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.SubContent> {}

function DropdownMenuSubContent({
  className,
  children,
  ...props
}: DropdownMenuSubContentProps) {
  const { isOpen } = useContext(DropdownMenuSubContext);

  return (
    <AnimatePresence initial={false} mode="wait">
      {isOpen && (
        <DropdownMenuPortal forceMount>
          <DropdownMenuPrimitive.SubContent
            data-slot="dropdown-menu-sub-content"
            className={cn(
              "pure-ui border-[0.5px] border-(--border)/60 bg-(--surface-2) text-(--foreground) z-50 !min-w-[8rem] overflow-hidden rounded-[12px] p-1 shadow-lg",
              "w-(--radix-dropdown-menu-trigger-width) max-h-(--radix-dropdown-menu-content-available-height) origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto",
              className
            )}
            {...props}
            asChild
          >
            <motion.div
              variants={contentAnimationPresets["scale"]}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.1 }}
            >
              {children}
            </motion.div>
          </DropdownMenuPrimitive.SubContent>
        </DropdownMenuPortal>
      )}
    </AnimatePresence>
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};

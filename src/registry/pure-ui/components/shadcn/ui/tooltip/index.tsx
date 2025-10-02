"use client";

import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  TargetAndTransition,
  Transition,
} from "motion/react";

import { cn } from "@/lib/classes";

const animationPresets = {
  none: {
    initial: {},
    animate: {},
    exit: {},
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideOutside: {},
  slideInside: {},
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
};

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

function getWipeAnimation(side: "top" | "right" | "bottom" | "left") {
  const wipeConfigs = {
    // Top: reveals from bottom to top (down to up)
    top: {
      initial: {
        clipPath: "inset(100% 0 0 0 round 8px)",
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 8px)",
      },
      exit: {
        clipPath: "inset(100% 0 0 0 round 8px)",
      },
    },
    // Right: reveals from left to right
    right: {
      initial: {
        clipPath: "inset(0 100% 0 0 round 8px)",
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 8px)",
      },
      exit: {
        clipPath: "inset(0 100% 0 0 round 8px)",
      },
    },
    // Bottom: reveals from top to bottom (up to down)
    bottom: {
      initial: {
        clipPath: "inset(0 0 100% 0 round 8px)",
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 8px)",
      },
      exit: {
        clipPath: "inset(0 0 100% 0 round 8px)",
      },
    },
    // Left: reveals from right to left
    left: {
      initial: {
        clipPath: "inset(0 0 0 100% round 8px)",
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 8px)",
      },
      exit: {
        clipPath: "inset(0 0 0 100% round 8px)",
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
        clipPath: "inset(100% 0 0 0 round 8px)",
        scale: 0.8,
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 8px)",
        scale: 1,
      },
      exit: {
        clipPath: "inset(100% 0 0 0 round 8px)",
        scale: 0.8,
      },
    },
    // Right: reveals from left to right
    right: {
      initial: {
        clipPath: "inset(0 100% 0 0 round 8px)",
        scale: 0.8,
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 8px)",
        scale: 1,
      },
      exit: {
        clipPath: "inset(0 100% 0 0 round 8px)",
        scale: 0.8,
      },
    },
    // Bottom: reveals from top to bottom (up to down)
    bottom: {
      initial: {
        clipPath: "inset(0 0 100% 0 round 8px)",
        scale: 0.8,
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 8px)",
        scale: 1,
      },
      exit: {
        clipPath: "inset(0 0 100% 0 round 8px)",
        scale: 0.8,
      },
    },
    // Left: reveals from right to left
    left: {
      initial: {
        clipPath: "inset(0 0 0 100% round 8px)",
        scale: 0.8,
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 8px)",
        scale: 1,
      },
      exit: {
        clipPath: "inset(0 0 0 100% round 8px)",
        scale: 0.8,
      },
    },
  };

  return wipeConfigs[side];
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

const transitionPresets = {
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

type AnimationPreset = keyof typeof animationPresets;
type TransitionPreset = keyof typeof transitionPresets;

interface CustomAnimation {
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  exit?: TargetAndTransition;
}

interface TooltipContextType {
  open: boolean;
}

const TooltipContext = React.createContext<TooltipContextType>({
  open: false,
});

const useTooltip = () => {
  const context = React.useContext(TooltipContext);

  if (!context) {
    throw new Error("useTooltip must be used within a TooltipProvider");
  }

  return context;
};

interface TooltipProviderProps
  extends React.ComponentProps<typeof TooltipPrimitive.Provider> {}

function TooltipProvider({ delayDuration = 0, ...rest }: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...rest}
    />
  );
}

interface TooltipProps
  extends React.ComponentProps<typeof TooltipPrimitive.Root> {}

function Tooltip(props: TooltipProps) {
  const [isOpen, setIsOpen] = React.useState(
    props?.open ?? props?.defaultOpen ?? false
  );

  React.useEffect(() => {
    if (props?.open !== undefined) setIsOpen(props.open);
  }, [props?.open]);

  const handleOpenChange = React.useCallback(
    (open: boolean) => {
      setIsOpen(open);
      props.onOpenChange?.(open);
    },
    [props]
  );

  const value = {
    open: isOpen,
  };

  return (
    <TooltipContext.Provider value={value}>
      <TooltipProvider>
        <TooltipPrimitive.Root
          data-slot="tooltip"
          {...props}
          onOpenChange={handleOpenChange}
        />
      </TooltipProvider>
    </TooltipContext.Provider>
  );
}

interface TooltipTriggerProps
  extends React.ComponentProps<typeof TooltipPrimitive.Trigger> {}

function TooltipTrigger(props: TooltipTriggerProps) {
  return (
    <TooltipPrimitive.Trigger
      data-slot="tooltip-trigger"
      {...props}
      className={cn(props.className, "TooltipTrigger")}
    />
  );
}

interface TooltipContentProps
  extends React.ComponentProps<typeof TooltipPrimitive.Content> {
  animationPreset?: AnimationPreset;
  transitionPreset?: TransitionPreset;
  animation?: CustomAnimation;
  transition?: Transition;
  reduceMotion?: boolean;
}

function TooltipContent({
  className,
  side = "top",
  sideOffset = 10,
  animationPreset = "scale",
  animation,
  transitionPreset = "inOutQuad",
  transition,
  reduceMotion = false,
  ...props
}: TooltipContentProps) {
  const { open } = useTooltip();

  const animationConfig = React.useMemo(() => {
    if (reduceMotion) {
      return animationPresets.none;
    }

    if (animation) {
      return animation;
    }

    if (animationPreset) {
      // Use dynamic wipe animation based on side
      if (animationPreset === "slideInside") {
        return getSlideInsideAnimation(side);
      }
      if (animationPreset === "slideOutside") {
        return getSlideOutsideAnimation(side);
      }
      if (animationPreset === "wipe") {
        return getWipeAnimation(side);
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
      return animationPresets[animationPreset];
    }

    return animationPresets.fade;
  }, [animation, animationPreset, side, reduceMotion]);

  const transitionConfig = React.useMemo(() => {
    if (reduceMotion) {
      return {};
    }

    if (transition) {
      return transition;
    }

    if (transitionPreset) {
      return transitionPresets[transitionPreset];
    }

    return transitionPresets.outQuad;
  }, [transition, transitionPreset, reduceMotion]);

  return (
    <MotionConfig reducedMotion={reduceMotion ? "always" : "never"}>
      <AnimatePresence>
        {open && (
          <TooltipPrimitive.Portal forceMount data-slot="tooltip-portal">
            <TooltipPrimitive.Content
              asChild
              forceMount
              {...props}
              side={side}
              sideOffset={sideOffset}
            >
              <div className="pure-ui">
                <motion.div
                  key="tooltip-content"
                  initial={animationConfig.initial}
                  animate={animationConfig.animate}
                  exit={animationConfig.exit}
                  transition={transitionConfig}
                  className="TooltipContent origin-(--radix-tooltip-content-transform-origin) border rounded-lg py-1 px-4 overflow-auto text-sm tracking-2 bg-(--accent-soft) text-(--accent-soft-foreground) border-(--border) max-w-80 shadow-lg"
                >
                  {props.children}
                </motion.div>
              </div>
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Portal>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  useTooltip,
  type TooltipContextType,
  type TooltipProps,
  type TooltipTriggerProps,
  type TooltipContentProps,
  type TooltipProviderProps,
};

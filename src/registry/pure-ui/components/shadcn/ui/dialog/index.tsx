"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  Transition,
  TargetAndTransition,
} from "motion/react";
import { XIcon } from "lucide-react";

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
  "top-flip": {
    initial: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateX(50deg) scale(0.8)`,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transform: `perspective(1000px) rotateX(0deg) scale(1)`,
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateX(50deg) scale(0.8)`,
    },
  },
  "bottom-flip": {
    initial: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateX(-50deg) scale(0.8)`,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transform: `perspective(1000px) rotateX(0deg) scale(1)`,
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateX(-50deg) scale(0.8)`,
    },
  },
  "right-flip": {
    initial: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateY(50deg) scale(0.8)`,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transform: `perspective(1000px) rotateY(0deg) scale(1)`,
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateY(50deg) scale(0.8)`,
    },
  },
  "left-flip": {
    initial: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateY(-50deg) scale(0.8)`,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transform: `perspective(1000px) rotateY(0deg) scale(1)`,
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateY(-50deg) scale(0.8)`,
    },
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
  "top-slide": {
    initial: {
      opacity: 0,
      transform: "translateY(-100px)",
    },
    animate: {
      opacity: 1,
      transform: "translateY(0)",
    },
    exit: {
      opacity: 0,
      transform: "translateY(-100px)",
    },
  },
  "bottom-slide": {
    initial: {
      opacity: 0,
      transform: "translateY(100px)",
    },
    animate: {
      opacity: 1,
      transform: "translateY(0)",
    },
    exit: {
      opacity: 0,
      transform: "translateY(100px)",
    },
  },
  "left-slide": {
    initial: {
      opacity: 0,
      transform: "translateX(-100px)",
    },
    animate: {
      opacity: 1,
      transform: "translateX(0)",
    },
    exit: {
      opacity: 0,
      transform: "translateX(-100px)",
    },
  },
  "right-slide": {
    initial: {
      opacity: 0,
      transform: "translateX(100px)",
    },
    animate: {
      opacity: 1,
      transform: "translateX(0)",
    },
    exit: {
      opacity: 0,
      transform: "translateX(100px)",
    },
  },
  "top-wipe": {
    initial: {
      opacity: 0,
      clipPath: "inset(0 0 100% 0)",
    },
    animate: {
      opacity: 1,
      clipPath: "inset(0 0 0% 0)",
    },
    exit: {
      opacity: 0,
      clipPath: "inset(0 0 100% 0)",
    },
  },
  "bottom-wipe": {
    initial: {
      opacity: 0,
      clipPath: "inset(100% 0 0 0)",
    },
    animate: {
      opacity: 1,
      clipPath: "inset(0% 0 0 0)",
    },
    exit: {
      opacity: 0,
      clipPath: "inset(100% 0 0 0)",
    },
  },
  "left-wipe": {
    initial: {
      opacity: 0,
      clipPath: "inset(0 100% 0 0)",
    },
    animate: {
      opacity: 1,
      clipPath: "inset(0 0% 0 0)",
    },
    exit: {
      opacity: 0,
      clipPath: "inset(0 100% 0 0)",
    },
  },
  "right-wipe": {
    initial: {
      opacity: 0,
      clipPath: "inset(0 0 0 100%)",
    },
    animate: {
      opacity: 1,
      clipPath: "inset(0 0 0 0%)",
    },
    exit: {
      opacity: 0,
      clipPath: "inset(0 0 0 100%)",
    },
  },
  "center-wipe": {
    initial: {
      opacity: 0,
      clipPath: "inset(50% 50% 50% 50%)",
    },
    animate: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
    },
    exit: {
      opacity: 0,
      clipPath: "inset(50% 50% 50% 50%)",
    },
  },

  burst: {
    initial: {
      opacity: 0,
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      filter: "blur(2px)",
    },
    animate: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      filter: "blur(0px)",
    },
    exit: {
      opacity: 0,
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      filter: "blur(2px)",
    },
  },
  // "burst-scale": {
  //   initial: {
  //     opacity: 0,
  //     scale: 0.2,
  //     filter: "blur(12px)",
  //     transformOrigin: "top center",
  //     clipPath: "polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%)",
  //   },
  //   animate: {
  //     opacity: 1,
  //     scale: 1,
  //     filter: "blur(0px)",
  //     transformOrigin: "top center",
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //   },
  //   exit: {
  //     opacity: 0,
  //     scale: 0.2,
  //     filter: "blur(12px)",
  //     transformOrigin: "top center",
  //     clipPath: "polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%)",
  //   },
  // },
};

const transitionPresets = {
  // Premium spring presets with refined physics
  default: {
    type: "spring",
    stiffness: 200,
    damping: 22,
    mass: 0.7,
    restDelta: 0.01,
    restSpeed: 0.01,
  },
  butter: {
    type: "spring",
    stiffness: 160,
    damping: 20,
    mass: 0.8,
    restDelta: 0.01,
    restSpeed: 0.01,
  },
  silk: {
    type: "spring",
    stiffness: 140,
    damping: 24,
    mass: 0.9,
    restDelta: 0.005,
    restSpeed: 0.005,
  },
  velvet: {
    type: "spring",
    stiffness: 120,
    damping: 26,
    mass: 1.0,
    restDelta: 0.005,
    restSpeed: 0.005,
  },
  bouncy: {
    type: "spring",
    stiffness: 280,
    damping: 16,
    mass: 0.6,
    restDelta: 0.01,
    restSpeed: 0.01,
  },
  gentle: {
    type: "spring",
    stiffness: 100,
    damping: 28,
    mass: 1.2,
    restDelta: 0.005,
    restSpeed: 0.005,
  },

  // Apple-inspired easing curves with refined timing
  smooth: {
    type: "tween",
    ease: [0.25, 0.1, 0.25, 1], // Classic ease-in-out-quart
    duration: 0.4,
  },
  quickOut: {
    type: "tween",
    ease: [0.25, 0.46, 0.45, 0.94], // Material Design emphasized
    duration: 0.35,
  },
  swiftOut: {
    type: "tween",
    ease: [0.4, 0, 0.2, 1], // Material Design standard
    duration: 0.3,
  },
  anticipate: {
    type: "tween",
    ease: [0.68, -0.55, 0.265, 1.55],
    duration: 0.45,
  },

  // Ultra-smooth premium curves
  premium: {
    type: "tween",
    ease: [0.19, 1, 0.22, 1], // Ultra-smooth out curve
    duration: 0.4,
  },
  luxury: {
    type: "tween",
    ease: [0.16, 1, 0.3, 1], // Luxury brand feel
    duration: 0.45,
  },
  fluid: {
    type: "tween",
    ease: [0.23, 1, 0.32, 1], // Fluid motion
    duration: 0.38,
  },

  // Apple Motion curves
  appleEase: {
    type: "tween",
    ease: [0.25, 0.1, 0.25, 1],
    duration: 0.4,
  },
  appleSpring: {
    type: "spring",
    stiffness: 180,
    damping: 22,
    mass: 0.75,
    restDelta: 0.01,
    restSpeed: 0.01,
  },

  // Google Material Design 3.0 curves
  emphasized: {
    type: "tween",
    ease: [0.05, 0.7, 0.1, 1],
    duration: 0.5,
  },
  emphasizedAccelerate: {
    type: "tween",
    ease: [0.3, 0, 0.8, 0.15],
    duration: 0.2,
  },
  emphasizedDecelerate: {
    type: "tween",
    ease: [0.05, 0.7, 0.1, 1],
    duration: 0.4,
  },
  standard: {
    type: "tween",
    ease: [0.2, 0, 0, 1],
    duration: 0.3,
  },

  // Performance-optimized presets
  snappy: {
    type: "spring",
    stiffness: 320,
    damping: 24,
    mass: 0.5,
    restDelta: 0.01,
    restSpeed: 0.01,
  },
  instant: {
    type: "spring",
    stiffness: 500,
    damping: 30,
    mass: 0.4,
    restDelta: 0.005,
    restSpeed: 0.005,
  },
  burst: {
    type: "spring",
    stiffness: 200,
    damping: 21,
    mass: 0.5,
  },

  // Refined classical easing functions
  inQuad: { type: "tween", ease: [0.55, 0.085, 0.68, 0.53], duration: 0.35 },
  inCubic: { type: "tween", ease: [0.55, 0.055, 0.675, 0.19], duration: 0.35 },
  inQuart: { type: "tween", ease: [0.895, 0.03, 0.685, 0.22], duration: 0.35 },
  inQuint: { type: "tween", ease: [0.755, 0.05, 0.855, 0.06], duration: 0.35 },
  inExpo: { type: "tween", ease: [0.95, 0.05, 0.795, 0.035], duration: 0.35 },
  inCirc: { type: "tween", ease: [0.6, 0.04, 0.98, 0.335], duration: 0.35 },

  outQuad: { type: "tween", ease: [0.25, 0.46, 0.45, 0.94], duration: 0.35 },
  outCubic: { type: "tween", ease: [0.215, 0.61, 0.355, 1], duration: 0.35 },
  outQuart: { type: "tween", ease: [0.165, 0.84, 0.44, 1], duration: 0.35 },
  outQuint: { type: "tween", ease: [0.23, 1, 0.32, 1], duration: 0.35 },
  outExpo: { type: "tween", ease: [0.19, 1, 0.22, 1], duration: 0.35 },
  outCirc: { type: "tween", ease: [0.075, 0.82, 0.165, 1], duration: 0.35 },

  inOutQuad: {
    type: "tween",
    ease: [0.455, 0.03, 0.515, 0.955],
    duration: 0.4,
  },
  inOutCubic: { type: "tween", ease: [0.645, 0.045, 0.355, 1], duration: 0.4 },
  inOutQuart: { type: "tween", ease: [0.77, 0, 0.175, 1], duration: 0.4 },
  inOutQuint: { type: "tween", ease: [0.86, 0, 0.07, 1], duration: 0.4 },
  inOutExpo: { type: "tween", ease: [1, 0, 0, 1], duration: 0.4 },
  inOutCirc: { type: "tween", ease: [0.785, 0.135, 0.15, 0.86], duration: 0.4 },

  // Utility curves
  inOut: { type: "tween", ease: [0.42, 0, 0.58, 1], duration: 0.35 },
  in: { type: "tween", ease: [0.4, 0, 1, 1], duration: 0.3 },
  out: { type: "tween", ease: [0, 0, 0.2, 1], duration: 0.3 },
  linear: { type: "tween", ease: "linear", duration: 0.3 },
} as const;

type AnimationPreset = keyof typeof animationPresets;
type TransitionPreset = keyof typeof transitionPresets;

interface CustomAnimation {
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  exit?: TargetAndTransition;
}

interface DialogContextType {
  isOpen?: boolean;
}

const DialogContext = React.createContext<DialogContextType>({});

interface DialogProps
  extends React.ComponentProps<typeof DialogPrimitive.Root> {}

function Dialog(props: DialogProps) {
  const [isOpen, setIsOpen] = React.useState(false);

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

  return (
    <DialogContext.Provider
      value={{
        isOpen,
      }}
    >
      <DialogPrimitive.Root
        data-slot="dialog"
        {...props}
        onOpenChange={handleOpenChange}
      />
    </DialogContext.Provider>
  );
}

interface DialogTriggerProps
  extends React.ComponentProps<typeof DialogPrimitive.Trigger> {}

function DialogTrigger(props: DialogTriggerProps) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

interface DialogPortalProps
  extends React.ComponentProps<typeof DialogPrimitive.Portal> {}

function DialogPortal(props: DialogPortalProps) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

interface DialogCloseProps
  extends React.ComponentProps<typeof DialogPrimitive.Close> {}

function DialogClose(props: DialogCloseProps) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 pointer-events-none bg-black/50 backdrop-blur-[1px]",
        className
      )}
      {...props}
    />
  );
}

interface DialogContentProps
  extends React.ComponentProps<typeof DialogPrimitive.Content> {
  animationPreset?: AnimationPreset;
  transitionPreset?: TransitionPreset;
  animation?: CustomAnimation;
  transition?: Transition;
  reduceMotion?: boolean;
  showCloseButton?: boolean;
}

function DialogContent({
  className,
  children,
  animationPreset = "top-flip",
  animation,
  transitionPreset = "burst",
  transition,
  reduceMotion = false,
  showCloseButton = true,
  ...props
}: DialogContentProps) {
  const { isOpen } = React.useContext(DialogContext);

  const animationConfig = React.useMemo(() => {
    if (reduceMotion) {
      return animationPresets.none;
    }

    if (animation) {
      return animation;
    }

    if (animationPreset) {
      return animationPresets[animationPreset];
    }

    return animationPresets.fade;
  }, [animation, animationPreset, reduceMotion]);

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

    return transitionPresets.butter;
  }, [transition, transitionPreset, reduceMotion]);

  return (
    <MotionConfig reducedMotion={reduceMotion ? "always" : "never"}>
      <AnimatePresence mode="wait">
        {isOpen && (
          <DialogPortal forceMount data-slot="dialog-portal">
            <DialogOverlay asChild forceMount>
              <motion.div
                key="dialog-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </DialogOverlay>

            <DialogPrimitive.Content asChild forceMount {...props}>
              <div className="pure-ui">
                <motion.div
                  key="dialog-content"
                  initial={animationConfig.initial}
                  animate={animationConfig.animate}
                  exit={animationConfig.exit}
                  transition={transitionConfig}
                  style={{
                    willChange: "transform, opacity, filter, clipPath",
                    perspective: "1000px",
                  }}
                  className="pointer-events-auto fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border border-(--border) p-6 shadow-lg duration-200 sm:max-w-lg bg-(--muted)"
                >
                  {children}
                  {showCloseButton && (
                    <DialogPrimitive.Close
                      data-slot="dialog-close"
                      className="ring-offset-(--background) focus:ring-(--focus) data-[state=open]:bg-(--accent) data-[state=open]:text-(--muted-foreground) absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                    >
                      <XIcon />
                      <span className="sr-only">Close</span>
                    </DialogPrimitive.Close>
                  )}
                </motion.div>
              </div>
            </DialogPrimitive.Content>
          </DialogPortal>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}
function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}
function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}
function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-(--muted-foreground) text-sm", className)}
      {...props}
    />
  );
}
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};

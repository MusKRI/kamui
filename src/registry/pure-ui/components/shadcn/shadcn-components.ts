import { type RegistryItem } from "@/lib/shadcn-registry-schemas";

export const pureUIShadcnComponents: RegistryItem[] = [
  // Badge
  {
    name: "badge-shadcn",
    type: "registry:ui",
    title: "Badge",
    description: "A customizable badge component",
    files: [
      {
        path: "shadcn/ui/badge/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: [
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-slot",
    ],
  },
  // Button
  {
    name: "button-shadcn",
    type: "registry:ui",
    title: "Button",
    description: "A customizable button component",
    files: [
      {
        path: "shadcn/ui/button/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: [
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-slot",
    ],
  },
  // Checkbox
  {
    name: "checkbox-shadcn",
    type: "registry:ui",
    title: "Checkbox",
    description: "A customizable checkbox component",
    files: [
      {
        path: "shadcn/ui/checkbox/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: [
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-checkbox",
    ],
  },
  // Dialog
  {
    name: "dialog-shadcn",
    type: "registry:ui",
    title: "Dialog",
    description: "A customizable dialog component",
    files: [
      {
        path: "shadcn/ui/dialog/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: [
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-dialog",
      "motion",
    ],
  },
  // Input OTP
  {
    name: "input-otp-shadcn",
    type: "registry:ui",
    title: "Input OTP",
    description: "A customizable input OTP component",
    files: [
      {
        path: "shadcn/ui/input-otp/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: [
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
      "input-otp",
      "motion",
    ],
  },
  // Switch
  {
    name: "switch-shadcn",
    type: "registry:ui",
    title: "Switch",
    description: "A customizable switch component",
    files: [
      {
        path: "shadcn/ui/switch/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: [
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-switch",
    ],
  },
  // Tooltip
  {
    name: "tooltip-shadcn",
    type: "registry:ui",
    title: "Tooltip",
    description: "A customizable tooltip component",
    files: [
      {
        path: "shadcn/ui/tooltip/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: [
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-tooltip",
      "motion",
    ],
  },
];

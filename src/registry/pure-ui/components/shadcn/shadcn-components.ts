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
];

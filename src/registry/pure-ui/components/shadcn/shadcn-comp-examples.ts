import { type RegistryItem } from "@/lib/shadcn-registry-schemas";

export const pureUIShadcnComponentExamples: RegistryItem[] = [
  // Badge Demos
  {
    name: "badge-demo",
    type: "registry:example",
    registryDependencies: ["@pure-ui/components/badge-shadcn"],
    files: [
      {
        path: "shadcn/examples/badge/badge-demo.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "badge-as-link-demo",
    type: "registry:example",
    registryDependencies: ["@pure-ui/components/badge-shadcn"],
    files: [
      {
        path: "shadcn/examples/badge/shadcn-badge-as-link-demo.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "badge-sizes-demo",
    type: "registry:example",
    registryDependencies: ["@pure-ui/components/badge-shadcn"],
    files: [
      {
        path: "shadcn/examples/badge/shadcn-badge-sizes-demo.tsx",
        type: "registry:component",
      },
    ],
  },
];

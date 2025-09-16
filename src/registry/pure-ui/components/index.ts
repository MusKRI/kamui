import { RegistryItem } from "@/lib/shadcn-registry-schemas";

import { pureUIComponents } from "./pure-ui-components";
import { pureUIComponentExamples } from "./pure-ui-comp-examples";

export const pureUIAllComponents: RegistryItem[] = [
  ...pureUIComponents,
  ...pureUIComponentExamples,
];

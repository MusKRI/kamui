import { z } from "zod";

import { getAppUrl } from "@/lib/env";
import { Registry, registryItemSchema } from "@/lib/shadcn-registry-schemas";
import { pureUIAllComponents } from "./components";

export const pureUIComponentsRegistry = {
  name: "pure-ui",
  homepage: `${getAppUrl()}/pure-ui/components`,
  items: z.array(registryItemSchema).parse([...pureUIAllComponents]),
} satisfies Registry;

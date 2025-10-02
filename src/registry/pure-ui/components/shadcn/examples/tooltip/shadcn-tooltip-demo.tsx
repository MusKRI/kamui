import { PlusIcon } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/pure-ui/components/shadcn/ui/tooltip";
import { Button } from "@/registry/pure-ui/components/shadcn/ui/button";

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" className="rounded-full px-[7px]" size="sm">
          <PlusIcon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent animationPreset="motionBlur" transitionPreset="inOut">
        <p>Add to Cart</p>
      </TooltipContent>
    </Tooltip>
  );
}

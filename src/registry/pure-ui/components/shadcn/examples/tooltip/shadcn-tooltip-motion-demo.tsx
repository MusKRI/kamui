import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/pure-ui/components/shadcn/ui/tooltip";
import { Button } from "@/registry/pure-ui/components/shadcn/ui/button";

export function TooltipMotionDemo() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Motion Demo
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          align="center"
          animationPreset="motion"
          transitionPreset="outQuad"
        >
          <p className="text-sm">Copy Essence</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Motion Blur Demo
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          align="center"
          animationPreset="motionBlur"
          transitionPreset="outQuad"
        >
          <p className="text-sm">Add to library</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

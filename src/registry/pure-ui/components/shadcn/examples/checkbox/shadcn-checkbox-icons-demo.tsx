import { Checkbox } from "@/registry/pure-ui/components/shadcn/ui/checkbox";
import { CheckIcon, Map, Settings } from "lucide-react";

export function CheckboxIconsDemo() {
  return (
    <div className="flex flex-col gap-5">
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox icon={<CheckIcon />} size="lg" />
        <span>Make a choice</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox icon={<Map />} size="lg" />
        <span>Would you like to visit?</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox icon={<Settings />} size="lg" />
        <span>Would you like to configure?</span>
      </label>
    </div>
  );
}

import { CheckIcon, XIcon } from "lucide-react";
import { Switch } from "@/registry/pure-ui/components/shadcn/ui/switch";

export function SwitchIconsDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Switch
        elastic
        size="lg"
        leftIcon={<XIcon />}
        rightIcon={<CheckIcon />}
      />
    </div>
  );
}

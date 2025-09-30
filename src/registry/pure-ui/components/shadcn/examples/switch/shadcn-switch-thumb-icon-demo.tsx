import { CheckIcon, XIcon } from "lucide-react";
import { Switch } from "@/registry/pure-ui/components/shadcn/ui/switch";

export function SwitchThumbIconDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Switch thumbIcon={() => <CheckIcon />} />

      <Switch
        thumbIcon={({ isChecked }) => (isChecked ? <CheckIcon /> : <XIcon />)}
      />
    </div>
  );
}

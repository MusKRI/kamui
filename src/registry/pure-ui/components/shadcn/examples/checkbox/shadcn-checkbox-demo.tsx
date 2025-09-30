import { Checkbox } from "@/registry/pure-ui/components/shadcn/ui/checkbox";

export function CheckboxDemo() {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox />
      <span>Make a choice</span>
    </label>
  );
}

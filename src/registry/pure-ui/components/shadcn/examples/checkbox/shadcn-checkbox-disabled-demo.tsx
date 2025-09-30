import { Checkbox } from "@/registry/pure-ui/components/shadcn/ui/checkbox";

export function CheckboxDisabledDemo() {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox disabled />
    </label>
  );
}

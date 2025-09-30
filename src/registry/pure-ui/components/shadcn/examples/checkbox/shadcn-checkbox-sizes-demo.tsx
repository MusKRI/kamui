import { Checkbox } from "@/registry/pure-ui/components/shadcn/ui/checkbox";

export function CheckboxSizesDemo() {
  return (
    <div className="flex flex-col gap-5">
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox size="sm" />
        <span>Make a choice</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox />
        <span>Make a choice</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox size="lg" />
        <span>Make a choice</span>
      </label>
    </div>
  );
}

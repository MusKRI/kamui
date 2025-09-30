import { Switch } from "@/registry/pure-ui/components/shadcn/ui/switch";

export function SwitchSizeDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Switch size="xs" />
      <Switch size="sm" />
      <Switch size="default" />
      <Switch size="lg" />
    </div>
  );
}

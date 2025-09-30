import { Button } from "@/registry/pure-ui/components/shadcn/ui/button";

export function ButtonSizeDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Button size="xs">Pure UI Button</Button>
      <Button size="sm">Pure UI Button</Button>
      <Button size="default">Pure UI Button</Button>
      <Button size="lg">Pure UI Button</Button>
    </div>
  );
}

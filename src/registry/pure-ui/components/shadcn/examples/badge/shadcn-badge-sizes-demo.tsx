import { Badge } from "@/registry/pure-ui/components/shadcn/ui/badge";

export function BadgeSizesDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  );
}

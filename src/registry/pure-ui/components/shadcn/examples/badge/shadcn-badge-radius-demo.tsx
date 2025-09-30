import { Badge } from "@/registry/pure-ui/components/shadcn/ui/badge";

export function BadgeRadiusDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Badge radius="full">Full</Badge>
      <Badge radius="lg">Large</Badge>
      <Badge radius="md">Medium</Badge>
      <Badge radius="sm">Small</Badge>
    </div>
  );
}

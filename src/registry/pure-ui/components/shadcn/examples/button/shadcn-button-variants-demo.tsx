import { Button } from "@/registry/pure-ui/components/shadcn/ui/button";

export function ButtonVariantsDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Button variant="default">Default Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
      <Button variant="danger">Danger Button</Button>
    </div>
  );
}

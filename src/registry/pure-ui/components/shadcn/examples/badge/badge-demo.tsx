import { BadgeCheckIcon } from "lucide-react";

import { Badge } from "@/registry/pure-ui/components/shadcn/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-center w-full flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <div className="flex items-center justify-center w-full flex-wrap gap-2">
        <Badge
          variant="secondary"
          className="bg-blue-500 text-white dark:bg-blue-600 rounded-full"
        >
          <BadgeCheckIcon />
          Verified
        </Badge>
        <Badge className="size-5 rounded-full p-0 font-mono tabular-nums">
          8
        </Badge>
        <Badge
          className="h-5 min-w-5 rounded-full px-2 font-mono tabular-nums"
          variant="destructive"
        >
          99
        </Badge>
        <Badge
          className="h-5 min-w-5 rounded-full px-2 font-mono tabular-nums"
          variant="outline"
        >
          20+
        </Badge>
      </div>
    </div>
  );
}

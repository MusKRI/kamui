import Link from "next/link";

import { Badge } from "@/registry/pure-ui/components/shadcn/ui/badge";

export function BadgeAsLinkDemo() {
  return (
    <div className="flex items-center justify-center w-full flex-wrap gap-2">
      <Badge asChild>
        <Link href="https://www.google.com" target="_blank">
          Default
        </Link>
      </Badge>
      <Badge variant="secondary" asChild>
        <Link href="https://www.google.com" target="_blank">
          Secondary
        </Link>
      </Badge>
      <Badge variant="destructive" asChild>
        <Link href="https://www.google.com" target="_blank">
          Destructive
        </Link>
      </Badge>
      <Badge variant="outline" asChild>
        <Link href="https://www.google.com" target="_blank">
          Outline
        </Link>
      </Badge>
    </div>
  );
}

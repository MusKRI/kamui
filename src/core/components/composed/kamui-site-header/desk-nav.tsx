import Link from "next/link";
import { kamuiHeaderLinks } from "config/kamui-header-config";
import { cn } from "@/lib/classes";

export function KamuiSiteHeaderDeskNav() {
  return (
    <>
      <ul className="flex items-center justify-center gap-4">
        {kamuiHeaderLinks.map((link) => (
          <li className="relative" key={link.label}>
            <Link
              href={link.href as any}
              className={cn(
                "text-[15px] [transition:background-color_0.1s,color_0.1s,border-color_0.1s] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] text-surface-11/70 hover:text-surface-12 relative overflow-hidden",
                "focus:outline-none",
                "before:absolute before:left-0 before:bottom-0 before:right-0 before:h-[1.5px] before:bg-primary-9 before:[transition:opacity_0.1s_ease-out] before:opacity-0 focus:before:opacity-100"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 w-full left-0 flex items-center">
        <div className="w-full h-[1px] border-b border-surface-7 border-dashed"></div>
        <div className="size-[0.3125rem] rounded-full absolute bottom-0 left-0 bg-surface-7 translate-x-[-2px] translate-y-[2px] ring-4 ring-transparent"></div>
        <div className="w-full h-[1px] border-b border-surface-7 border-dashed"></div>
        <div className="size-[0.3125rem] rounded-full absolute bottom-0 right-0 bg-surface-7 translate-x-[2px] translate-y-[2px] ring-4 ring-transparent"></div>
      </div>
    </>
  );
}

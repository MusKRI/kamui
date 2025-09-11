import Link from "next/link";
import { KamuiSiteHeaderDeskNav } from "./desk-nav";
import { cn } from "@/lib/classes";
import { KamuiSiteHeaderMobileNav } from "./mobile-nav";

export function KamuiSiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto w-full max-w-[1120px] px-4 bg-surface-1">
        <nav className="relative flex h-16 items-center justify-between gap-4">
          <div className="flex items-center">
            <Link
              href="/"
              className={cn(
                "relative flex items-center gap-2 text-xl font-medium text-(--color-surface-12) transition-colors duration-200 font-merriweather [transition:border-color_0.1s] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] overflow-hidden",
                "focus:outline-none",
                "before:absolute before:left-0 before:bottom-0 before:right-0 before:h-[1.5px] before:bg-primary-9 before:[transition:opacity_0.1s_ease-out] before:opacity-0 focus:before:opacity-100"
              )}
            >
              Kamui
            </Link>
          </div>

          <div className="max-md:hidden">
            <KamuiSiteHeaderDeskNav />
          </div>
          <div className="min-md:hidden">
            <KamuiSiteHeaderMobileNav />
          </div>
        </nav>
      </div>
    </header>
  );
}

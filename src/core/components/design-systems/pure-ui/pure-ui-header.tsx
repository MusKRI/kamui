import Link from "next/link";

import { SlashIcon } from "icons/icons1";
import { ThemeToggle } from "../../composed/theme-toggle";

export const PureUIHeader = () => {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-lg bg-(--surface-2) border-b border-(--border)">
      <div className="mx-auto w-full max-w-full">
        <div className="flex h-16 items-center justify-between gap-2 md:gap-4 px-6">
          <div className="mr-6 sm:mr-12 flex gap-2 md:gap-0">
            <div className="flex items-center gap-1">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold tracking-wide font-merriweather"
              >
                Kamui
              </Link>
              <SlashIcon className="size-5 text-surface-a8" />
              <Link href="/pure-ui">
                <div
                  className="relative bg-(--foreground) rounded-[7px] overflow-hidden shadow-2xl"
                  style={{
                    willChange: "transform",
                  }}
                >
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 text-(--background) group-hover:text-(--background)/80 transition-colors"
                  >
                    <path
                      d="M6.575 17.6L17.6 6.575M5 11.3L11.3 5M12.7 19L19 12.7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              <Link
                href="/pure-ui/docs"
                className="text-base hover:text-black/80 dark:text-white dark:hover:text-white/80"
              >
                Docs
              </Link>
              <Link
                href="/pure-ui/components"
                className="text-base hover:text-black/80 dark:text-white dark:hover:text-white/80"
              >
                Components
              </Link>
              <Link
                href="/pure-ui/blocks"
                className="text-base text-black/70 hover:text-black/90 dark:text-white/70 dark:hover:text-white/90"
              >
                Blocks
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* <ThemeSwitcher /> */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

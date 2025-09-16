import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pure UI",
  description:
    "Pure UI is a design system for building modern web applications.",
};

const PureUIPage = () => {
  return (
    <div className="min-h-svh grid place-content-center">
      <div className="flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-(--background)" />

        <div className="relative flex flex-col items-center gap-12 z-10">
          <div className="flex items-center gap-8">
            <div
              className="relative bg-(--foreground) p-2 rounded-xl overflow-hidden shadow-2xl"
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
                className="size-12 md:size-18 text-(--background)"
              >
                <path
                  d="M6.575 17.6L17.6 6.575M5 11.3L11.3 5M12.7 19L19 12.7"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-(--foreground) text-3xl md:text-7xl font-light font-mono tracking-tight leading-none">
                Pure UI
              </h1>
              <div className="h-px bg-gradient-to-r from-(--foreground)/12 via-(--foreground)/60 to-(--foreground)/12" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-(--foreground)/70 text-lg font-light text-center max-w-md leading-relaxed">
            A design system for building modern web applications with pure
            aesthetics and minimal complexity.
          </p>

          <Link
            href="/pure-ui/docs"
            className="group inline-flex items-center gap-3 bg-(--foreground) text-(--background) px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl border border-(--foreground)/10"
            style={{ willChange: "transform" }}
          >
            <span className="tracking-wide">Explore</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PureUIPage;

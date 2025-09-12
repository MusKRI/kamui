import Link from "next/link";

import { DraggingSlide } from "components/composed/homepage/dragging-slide";
import { KamuiBrand } from "components/composed/homepage/kamui-brand";

export default function Home() {
  return (
    <div className="min-h-svh max-w-[1120px] mx-auto content-center">
      <div className="mx-auto max-w-[17.5rem] pb-8 max-lg:pt-20">
        <KamuiBrand />
        <div className="relative text-center py-2 z-2">
          <h1 className="text-xl font-merriweather text-surface-12">
            Kamui is your <br /> UI hub <span className="italic">by</span>
            &nbsp; developers.
          </h1>
          <h2 className="text-surface-11 mt-3 mb-1 text-sm">
            Polished components and patterns. Ship modern interfaces fast.
          </h2>
          <div className="size-[0.3125rem] rounded-full absolute top-0 left-0 bg-surface-7 translate-x-[-2px] translate-y-[-2px] ring-4 ring-transparent"></div>
          <div className="size-[0.3125rem] rounded-full absolute top-0 right-0 bg-surface-7 translate-x-[2px] translate-y-[-2px] ring-4 ring-transparent"></div>
          <div className="size-[0.3125rem] rounded-full absolute bottom-0 right-0 bg-surface-7 translate-x-[2px] translate-y-[2px] ring-4 ring-transparent"></div>
          <div className="size-[0.3125rem] rounded-full absolute bottom-0 left-0 bg-surface-7 translate-x-[-2px] translate-y-[2px] ring-4 ring-transparent"></div>
          <div className="size-[0.3125rem] rounded-full absolute bottom-0 left-1/2 bg-surface-7 translate-x-[-50%] translate-y-[2px] ring-4 ring-transparent"></div>
          <DraggingSlide />
          <svg
            className="absolute inset-0 pointer-events-none -z-1"
            viewBox="0 0 100 100"
            height="100%"
            width="100%"
            preserveAspectRatio="none"
          >
            <line
              className="stroke-surface-7"
              vectorEffect="non-scaling-stroke"
              x1="0"
              y1="0"
              x2="100"
              y2="0"
              strokeWidth="2"
              strokeDasharray="1 3"
            ></line>
            <line
              className="stroke-surface-7"
              vectorEffect="non-scaling-stroke"
              x1="0"
              y1="100"
              x2="100"
              y2="100"
              strokeWidth="2"
              strokeDasharray="1 3"
            ></line>
          </svg>
        </div>

        <div className="mt-12">
          <div className="w-fit h-fit mx-auto">
            <div className="smooth-rounded-curvature w-full h-full">
              <Link
                href="#"
                className="relative flex items-center justify-center bg-gradient-to-b from-primary-8 to-primary-9 rounded-[7px] text-base w-full overflow-hidden focus:outline-none shadow-[inset_0_0.5px_var(--color-primary-11),inset_0_0_0_0.5px_var(--color-primary-10)] [transition:scale_0.15s_ease-out] active:scale-98 px-5 py-1.5"
              >
                <span className="bg-gradient-to-b from-surface-4 dark:from-surface-12 to-primary-1 dark:to-primary-12 bg-clip-text text-transparent font-medium drop-shadow-[0_1px_0] drop-shadow-primary-11/35 size-full flex items-center justify-center">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from "next";

import { PureUILogo } from "components/logos/pure-ui";
import { DesignSystemCard } from "components/composed/design-systems-page";

export const metadata: Metadata = {
  title: "Design Systems",
  description: "Explore Hand Crafted & Already Known Design Systems",
};

export default function DesignSystemsPage() {
  return (
    <div className="h-full max-w-[1120px] px-5 mx-auto w-full">
      <div className="pb-16 pt-24 md:pt-32 flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-surface-12 text-xl md:text-2xl font-merriweather">
              Hand Crafted Design Systems
            </h2>
            <p className="text-surface-11 text-sm md:text-base max-w-[55ch]">
              Carefully crafted design systems for building modern web
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            <DesignSystemCard
              borderColor={{
                light: "#ccc6c5",
                dark: "#f7f7f7",
              }}
              blurColor={{
                light: "#bfbab9",
                dark: "#f7f7f7",
              }}
              title="Pure UI"
              content={<PureUILogo className="size-10 md:size-16" />}
              shapePattern={2}
              shapeStopColors={["#ccc6c5", "#ccc6c5"]}
              href="/pure-ui"
              key="pure-ui"
            />
            {/* <DesignSystemCard
              borderColor={{
                light: "#3e9cfe",
                dark: "#57a2ff",
              }}
              blurColor={{
                light: "#3e9cfe",
                dark: "#57a2ff",
              }}
              title="Edible UI"
              content={<EdibleUILogo className="size-10 md:size-16" />}
              shapePattern={1}
              shapeStopColors={["#3e9cfe", "#57a2ff"]}
              key="edible-ui"
            /> */}
          </div>
        </div>

        {/* <div className="flex flex-col gap-4 mt-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-surface-12 text-xl md:text-2xl font-merriweather">
              Design Systems You Already Know
            </h2>
            <p className="text-surface-11 text-sm md:text-base max-w-[55ch]">
              Implementations of widely recognized design systems with familiar
              patterns and components that users already understand and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            <DesignSystemCard
              borderColor={{
                light: "#eb4951",
                dark: "#eb4951",
              }}
              blurColor={{
                light: "transparent",
                dark: "transparent",
              }}
              title="Netflix"
              content={<Netflix className="size-10 md:size-16" />}
              shapePattern={2}
              shapeStopColors={["#ec4850", "#4090ec"]}
              href="#"
              key="netflix"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

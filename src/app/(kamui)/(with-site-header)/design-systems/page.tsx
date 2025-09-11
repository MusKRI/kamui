import { EdibleUILogo } from "@/core/components/logos/edible-ui";
import { PureUILogo } from "@/core/components/logos/pure-ui";
import { DesignSystemCard } from "components/composed/design-systems-page";

export default function DesignSystemsPage() {
  return (
    <div className="h-full max-w-[1120px] px-5 mx-auto w-full">
      <div className="pb-5 pt-24 md:pt-32 flex flex-col gap-7">
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
                light: "#161616",
                dark: "#f7f7f7",
              }}
              blurColor={{
                light: "#161616",
                dark: "#f7f7f7",
              }}
              title="Pure UI"
              content={<PureUILogo className="size-10 md:size-16" />}
            />
            <DesignSystemCard
              borderColor="#57a2ff"
              blurColor="#1d68fe"
              title="Edible UI"
              content={<EdibleUILogo className="size-10 md:size-16" />}
            />
          </div>
        </div>

        {/* <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-surface-12 text-xl md:text-2xl font-merriweather">
              Design Systems You Already Know
            </h2>
            <p className="text-surface-11 text-sm md:text-base max-w-[55ch]">
              These are implementations of popular design systems from companies
              like Netflix, Google, and Hotstar. Familiar patterns and
              components that users already understand and trust.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

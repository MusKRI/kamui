import { ParsedContent } from "@/lib/pure-ui/utils/content-parser";
import { MDXRemote } from "./mdx";
import { cn } from "@/lib/classes";
import { DelayedRender } from "components/composed/delayed-render";
import { PureUITableOfContent } from "./table-of-content";

interface PureUIBodyContentProps {
  parsedContent: ParsedContent;
}

export const PureUIBodyContent = ({
  parsedContent,
}: PureUIBodyContentProps) => {
  const headingsLength = parsedContent.headings.length > 0;

  const computedClasses = cn({
    "lg:grid-cols-[minmax(0,85ch)_260px]": headingsLength,
    "lg:grid-cols-[minmax(0,85ch)]": !headingsLength,
  });

  return (
    <div
      className={cn(
        "grid grid-cols-[minmax(0,85ch)] justify-center mx-auto lg:mr-0 w-full",
        computedClasses
      )}
    >
      <div className="mb-12">
        <main id="main-content" className="px-6 mt-16 md:mt-20 lg:mt-12 mb-24">
          <MDXRemote content={parsedContent.source} />
        </main>
      </div>

      {headingsLength && (
        <DelayedRender delayMs={1000}>
          <div className="max-w-[260px] sticky top-14 lg:top-24 shrink-0 mr-auto ml-7 hidden lg:flex flex-col self-start">
            <PureUITableOfContent headings={parsedContent.headings} />
          </div>
        </DelayedRender>
      )}
    </div>
  );
};

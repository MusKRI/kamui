import { ParsedContent } from "@/lib/pure-ui/utils/content-parser";
import { MDXRemote } from "./mdx";

interface PureUIBodyContentProps {
  parsedContent: ParsedContent;
}

export const PureUIBodyContent = ({
  parsedContent,
}: PureUIBodyContentProps) => {
  return (
    <div className="grid grid-cols-[minmax(0,85ch)] lg:grid-cols-[minmax(0,85ch)_260px] justify-center mx-auto lg:mr-0 w-full">
      <div className="mb-12">
        <main id="main-content" className="px-6 mt-16 md:mt-20 lg:mt-12 mb-24">
          <MDXRemote content={parsedContent.source} />
        </main>
      </div>
    </div>
  );
};

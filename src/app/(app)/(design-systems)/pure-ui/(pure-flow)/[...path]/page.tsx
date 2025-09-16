import { Effect } from "effect";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import { parseSlug } from "@/lib/pure-ui/utils/slug-parser";
import { getContentByPath } from "@/lib/pure-ui/utils/content-parser";
import {
  PureUIBodyInfo,
  PureUIBodyContent,
} from "components/design-systems/pure-ui";
import { getStaticParams } from "@/lib/pure-ui/utils/static-paths";

// Generate dynamic metadata for Pure UI
export async function generateMetadata({
  params,
}: PageProps<"/pure-ui/[...path]">): Promise<Metadata> {
  const { path = [] } = await params;

  const parsedSlug = await Effect.runPromise(parseSlug(path));

  if (!parsedSlug.isValidPath || !parsedSlug.validPath) {
    return {
      title: "Page not found",
      description: "The requested page does not exist.",
    };
  }

  const contentExit = await Effect.runPromiseExit(
    getContentByPath(parsedSlug.validPath)
  );

  if (contentExit._tag === "Failure") {
    return {
      title: "Requested resource not found",
      description: "The requested resource not found.",
    };
  }

  const content = contentExit.value;

  const frontmatter = content.frontmatter;

  return {
    title: `${frontmatter.title} - Pure UI`,
    description: frontmatter.description,
    keywords: [
      "pure ui",
      "minimalist design",
      "react component",
      frontmatter.title.toLowerCase(),
      parsedSlug.provider,
      "design system",
      "clean aesthetics",
      "raw functionality",
      "motion animation",
      "typescript",
      "radix ui",
      ...(frontmatter.features || []).map((feature: string) =>
        feature.toLowerCase()
      ),
    ],
    alternates: {
      canonical: `/pure-ui/${path.join("/")}`,
    },
    category: "technology",
  };
}

// Generate static params for all categories at build time
export function generateStaticParams() {
  const result = getStaticParams();
  return result;
}

export default async function PureUIFlowPage(
  props: PageProps<"/pure-ui/[...path]">
) {
  const { path = [] } = await props.params;

  const parsedSlug = await Effect.runPromise(parseSlug(path));

  if (!parsedSlug.isValidPath || !parsedSlug.validPath) {
    notFound();
  }

  const contentExit = await Effect.runPromiseExit(
    getContentByPath(parsedSlug.validPath)
  );
  if (contentExit._tag === "Failure") {
    notFound();
  }
  const content = contentExit.value;

  return (
    <div className="flex flex-col">
      <PureUIBodyInfo content={content} />
      <PureUIBodyContent parsedContent={content} />
    </div>
  );
}

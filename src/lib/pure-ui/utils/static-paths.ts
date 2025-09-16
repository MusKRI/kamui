import { Array, Effect, pipe } from "effect";
import { pureUISidebarConfig } from "components/design-systems/pure-ui/sidebar/data";
import type {
  SidebarSection,
  SidebarItem,
} from "components/design-systems/pure-ui/sidebar/types";

/**
 * Static path configuration type for Next.js generateStaticParams
 */
export interface StaticPath {
  path: string[];
}

/**
 * Extracts the path segments from a Pure UI href
 * Converts "/pure-ui/docs/theme" to ["docs", "theme"]
 * Converts "/pure-ui/components/shadcn/badge" to ["components", "shadcn", "badge"]
 * Converts "/pure-ui/docs" to ["docs"]
 */
const extractPathFromHref = (
  href: string
): Effect.Effect<string[], never, never> =>
  Effect.sync(() => {
    const segments = href.split("/").filter(Boolean);
    // Remove "pure-ui" prefix and return the rest
    const pureUIIndex = segments.indexOf("pure-ui");
    return pureUIIndex >= 0 ? segments.slice(pureUIIndex + 1) : segments;
  });

/**
 * Extracts static paths from sidebar items
 */
const extractPathsFromItems = (
  items: SidebarItem[]
): Effect.Effect<string[][], never, never> =>
  pipe(
    items,
    Array.filter((item): item is SidebarItem & { href: string } =>
      Boolean(item.href)
    ),
    Array.map((item) => extractPathFromHref(item.href)),
    Effect.all
  );

/**
 * Extracts static paths from sidebar sections
 */
const extractPathsFromSections = (
  sections: SidebarSection[]
): Effect.Effect<string[][], never, never> =>
  pipe(
    sections,
    Array.map((section) => extractPathsFromItems(section.items)),
    Effect.all,
    Effect.map(Array.flatten)
  );

/**
 * Extracts all static paths from the Pure UI sidebar configuration
 */
const extractAllPaths = (): Effect.Effect<string[][], never, never> =>
  pipe(
    Effect.sync(() => pureUISidebarConfig),
    Effect.flatMap((config) =>
      pipe(
        [
          extractPathsFromSections(config.docs),
          extractPathsFromSections(config.components),
        ],
        Effect.all,
        Effect.map(Array.flatten)
      )
    )
  );

/**
 * Gets all static paths from Pure UI sidebar configuration
 * Returns paths in the format required by Next.js generateStaticParams
 */
export const getAllStaticPaths = (): Effect.Effect<
  StaticPath[],
  never,
  never
> =>
  pipe(
    extractAllPaths(),
    Effect.map(
      Array.map((pathSegments) => ({
        path: pathSegments,
      }))
    )
  );

/**
 * Synchronous version that runs the Effect and returns the result
 * Use this for Next.js generateStaticParams
 */
export const getStaticParams = (): StaticPath[] =>
  pipe(getAllStaticPaths(), Effect.runSync);

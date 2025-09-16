import { Effect } from "effect";

export const ComponentProvider = [
  "shadcn",
  "base-ui",
  "react-aria",
  "custom",
] as const;

export const BlockProvider = ["cards", "forms"] as const;

export type ComponentProviderType = (typeof ComponentProvider)[number];
export type BlockProviderType = (typeof BlockProvider)[number];

export const pureUITypes = {
  docs: "Docs",
  components: "Components",
  blocks: "Blocks",
} as const;

export type PureUIType = (typeof pureUITypes)[keyof typeof pureUITypes];

export interface ParsedSlug {
  type: "docs" | "components" | "blocks";
  provider?: ComponentProviderType | BlockProviderType;
  name?: string;
  isValidPath: boolean;
  validPath?: string;
}

export const parseSlug = (slug: string[]) =>
  Effect.suspend<ParsedSlug, never, never>(() => {
    if (slug.length === 0) {
      return Effect.succeed({
        type: "docs",
        name: "index",
        isValidPath: true,
        validPath: "/pure-ui/docs/index.mdx",
      });
    }

    const [type, ...rest] = slug;

    // Handle docs routes: /pure-ui/docs/installation
    if (type === "docs") {
      const docName = rest[0] ?? "index";
      return Effect.succeed({
        type: "docs",
        name: docName,
        isValidPath: true,
        validPath: `/pure-ui/docs/${docName}.mdx`,
      });
    }

    // Handle component routes: /pure-ui/components/shadcn/accordion
    if (type === "components") {
      if (rest.length === 0) {
        return Effect.succeed({
          type: "components",
          name: "index",
          isValidPath: true,
          validPath: `/pure-ui/components/index.mdx`,
        });
      }

      const [provider, docName] = rest;

      if (
        !provider ||
        !ComponentProvider.includes(provider as ComponentProviderType) ||
        !docName
      ) {
        return Effect.succeed({
          type: "components",
          isValidPath: false,
        });
      }

      return Effect.succeed({
        type: "components",
        provider: provider as ComponentProviderType,
        name: docName,
        isValidPath: true,
        validPath: `/pure-ui/components/${provider}/${docName}.mdx`,
      });
    }

    // Handle block routes: /pure-ui/blocks/cards/card
    // TODO: Implement block routes

    return Effect.succeed({
      type: "docs",
      isValidPath: false,
    });
  });

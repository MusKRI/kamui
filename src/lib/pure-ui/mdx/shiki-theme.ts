// import type { ShikiTheme } from "shiki";

// Custom theme that integrates with our Pure UI design system
export const pureUIShikiTheme = {
  name: "pure-ui-custom",
  // Remove type to make it adaptive to light/dark modes
  colors: {
    "editor.background": "var(--muted)",
    "editor.foreground": "var(--foreground)",
    "editorLineNumber.foreground": "var(--muted-foreground)",
    "editorLineNumber.activeForeground": "var(--accent)",
    "editor.lineHighlightBackground": "var(--surface-2)",
    "editor.selectionBackground": "var(--accent-soft)",
    "editorCursor.foreground": "var(--accent)",
    "editor.findMatchBackground": "var(--accent-soft)",
    "editor.findMatchHighlightBackground": "var(--surface-3)",
    "editorBracketMatch.background": "var(--surface-2)",
    "editorBracketMatch.border": "var(--border)",
    "editorError.foreground": "var(--danger)",
    "editorWarning.foreground": "var(--warning)",
    "editorIndentGuide.background": "var(--border)",
    "editorIndentGuide.activeBackground": "var(--accent)",
  },
  tokenColors: [
    // Comments - Use dedicated Shiki token
    {
      scope: [
        "comment",
        "punctuation.definition.comment",
        "string.comment",
        "comment.block",
        "comment.line",
        "comment.block.documentation",
      ],
      settings: {
        foreground: "var(--muted-foreground)",
        fontStyle: "italic",
      },
    },

    // Keywords - Subtle emphasis
    {
      scope: [
        "keyword",
        "keyword.control",
        "keyword.operator.new",
        "keyword.control.flow",
        "keyword.control.conditional",
        "keyword.control.loop",
        "keyword.control.import",
        "keyword.control.export",
        "keyword.control.default",
        "keyword.control.from",
        "keyword.control.as",
        "keyword.other.important",
        "storage.type.class.jsdoc",
      ],
      settings: {
        foreground: "var(--muted-foreground)",
        fontStyle: "medium",
      },
    },

    // Storage types and modifiers - Neutral emphasis
    {
      scope: [
        "storage",
        "storage.type",
        "storage.modifier",
        "storage.type.function",
        "storage.type.class",
        "storage.type.interface",
        "storage.type.type",
        "storage.type.enum",
        "storage.type.namespace",
        "storage.modifier.async",
        "storage.modifier.static",
        "storage.modifier.public",
        "storage.modifier.private",
        "storage.modifier.protected",
        "support.type.builtin",
      ],
      settings: {
        foreground: "var(--muted-foreground)",
        fontStyle: "medium",
      },
    },

    // Strings - Subtle neutral color
    {
      scope: [
        "string",
        "string.quoted",
        "string.quoted.single",
        "string.quoted.double",
        "string.quoted.triple",
        "string.template",
        "string.unquoted",
        "string.interpolated",
        "string.regexp",
        "attribute.value",
      ],
      settings: {
        foreground: "var(--muted-foreground)",
        fontStyle: "normal",
      },
    },

    // String punctuation - Muted
    {
      scope: [
        "punctuation.definition.string",
        "punctuation.definition.string.begin",
        "punctuation.definition.string.end",
        "punctuation.definition.template-expression",
        "punctuation.support.type.property-name",
      ],
      settings: {
        foreground: "var(--muted-foreground)",
      },
    },

    // Numbers and constants - Neutral with slight emphasis
    {
      scope: [
        "constant.numeric",
        "constant.numeric.integer",
        "constant.numeric.float",
        "constant.numeric.hex",
        "constant.numeric.octal",
        "constant.numeric.binary",
        "constant.language",
        "constant.language.boolean",
        "constant.language.null",
        "constant.language.undefined",
        "constant.language.infinity",
        "constant.language.nan",
        "constant.other.color",
      ],
      settings: {
        foreground: "var(--foreground)",
        fontStyle: "medium",
      },
    },

    // Functions - Subtle differentiation
    {
      scope: [
        "entity.name.function",
        "entity.name.method",
        "support.function",
        "support.function.builtin",
        "support.method",
        "meta.function-call entity.name.function",
        "meta.method-call entity.name.function",
      ],
      settings: {
        foreground: "var(--foreground)",
        fontStyle: "normal",
      },
    },

    // Classes and types - Neutral with medium weight
    {
      scope: [
        "entity.name.class",
        "entity.name.type",
        "entity.name.interface",
        "entity.name.enum",
        "entity.name.namespace",
        "entity.other.inherited-class",
        "support.class",
        "support.type",
        "variable.other.class.js",
        "variable.other.class.ts",
        "variable.other.class.tsx",
      ],
      settings: {
        foreground: "var(--default-foreground)",
        fontStyle: "medium",
      },
    },

    // Variables and parameters - Neutral
    {
      scope: [
        "variable.parameter",
        "variable.parameter.function",
        "meta.parameters",
        "meta.parameter",
        "parameter.variable",
      ],
      settings: {
        foreground: "var(--default-foreground)",
        fontStyle: "normal",
      },
    },

    // React/JSX Component Props and Parameters - Neutral
    {
      scope: [
        "variable.parameter.destructuring",
        "meta.parameters.js",
        "meta.parameters.ts",
        "meta.parameters.jsx",
        "meta.parameters.tsx",
        "variable.parameter.js",
        "variable.parameter.ts",
        "variable.parameter.jsx",
        "variable.parameter.tsx",
        "meta.function.parameters",
        "meta.function.expression.parameters",
      ],
      settings: {
        foreground: "var(--default-foreground)",
        fontStyle: "normal",
      },
    },

    // Other variables - Foreground color
    {
      scope: [
        "variable",
        "variable.other",
        "variable.other.readwrite",
        "variable.other.property",
        "variable.other.object.property",
        "meta.definition.variable.name",
        "support.variable",
      ],
      settings: {
        foreground: "var(--foreground)",
      },
    },

    // Properties and object keys - Subtle emphasis
    {
      scope: [
        "property",
        "meta.property-name",
        "meta.object-literal.key",
        "entity.name.tag.yaml",
        "support.type.property-name",
        "meta.object.member",
        "variable.object.property",
        "meta.object-literal.key.js",
        "meta.object-literal.key.ts",
        "meta.object-literal.key.jsx",
        "meta.object-literal.key.tsx",
      ],
      settings: {
        foreground: "var(--default-foreground)",
      },
    },

    // HTML/JSX Tags - Subtle emphasis
    {
      scope: [
        "entity.name.tag",
        "entity.name.tag.html",
        "entity.name.tag.jsx",
        "entity.name.tag.tsx",
        "tag.html",
        "punctuation.definition.tag",
      ],
      settings: {
        foreground: "var(--foreground)",
        fontStyle: "medium",
      },
    },

    // HTML/JSX Attributes - Default foreground
    {
      scope: [
        "entity.other.attribute-name",
        "entity.other.attribute-name.html",
        "entity.other.attribute-name.jsx",
        "entity.other.attribute-name.tsx",
      ],
      settings: {
        foreground: "var(--default-foreground)",
        fontStyle: "normal",
      },
    },

    // Operators - Muted but readable
    {
      scope: [
        "keyword.operator",
        "keyword.operator.arithmetic",
        "keyword.operator.comparison",
        "keyword.operator.logical",
        "keyword.operator.assignment",
        "keyword.operator.rest",
        "keyword.operator.spread",
        "keyword.operator.type.annotation",
        "keyword.operator.relational.ts",
        "keyword.operator.type",
        "storage.type.function.arrow",
      ],
      settings: {
        foreground: "var(--muted-foreground)",
        fontStyle: "normal",
      },
    },

    // Punctuation and delimiters - Very subtle
    {
      scope: [
        "punctuation",
        "punctuation.separator",
        "punctuation.terminator",
        "punctuation.accessor",
        "delimiter",
        "delimiter.bracket",
        "meta.brace",
        "meta.bracket",
        "meta.delimiter",
        "punctuation.section.brackets",
        "punctuation.section.parens",
        "punctuation.section.braces",
      ],
      settings: {
        foreground: "var(--muted-foreground)",
      },
    },

    // Imports and modules - Neutral
    {
      scope: [
        "entity.name.module.js",
        "meta.module-reference",
        "support.other.module",
        "entity.name.import",
        "meta.import",
        "meta.export",
      ],
      settings: {
        foreground: "var(--foreground)",
      },
    },

    // Markdown headings - Bold but neutral
    {
      scope: [
        "markup.heading",
        "markup.heading entity.name",
        "markup.heading.1",
        "markup.heading.2",
        "markup.heading.3",
        "markup.heading.4",
        "markup.heading.5",
        "markup.heading.6",
      ],
      settings: {
        fontStyle: "bold",
        foreground: "var(--foreground)",
      },
    },

    // Markdown quotes - Muted foreground
    {
      scope: "markup.quote",
      settings: {
        foreground: "var(--muted-foreground)",
        fontStyle: "italic",
      },
    },

    // Markdown emphasis
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
      },
    },

    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
      },
    },

    // Markdown code - Use default foreground
    {
      scope: ["markup.raw", "markup.inline.raw", "markup.fenced_code"],
      settings: {
        foreground: "var(--default-foreground)",
      },
    },

    // Markdown links - Subtle underline
    {
      scope: [
        "markup.underline.link",
        "string.other.link",
        "constant.other.reference.link",
      ],
      settings: {
        foreground: "var(--default-foreground)",
        fontStyle: "underline",
      },
    },

    // Lists - Neutral
    {
      scope: [
        "punctuation.definition.list.begin.markdown",
        "markup.list.numbered",
        "markup.list.unnumbered",
      ],
      settings: {
        foreground: "var(--default-foreground)",
      },
    },

    // Diff - Deleted
    {
      scope: [
        "markup.deleted",
        "meta.diff.header.from-file",
        "punctuation.definition.deleted",
      ],
      settings: {
        background: "var(--surface-2)",
        foreground: "var(--danger)",
      },
    },

    // Diff - Inserted
    {
      scope: [
        "markup.inserted",
        "meta.diff.header.to-file",
        "punctuation.definition.inserted",
      ],
      settings: {
        background: "var(--surface-2)",
        foreground: "var(--foreground)",
      },
    },

    // Diff - Changed
    {
      scope: ["markup.changed", "punctuation.definition.changed"],
      settings: {
        background: "var(--surface-2)",
        foreground: "var(--default-foreground)",
      },
    },

    // Diff - Ignored/Untracked
    {
      scope: ["markup.ignored", "markup.untracked"],
      settings: {
        foreground: "var(--muted-foreground)",
        background: "var(--muted)",
      },
    },

    // Diff ranges and headers
    {
      scope: "meta.diff.range",
      settings: {
        foreground: "var(--default-foreground)",
        fontStyle: "bold",
      },
    },

    {
      scope: "meta.diff.header",
      settings: {
        foreground: "var(--default-foreground)",
      },
    },

    // JSON keys - Accent foreground
    {
      scope: [
        "support.type.property-name.json",
        "string.quoted.double.json support.type.property-name",
      ],
      settings: {
        foreground: "var(--accent-foreground)",
      },
    },

    // CSS selectors - Neutral
    {
      scope: [
        "entity.name.tag.css",
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.id.css",
      ],
      settings: {
        foreground: "var(--foreground)",
      },
    },

    // CSS properties - Default foreground
    {
      scope: ["support.type.property-name.css", "meta.property-name.css"],
      settings: {
        foreground: "var(--default-foreground)",
      },
    },

    // CSS values - Foreground
    {
      scope: ["support.constant.property-value.css", "meta.property-value.css"],
      settings: {
        foreground: "var(--foreground)",
      },
    },

    // React Component Props - Neutral
    {
      scope: [
        "meta.function.tsx variable.parameter",
        "meta.function.jsx variable.parameter",
        "meta.function-call.jsx meta.object-literal.key",
        "meta.function-call.tsx meta.object-literal.key",
        "variable.parameter.tsx",
        "variable.parameter.jsx",
        "meta.object-literal.key.tsx",
        "meta.object-literal.key.jsx",
        // Object destructuring in function parameters
        "meta.binding.destructuring variable.other.readwrite",
        "meta.binding.destructuring.ts variable.other.readwrite",
        "meta.binding.destructuring.tsx variable.other.readwrite",
        "meta.binding.destructuring.jsx variable.other.readwrite",
        "meta.binding.destructuring.js variable.other.readwrite",
        // Function parameter destructuring
        "meta.parameters meta.binding.destructuring variable.other.readwrite",
        "meta.function.parameters meta.binding.destructuring",
        "variable.other.destructuring",
        // TSX/JSX specific destructuring
        "variable.other.readwrite.tsx",
        "variable.other.readwrite.jsx",
      ],
      settings: {
        foreground: "var(--default-foreground)",
        fontStyle: "normal",
      },
    },

    // Errors and warnings
    {
      scope: "invalid",
      settings: {
        foreground: "var(--danger)",
        fontStyle: "bold",
      },
    },

    {
      scope: "invalid.deprecated",
      settings: {
        foreground: "var(--danger)",
        fontStyle: "italic",
      },
    },

    // Bracket highlighting - Subtle emphasis
    {
      scope: [
        "brackethighlighter.tag",
        "brackethighlighter.curly",
        "brackethighlighter.round",
        "brackethighlighter.square",
        "brackethighlighter.angle",
        "brackethighlighter.quote",
      ],
      settings: {
        foreground: "var(--default-foreground)",
      },
    },

    {
      scope: "brackethighlighter.unmatched",
      settings: {
        foreground: "var(--danger)",
      },
    },

    // Template literals and interpolation - Use foreground
    {
      scope: [
        "string.template",
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "meta.template.expression",
      ],
      settings: {
        foreground: "var(--foreground)",
      },
    },

    // Decorators - Subtle italic
    {
      scope: ["punctuation.decorator", "entity.name.function.decorator"],
      settings: {
        foreground: "var(--muted-foreground)",
        fontStyle: "italic",
      },
    },

    // Meta separators
    {
      scope: "meta.separator",
      settings: {
        fontStyle: "bold",
        foreground: "var(--default-foreground)",
      },
    },

    // Output and logs@
    {
      scope: "meta.output",
      settings: {
        foreground: "var(--muted-foreground)",
      },
    },
  ],
};

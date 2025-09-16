import { type SidebarConfig, type SidebarSection } from "./types";

const pureUIDocs = [
  {
    id: "docs",
    title: "Docs",
    defaultExpanded: true,
    items: [
      {
        id: "theme",
        title: "Theme",
        href: "/pure-ui/docs/theme",
      },
      {
        id: "introduction",
        title: "Introduction",
        href: "/pure-ui/docs",
      },
    ].sort((a, b) => a.title.localeCompare(b.title)),
  },
] satisfies SidebarSection[];

const pureUIComponents = [
  {
    id: "shadcn",
    title: "Shadcn",
    defaultExpanded: false,
    items: [
      {
        id: "accordion",
        title: "Accordion",
        href: "/pure-ui/components/shadcn/accordion",
      },
      {
        id: "alert",
        title: "Alert",
        href: "/pure-ui/components/shadcn/alert",
      },
      {
        id: "badge",
        title: "Badge",
        href: "/pure-ui/components/shadcn/badge",
      },
      {
        id: "button",
        title: "Button",
        href: "/pure-ui/components/shadcn/button",
      },
      {
        id: "checkbox",
        title: "Checkbox",
        href: "/pure-ui/components/shadcn/checkbox",
      },
      {
        id: "dialog",
        title: "Dialog",
        href: "/pure-ui/components/shadcn/dialog",
      },
      {
        id: "dropdown-menu",
        title: "Dropdown Menu",
        href: "/pure-ui/components/shadcn/dropdown-menu",
      },
      {
        id: "input",
        title: "Input",
        href: "/pure-ui/components/shadcn/input",
      },
      {
        id: "popover",
        title: "Popover",
        href: "/pure-ui/components/shadcn/popover",
      },
      {
        id: "switch",
        title: "Switch",
        href: "/pure-ui/components/shadcn/switch",
      },
    ].sort((a, b) => a.title.localeCompare(b.title)),
  },
  {
    id: "base-ui",
    title: "Base UI",
    defaultExpanded: false,
    items: [
      {
        id: "collapsible",
        title: "Collapsible",
        href: "/pure-ui/components/base-ui/collapsible",
      },
      {
        id: "switch",
        title: "Switch",
        href: "/pure-ui/components/base-ui/switch",
      },
    ].sort((a, b) => a.title.localeCompare(b.title)),
  },
  {
    id: "react-aria",
    title: "React Aria",
    defaultExpanded: false,
    items: [
      {
        id: "button",
        title: "Button",
        href: "/pure-ui/components/react-aria/button",
      },
    ].sort((a, b) => a.title.localeCompare(b.title)),
  },
  {
    id: "custom",
    title: "Custom",
    defaultExpanded: false,
    items: [
      {
        id: "dropdown-menu",
        title: "Dropdown Menu",
        href: "/pure-ui/components/custom/dropdown-menu",
      },
      {
        id: "input-otp",
        title: "Input OTP",
        href: "/pure-ui/components/custom/input-otp",
      },
      {
        id: "spinner",
        title: "Spinner",
        href: "/pure-ui/components/custom/spinner",
      },
      // {
      //   id: "select",
      //   title: "Select",
      //   href: "/pure-ui/components/custom/select",
      // },
    ].sort((a, b) => a.title.localeCompare(b.title)),
  },
] satisfies SidebarSection[];

export const pureUISidebarConfig: SidebarConfig = {
  components: pureUIComponents,
  docs: pureUIDocs,
};

export const getSidebarConfig = (pathname: string): SidebarSection[] => {
  if (pathname.startsWith("/pure-ui/components")) {
    return pureUIComponents;
  }
  if (pathname.startsWith("/pure-ui/docs")) {
    return pureUIDocs;
  }
  return [] satisfies SidebarSection[];
};

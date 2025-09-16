export interface SidebarItem {
  id: string;
  title: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string;
  disabled?: boolean;
  external?: boolean;
}

export interface SidebarSection {
  id: string;
  title: string;
  items: SidebarItem[];
  collapsible?: boolean;
  defaultExpanded?: boolean;
}

export interface SidebarConfig {
  [key: string]: SidebarSection[];
}

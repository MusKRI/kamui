import { PureUIHeader, PureUISidebar } from "components/design-systems/pure-ui";

export default function PureUILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-svh">
      <PureUIHeader />
      <div className="h-full flex-1 grid md:grid-cols-[260px_1fr] mt-16">
        <aside className="h-[calc(100vh-4rem)] border-r border-(--border) w-[260px] shrink-0 hidden md:flex md:flex-col overflow-y-auto top-16 sticky bg-(--surface-2) overscroll-y-contain scrollbar-gutter">
          <PureUISidebar />
        </aside>
        <div className="">{children}</div>
      </div>
    </div>
  );
}

import {
  PureUILayoutWrapper,
  PureUIHeader,
} from "@/core/components/design-systems/pure-ui";

export default function PureUILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-svh">
      <PureUIHeader />
      <PureUILayoutWrapper>{children}</PureUILayoutWrapper>
    </div>
  );
}

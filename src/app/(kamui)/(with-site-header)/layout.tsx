import { FadeWrapper } from "components/composed/fade-wrapper";
import { KamuiSiteHeader } from "components/composed/kamui-site-header";

export default function KamuiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FadeWrapper>
      <KamuiSiteHeader />
      {children}
    </FadeWrapper>
  );
}

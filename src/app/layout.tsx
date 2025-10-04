import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";

import { cn } from "@/lib/classes";
import { fontVariables } from "@/lib/fonts";
import { ThemeProvider } from "@/core/providers";

export const metadata: Metadata = {
  title: "Kamui",
  description: "Kamui is your UI hub by developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-brand="red"
      data-primary="red"
      data-secondary="blue"
      data-surface="sand"
      className="dark"
    >
      <body
        className={cn(
          fontVariables,
          "overscroll-none antialiased font-sans h-full"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

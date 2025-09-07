import {
  Geist,
  Geist_Mono,
  Instrument_Sans,
  Inter,
  Mulish,
  Noto_Sans_Mono,
  Barlow,
  Azeret_Mono,
  Funnel_Display,
  Calistoga,
  Merriweather,
} from "next/font/google";

import { cn } from "@/lib/classes";

const fontMerriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  // weight: ["300", "400", "700", "900"],
});

const fontCalistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-calistoga",
  weight: ["400"],
});

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontFunnelDisplay = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel-display",
});

const fontInstrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const fontNotoMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-mono",
});

const fontMullish = Mulish({
  subsets: ["latin"],
  variable: "--font-mullish",
});

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontBarlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const fontAzeret = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-azeret",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const fontVariables = cn(
  fontMerriweather.variable,
  fontCalistoga.variable,
  fontFunnelDisplay.variable,
  fontBarlow.variable,
  fontSans.variable,
  fontMono.variable,
  fontInstrument.variable,
  fontNotoMono.variable,
  fontMullish.variable,
  fontInter.variable,
  fontAzeret.variable
);

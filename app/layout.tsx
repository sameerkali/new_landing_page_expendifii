import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://expendifii.com"),
  title: {
    default: "Expendifii — Software for Shops, Cafés & Transporters in India",
    template: "%s — Expendifii",
  },
  description:
    "Expendifii builds and runs its own software for small Indian businesses: review collection with analytics, digital loyalty stamp cards, and BiltyOne transport management. Live products, paying customers.",
  openGraph: {
    title: "Expendifii — Software for Shops, Cafés & Transporters in India",
    description:
      "Review collection with analytics, digital loyalty stamp cards, and BiltyOne transport management. Live products, paying customers.",
    type: "website",
    locale: "en_IN",
    siteName: "Expendifii",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        {/* Without JS the scroll-reveal never runs, so show everything. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;filter:none!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="bg-paper text-ink flex min-h-full flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

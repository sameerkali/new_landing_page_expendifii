import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "expendifii - Software, shipped solo",
  description:
    "expendifii is Sameer's solo-run studio behind lol.expendifii.com, review.expendifii.com, and biltyone.com, three live products serving 50+ customers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f5f4f2] text-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}

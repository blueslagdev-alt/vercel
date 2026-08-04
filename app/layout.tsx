import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const syne = Syne({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Aayush Paliwal — Shopify & Next.js Developer",
  description: "Shopify developer building fast, conversion-focused ecommerce experiences with Liquid, Next.js and thoughtful UX.",
  keywords: ["Shopify developer", "Next.js developer", "Shopify Liquid", "ecommerce developer"],
  openGraph: { title: "Aayush Paliwal — Shopify & Next.js Developer", description: "High-converting Shopify experiences, built for speed.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${manrope.variable} ${syne.variable}`}>{children}</body></html>;
}

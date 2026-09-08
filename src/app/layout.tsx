import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { portfolio } from "@/data/portfolio";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans"
});

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display"
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

const siteUrl = "https://abdullahahsan.dev"; // TODO: Replace with your real deployed domain.

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${portfolio.name} - ${portfolio.title}`,
  description: portfolio.intro,
  openGraph: {
    title: `${portfolio.name} - ${portfolio.title}`,
    description: portfolio.intro,
    url: siteUrl,
    siteName: portfolio.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} - ${portfolio.title}`,
    description: portfolio.intro
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} ${mono.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

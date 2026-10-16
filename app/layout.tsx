import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import Motion from "./components/Motion";
import { SITE_URL } from "./lib/site";
import { Analytics } from "@vercel/analytics/next";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "IPTV UK | 50,000+ Channels in 4K, Free 3-Hour Trial",
    template: "%s — IPTV UK",
  },
  description:
    "IPTV UK subscription: 50,000+ live channels and 200,000+ films & series in up to 4K over your broadband. Works on Firestick, Smart TV, Android & iPhone. No contract, free 3-hour trial.",
  keywords: [
    "IPTV UK",
    "UK IPTV",
    "IPTV subscription UK",
    "best IPTV UK",
    "IPTV UK free trial",
    "Firestick IPTV UK",
    "4K IPTV UK",
    "IPTV box UK",
  ],
  authors: [{ name: "IPTV UK" }],
  creator: "IPTV UK",
  publisher: "IPTV UK",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "IPTV UK",
    title: "IPTV UK | 50,000+ Channels in 4K, Free 3-Hour Trial",
    description:
      "A UK IPTV subscription with 50,000+ live channels and 200,000+ films & series in up to 4K. No dish, no contract, free 3-hour trial.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV UK | 50,000+ Channels in 4K, Free 3-Hour Trial",
    description:
      "A UK IPTV subscription with 50,000+ live channels and 200,000+ films & series in up to 4K. No dish, no contract, free 3-hour trial.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
        <Motion />
        <Analytics />
      </body>
    </html>
  );
}

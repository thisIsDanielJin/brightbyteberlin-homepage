import type { Metadata } from "next";
import { outfit, spaceGrotesk } from "@/lib/fonts";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://brightbyte-berlin.com"),
  title: "BrightByte Berlin | Websites That Get You Found",
  description:
    "Stand out online and grow your business. BrightByte Berlin builds high-performance websites that help small businesses get found, build trust, and convert visitors into customers.",
  keywords: [
    "web development",
    "website design",
    "small business websites",
    "Berlin web developer",
    "freelance developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Daniel Jin Wodke" }],
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/blog/feed.xml",
    },
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brightbyte-berlin.com",
    siteName: "BrightByte Berlin",
    title: "BrightByte Berlin | Stand Out. Get Found. Grow.",
    description:
      "Websites that help small businesses stand out online and convert visitors into customers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BrightByte Berlin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrightByte Berlin | Stand Out. Get Found. Grow.",
    description:
      "Websites that help small businesses stand out online and convert visitors into customers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} ${outfit.className} antialiased bg-bg-primary`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}

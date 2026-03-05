import { Space_Grotesk, Outfit } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "700"],
});

// Keep these aliases so layout.tsx imports stay clean
export const inter = outfit;
export const satoshi = spaceGrotesk;

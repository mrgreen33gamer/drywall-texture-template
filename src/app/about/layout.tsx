import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";

export const metadata: Metadata = {
  title: "About LevelWall Drywall — Waco TX Drywall Company Since 2009",
  description:
    "Meet the LevelWall Drywall team. Locally owned and operated in Waco, Texas since 2009. Pro drywall contractors, bonded & insured, honest pricing, and a Smooth Finish Guarantee · 2-Year Workmanship.",
  keywords: [
    "about LevelWall Drywall",
    "drywall company Waco TX",
    "Mitch Rowan drywall",
    "Central Texas drywall contractor",
  ],
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About LevelWall Drywall — Waco TX Since 2009",
    description: "Locally owned drywall company in Waco — hang, tape, texture, and repair since 2009.",
    url: `${BASE_URL}/about`,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

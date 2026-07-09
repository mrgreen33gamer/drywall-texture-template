import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";

export const metadata: Metadata = {
  title: "Drywall Services Waco TX | Hang · Tape · Texture · Repair",
  description:
    "LevelWall Drywall services in Waco and Central Texas: drywall hanging, taping & finishing, texture matching, water damage drywall, popcorn ceiling removal, and patch & repair. Bonded & insured.",
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: "Drywall Services Waco TX | LevelWall Drywall",
    description: "Hang · tape · texture · repair for Central Texas homes and businesses.",
    url: `${BASE_URL}/services`,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

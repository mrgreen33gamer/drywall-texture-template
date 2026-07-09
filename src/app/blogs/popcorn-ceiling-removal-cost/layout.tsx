import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";
const url = BASE_URL + "/blogs/popcorn-ceiling-removal-cost";

export const metadata: Metadata = {
  title: "Popcorn Ceiling Removal Cost in Central Texas | LevelWall Drywall",
  description: "What drives popcorn ceiling removal pricing — square footage, asbestos testing, skim-coat level, and paint readiness — plus realistic ranges for Waco homes.",
  alternates: { canonical: url },
  openGraph: {
    title: "Popcorn Ceiling Removal Cost in Central Texas",
    description: "What drives popcorn ceiling removal pricing — square footage, asbestos testing, skim-coat level, and paint readiness — plus realistic ranges for Waco homes.",
    url,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

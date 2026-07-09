import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";
const url = BASE_URL + "/industries/restoration-partners";

export const metadata: Metadata = {
  title: "Restoration Partners Drywall Partner | LevelWall Drywall",
  description: "Water and storm drywall cut-out, hang, tape, and texture for restoration companies — reliable board work that supports your claim timeline.",
  alternates: { canonical: url },
  openGraph: {
    title: "Restoration Partners | LevelWall Drywall",
    description: "Water and storm drywall cut-out, hang, tape, and texture for restoration companies — reliable board work that supports your claim timeline.",
    url,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

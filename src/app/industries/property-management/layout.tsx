import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";
const url = BASE_URL + "/industries/property-management";

export const metadata: Metadata = {
  title: "Property Management Drywall Partner | LevelWall Drywall",
  description: "Make-ready drywall, unit turns, and portfolio repairs for Central Texas property managers — one accountable drywall partner.",
  alternates: { canonical: url },
  openGraph: {
    title: "Property Management | LevelWall Drywall",
    description: "Make-ready drywall, unit turns, and portfolio repairs for Central Texas property managers — one accountable drywall partner.",
    url,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

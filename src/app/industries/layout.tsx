import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";

export const metadata: Metadata = {
  title: "Industries Served | LevelWall Drywall — Waco TX",
  description:
    "Drywall programs for homebuilders, property management, and restoration partners across Waco and Central Texas. Pro crews, bonded & insured.",
  alternates: { canonical: `${BASE_URL}/industries` },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

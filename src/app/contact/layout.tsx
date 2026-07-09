import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";

export const metadata: Metadata = {
  title: "Contact LevelWall Drywall | Schedule Service in Waco & Central Texas",
  description:
    "Contact LevelWall Drywall to schedule drywall hanging, taping, texture matching, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 970-1818.",
  keywords: [
    "contact LevelWall Drywall",
    "drywall estimate Waco",
    "schedule drywall repair",
    "LevelWall contact",
  ],
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: "Contact LevelWall Drywall | Waco & Central Texas",
    description: "Schedule hang, tape, texture, or patch service. Call (254) 970-1818.",
    url: `${BASE_URL}/contact`,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

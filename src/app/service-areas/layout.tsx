import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";

export const metadata: Metadata = {
  title: "Service Areas | LevelWall Drywall — Waco & Central Texas",
  description:
    "LevelWall Drywall serves Waco, Hewitt, Woodway, Temple, Killeen, McGregor, China Spring, Bellmead, and surrounding Central Texas communities.",
  alternates: { canonical: `${BASE_URL}/service-areas` },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

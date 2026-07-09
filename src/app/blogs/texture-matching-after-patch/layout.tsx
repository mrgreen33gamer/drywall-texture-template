import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";
const url = BASE_URL + "/blogs/texture-matching-after-patch";

export const metadata: Metadata = {
  title: "Texture Matching After a Drywall Patch (Waco Homes) | LevelWall Drywall",
  description: "A perfect patch still fails if the texture does not match. Learn how pros blend orange peel, knockdown, and skip trowel so repairs disappear after paint.",
  alternates: { canonical: url },
  openGraph: {
    title: "Texture Matching After a Drywall Patch (Waco Homes)",
    description: "A perfect patch still fails if the texture does not match. Learn how pros blend orange peel, knockdown, and skip trowel so repairs disappear after paint.",
    url,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

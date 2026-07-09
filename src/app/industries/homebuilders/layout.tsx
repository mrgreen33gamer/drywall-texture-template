import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";
const url = BASE_URL + "/industries/homebuilders";

export const metadata: Metadata = {
  title: "Homebuilders Drywall Partner | LevelWall Drywall",
  description: "Production and custom drywall hanging, taping, and texture for Central Texas homebuilders — on schedule for framing inspection and paint.",
  alternates: { canonical: url },
  openGraph: {
    title: "Homebuilders | LevelWall Drywall",
    description: "Production and custom drywall hanging, taping, and texture for Central Texas homebuilders — on schedule for framing inspection and paint.",
    url,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";
const url = BASE_URL + "/blogs/drywall-vs-plaster-repairs";

export const metadata: Metadata = {
  title: "Drywall vs Plaster Repairs: What Homeowners Should Know | LevelWall Drywall",
  description: "Older Waco homes may have plaster. Here is how repair methods differ from modern drywall, when to call a specialty crew, and how to budget the job.",
  alternates: { canonical: url },
  openGraph: {
    title: "Drywall vs Plaster Repairs: What Homeowners Should Know",
    description: "Older Waco homes may have plaster. Here is how repair methods differ from modern drywall, when to call a specialty crew, and how to budget the job.",
    url,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

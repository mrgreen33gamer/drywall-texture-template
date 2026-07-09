import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.levelwalldrywall.com';
const url = BASE_URL + '/services/patch-repair';

export const metadata: Metadata = {
  title: "Patch & Repair Waco TX | LevelWall Drywall",
  description: "Holes, cracks, corner bead, and nail pops fixed cleanly with texture match and 2-year workmanship. Pro drywall contractors · bonded & insured · Smooth Finish Guarantee · 2-Year Workmanship.",
  keywords: ["Patch & Repair Waco TX", "drywall Waco", "patch Central Texas", "LevelWall Drywall"],
  alternates: { canonical: url },
  openGraph: {
    title: "Patch & Repair Waco TX | LevelWall Drywall",
    description: "Holes, cracks, corner bead, and nail pops fixed cleanly with texture match and 2-year workmanship.",
    url,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patch & Repair Waco TX | LevelWall Drywall",
    description: "Holes, cracks, corner bead, and nail pops fixed cleanly with texture match and 2-year workmanship.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Patch & Repair",
  description: "Holes, cracks, corner bead, and nail pops fixed cleanly with texture match and 2-year workmanship.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "LevelWall Drywall",
    url: BASE_URL,
    telephone: "+12549701818",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2100 N 25th St",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76708",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Patch & Repair",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}

import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.levelwalldrywall.com';
const url = BASE_URL + '/services/popcorn-removal';

export const metadata: Metadata = {
  title: "Popcorn Ceiling Removal Waco TX | LevelWall Drywall",
  description: "Safe scrape, skim, and smooth finish for a modern look — paint-ready ceilings when we leave. Pro drywall contractors · bonded & insured · Smooth Finish Guarantee · 2-Year Workmanship.",
  keywords: ["Popcorn Ceiling Removal Waco TX", "drywall Waco", "popcorn removal Central Texas", "LevelWall Drywall"],
  alternates: { canonical: url },
  openGraph: {
    title: "Popcorn Ceiling Removal Waco TX | LevelWall Drywall",
    description: "Safe scrape, skim, and smooth finish for a modern look — paint-ready ceilings when we leave.",
    url,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Popcorn Ceiling Removal Waco TX | LevelWall Drywall",
    description: "Safe scrape, skim, and smooth finish for a modern look — paint-ready ceilings when we leave.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Popcorn Ceiling Removal",
  description: "Safe scrape, skim, and smooth finish for a modern look — paint-ready ceilings when we leave.",
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
  serviceType: "Popcorn Ceiling Removal",
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

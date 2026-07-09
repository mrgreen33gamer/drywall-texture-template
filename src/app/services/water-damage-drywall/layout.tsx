import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.levelwalldrywall.com';
const url = BASE_URL + '/services/water-damage-drywall';

export const metadata: Metadata = {
  title: "Water Damage Drywall Waco TX | LevelWall Drywall",
  description: "Cut-out, dry cavity, hang, tape, and finish after leaks or storms — with insurance-friendly documentation. Pro drywall contractors · bonded & insured · Smooth Finish Guarantee · 2-Year Workmanship.",
  keywords: ["Water Damage Drywall Waco TX", "drywall Waco", "water damage Central Texas", "LevelWall Drywall"],
  alternates: { canonical: url },
  openGraph: {
    title: "Water Damage Drywall Waco TX | LevelWall Drywall",
    description: "Cut-out, dry cavity, hang, tape, and finish after leaks or storms — with insurance-friendly documentation.",
    url,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Damage Drywall Waco TX | LevelWall Drywall",
    description: "Cut-out, dry cavity, hang, tape, and finish after leaks or storms — with insurance-friendly documentation.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Damage Drywall",
  description: "Cut-out, dry cavity, hang, tape, and finish after leaks or storms — with insurance-friendly documentation.",
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
  serviceType: "Water Damage Drywall",
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

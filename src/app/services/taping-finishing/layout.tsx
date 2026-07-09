import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.levelwalldrywall.com';
const url = BASE_URL + '/services/taping-finishing';

export const metadata: Metadata = {
  title: "Taping & Finishing Waco TX | LevelWall Drywall",
  description: "Tape, mud, and sand through Level 4 or Level 5 so walls and ceilings take paint without telegraphing seams. Pro drywall contractors · bonded & insured · Smooth Finish Guarantee · 2-Year Workmanship.",
  keywords: ["Taping & Finishing Waco TX", "drywall Waco", "taping Central Texas", "LevelWall Drywall"],
  alternates: { canonical: url },
  openGraph: {
    title: "Taping & Finishing Waco TX | LevelWall Drywall",
    description: "Tape, mud, and sand through Level 4 or Level 5 so walls and ceilings take paint without telegraphing seams.",
    url,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taping & Finishing Waco TX | LevelWall Drywall",
    description: "Tape, mud, and sand through Level 4 or Level 5 so walls and ceilings take paint without telegraphing seams.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Taping & Finishing",
  description: "Tape, mud, and sand through Level 4 or Level 5 so walls and ceilings take paint without telegraphing seams.",
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
  serviceType: "Taping & Finishing",
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

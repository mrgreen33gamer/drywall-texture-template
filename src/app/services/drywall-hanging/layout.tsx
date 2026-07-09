import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.levelwalldrywall.com';
const url = BASE_URL + '/services/drywall-hanging';

export const metadata: Metadata = {
  title: "Drywall Hanging Waco TX | LevelWall Drywall",
  description: "Straight hangs, tight joints, and square corners for new construction, remodels, and room additions across Central Texas. Pro drywall contractors · bonded & insured · Smooth Finish Guarantee · 2-Year Workmanship.",
  keywords: ["Drywall Hanging Waco TX", "drywall Waco", "hanging Central Texas", "LevelWall Drywall"],
  alternates: { canonical: url },
  openGraph: {
    title: "Drywall Hanging Waco TX | LevelWall Drywall",
    description: "Straight hangs, tight joints, and square corners for new construction, remodels, and room additions across Central Texas.",
    url,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drywall Hanging Waco TX | LevelWall Drywall",
    description: "Straight hangs, tight joints, and square corners for new construction, remodels, and room additions across Central Texas.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drywall Hanging",
  description: "Straight hangs, tight joints, and square corners for new construction, remodels, and room additions across Central Texas.",
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
  serviceType: "Drywall Hanging",
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

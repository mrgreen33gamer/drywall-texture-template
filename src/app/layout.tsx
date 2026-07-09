// src/app/layout.tsx
// LevelWall Drywall — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#0d1b2a' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//                                Two values supplied so Safari can pick the
//                                right one for light vs dark mode.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { League_Spartan, Figtree, DM_Sans } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS — uniqueness
const fontTitle = League_Spartan({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Figtree({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = DM_Sans({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});


const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.levelwalldrywall.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#18181b" },
    { media: "(prefers-color-scheme: dark)",  color: "#18181b" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "LevelWall Drywall | Hang · Tape · Texture · Repair — Waco, TX",
    template: "%s | LevelWall Drywall",
  },
  description:
    "LevelWall Drywall is a Waco, TX drywall company offering drywall hanging, taping & finishing, texture matching, water damage drywall, popcorn ceiling removal, and patch & repair for Central Texas homes and businesses. Pro drywall contractors, bonded & insured.",
  keywords: [
    "LevelWall Drywall",
    "drywall contractor Waco TX",
    "drywall work Waco Texas",
    "taping & finishing Central Texas",
    "water damage drywall Waco",
    "patch and repair drywall contractor Waco TX",
    "texture matching Hewitt TX",
    "popcorn ceiling removal Temple TX",
    "drywall contractor Killeen",
  ],
  authors: [{ name: "LevelWall Drywall", url: BASE_URL }],
  creator: "LevelWall Drywall",
  publisher: "LevelWall Drywall",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "LevelWall Drywall | Hang · Tape · Texture · Repair — Waco, TX",
    description:
      "Waco-based drywall contractor for drywall hanging, taping & finishing, texture matching, water damage drywall, popcorn removal, and patch & repair across Central Texas. Bonded & insured.",
    url: BASE_URL,
    siteName: "LevelWall Drywall",
    images: [
      {
        url: `${BASE_URL}/logos/scott-apps-banner.png?v=1`,
        width: 1200,
        height: 630,
        alt: "LevelWall Drywall — Waco TX Drywall Work",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LevelWall Drywall | Waco TX Drywall Work",
    description:
      "Drywall hanging, taping, texture matching & patch repair for Central Texas. Pro drywall contractors — bonded & insured.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "5.0";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "LevelWall Drywall",
  alternateName: "LevelWall Drywall Waco",
  description:
    "Residential and light commercial drywall services in Waco and Central Texas — drywall hanging, taping & finishing, texture matching, water damage drywall, popcorn ceiling removal, and patch & repair. pro drywall crews, bonded & insured, Smooth Finish Guarantee · 2-Year Workmanship.",
  url: BASE_URL,
  telephone: "+12549701818",
  email: "hello@levelwalldrywall.com",
  foundingDate: "2009",
  founder: {
    "@type": "Person",
    name: "Mitch Rowan",
    jobTitle: "Owner & Lead Drywall Contractor",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "2100 N 25th St",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76708",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5652,
    longitude: -97.1467,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Drywall Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall Hanging" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taping & Finishing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Texture Matching" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Damage Drywall" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Popcorn Ceiling Removal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Patch & Repair" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/levelwalldrywall",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#a1a1aa" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#18181b",
                }}
              >
                <PulseLoader size={50} color="#a1a1aa" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}

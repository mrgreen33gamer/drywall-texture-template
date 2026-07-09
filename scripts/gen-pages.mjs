import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const services = [
  {
    slug: 'drywall-hanging',
    title: 'Drywall Hanging',
    short: 'hanging',
    subtitle: 'Straight hangs, tight joints, and square corners for new construction, remodels, and room additions across Central Texas.',
    expect: [
      ['Clear Scope First', 'We measure board counts, ceiling height, and openings before quoting — no vague estimates.'],
      ['Written Quote', 'Labor and materials in the number. You approve before we hang a single sheet.'],
      ['Clean Professional Hang', 'Screws on pattern, seams staggered, corners true — ready for tape and finish.'],
      ['2-Year Workmanship', 'Every hang is backed by our Smooth Finish Guarantee · 2-Year Workmanship.'],
    ],
    why: [
      ['Efficient Scheduling', 'Remodel hangs booked quickly. New construction coordinated with your GC schedule.'],
      ['Pro Hangers', 'Crews that hang level, plumb, and tight so finish coats go on right.'],
      ['Bonded and Insured', 'Fully insured on every job. Documentation on request.'],
    ],
    process: [
      ['Call or Book', 'Share plans, photos, or room dimensions — we confirm fit and timing.'],
      ['Quote', 'You get an upfront price for hang (and tape if bundled).'],
      ['Hang Day', 'We protect floors, hang board, and leave the site broom-clean.'],
      ['Walkthrough', 'We review corners and seams before tape or handoff to finish.'],
    ],
    faq: [
      ['What does drywall hanging include?', 'Hanging gypsum board on walls and ceilings, fastening to code pattern, and preparing seams for tape. Taping and texture can be bundled.'],
      ['How much does drywall hanging cost in Waco?', 'Depends on square footage, ceiling height, and access. Call (254) 970-1818 for a free estimate.'],
      ['Do you hang moisture-resistant board?', 'Yes — green board and appropriate products for baths and wet areas when specified.'],
      ['Are you insured?', 'Yes — pro drywall contractors who are bonded and insured.'],
      ['Do you warranty the work?', 'Yes — Smooth Finish Guarantee · 2-Year Workmanship on completed labor.'],
      ['What areas do you serve?', 'Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco.'],
    ],
    cross: [
      ['Taping & Finishing', 'taping-finishing', 'Tape, mud, and sand to paint-ready levels.'],
      ['Texture Matching', 'texture-matching', 'Match orange peel, knockdown, and more.'],
      ['Water Damage Drywall', 'water-damage-drywall', 'Replace board after leaks and storms.'],
      ['Patch & Repair', 'patch-repair', 'Smaller fixes when a full hang is not needed.'],
    ],
  },
  {
    slug: 'taping-finishing',
    title: 'Taping & Finishing',
    short: 'taping',
    subtitle: 'Tape, mud, and sand through Level 4 or Level 5 so walls and ceilings take paint without telegraphing seams.',
    expect: [
      ['Finish Level Guidance', 'We recommend Level 4 or 5 based on lighting and paint sheen — no overselling.'],
      ['Written Quote', 'Coats, sanding, and materials included in an upfront price.'],
      ['Dust Control', 'Containment and cleanup so the home stays livable between coats.'],
      ['2-Year Workmanship', 'Seams and finish covered under our Smooth Finish Guarantee.'],
    ],
    why: [
      ['Multi-Coat Process', 'Proper dry times between coats — no rushing that shows after paint.'],
      ['Paint-Ready Surfaces', 'We leave walls ready for primer and paint with seams that disappear.'],
      ['Bonded and Insured', 'Fully insured finish crews on residential and light commercial work.'],
    ],
    process: [
      ['Inspect', 'We check hung board, fasteners, and gaps before tape.'],
      ['Tape & Coat', 'Paper or mesh tape with multiple mud coats as needed.'],
      ['Sand & Check', 'Feather edges under critical light so seams do not flash.'],
      ['Handoff', 'Paint-ready walkthrough with finish level confirmed.'],
    ],
    faq: [
      ['What is Level 4 vs Level 5 finish?', 'Level 4 is standard for most walls with flat or eggshell paint. Level 5 adds a skim coat for critical lighting and higher sheens.'],
      ['How long does taping take?', 'Most rooms need several days for coats and dry times. We schedule around that honestly.'],
      ['Can you finish board hung by others?', 'Yes, after we inspect fastener pattern and board condition.'],
      ['Are you insured?', 'Yes — bonded and insured.'],
      ['Do you warranty finishing?', 'Yes — 2-Year Workmanship on our labor.'],
      ['What areas do you serve?', 'Waco and Central Texas within about 60 miles.'],
    ],
    cross: [
      ['Drywall Hanging', 'drywall-hanging', 'Board hung plumb and tight before finish.'],
      ['Texture Matching', 'texture-matching', 'Texture after finish coats.'],
      ['Popcorn Ceiling Removal', 'popcorn-removal', 'Smooth skim after popcorn scrape.'],
      ['Patch & Repair', 'patch-repair', 'Localized tape and float repairs.'],
    ],
  },
  {
    slug: 'texture-matching',
    title: 'Texture Matching',
    short: 'texture',
    subtitle: 'Orange peel, knockdown, skip trowel, and smooth — blended so patches and repairs disappear after paint.',
    expect: [
      ['Texture Sample First', 'We test blend beside the repair before full spray or trowel.'],
      ['Written Quote', 'Upfront price for match type and square footage.'],
      ['Blend Into Existing', 'Feather edges so new texture does not read as a square patch.'],
      ['2-Year Workmanship', 'Texture work covered under our Smooth Finish Guarantee.'],
    ],
    why: [
      ['Common Texas Textures', 'Daily work with orange peel, knockdown, and smooth skim.'],
      ['Paint-Day Ready', 'We leave surfaces ready for primer so color does not flash.'],
      ['Bonded and Insured', 'Insured crews in occupied homes and job sites.'],
    ],
    process: [
      ['Identify Texture', 'We match the existing pattern and sheen expectations.'],
      ['Prep', 'Prime patches and mask adjacent surfaces.'],
      ['Apply & Blend', 'Spray or hand texture feathered into the field.'],
      ['Review', 'Walkthrough under room lighting before paint.'],
    ],
    faq: [
      ['Can you match knockdown texture?', 'Yes — knockdown, orange peel, skip trowel, and smooth are standard.'],
      ['Will the patch show after paint?', 'Proper blend plus primer greatly reduces flash. Critical light may need Level 5 skim first.'],
      ['Do you texture full rooms?', 'Yes — new rooms and after popcorn removal.'],
      ['Are you insured?', 'Yes — bonded and insured.'],
      ['Do you warranty texture?', 'Yes — 2-Year Workmanship on our labor.'],
      ['What areas do you serve?', 'Waco, Temple, Killeen, and surrounding Central Texas.'],
    ],
    cross: [
      ['Patch & Repair', 'patch-repair', 'Repair first, then match texture.'],
      ['Taping & Finishing', 'taping-finishing', 'Level finishes before texture.'],
      ['Popcorn Ceiling Removal', 'popcorn-removal', 'Smooth ceilings after scrape.'],
      ['Water Damage Drywall', 'water-damage-drywall', 'Replace and retexture after leaks.'],
    ],
  },
  {
    slug: 'water-damage-drywall',
    title: 'Water Damage Drywall',
    short: 'water damage',
    subtitle: 'Cut-out, dry cavity, hang, tape, and finish after leaks or storms — with insurance-friendly documentation.',
    expect: [
      ['Damage Assessment', 'We identify soft board, mold-risk cavities, and what must be replaced.'],
      ['Written Scope', 'Demo, hang, tape, and texture priced upfront for you or your adjuster.'],
      ['Dry & Replace', 'Board only goes back when the cavity is dry and ready.'],
      ['2-Year Workmanship', 'Finish labor covered under our Smooth Finish Guarantee.'],
    ],
    why: [
      ['Insurance Experience', 'Clear photos and scopes that help claims move faster.'],
      ['Full Restore Path', 'Demo through texture match — one crew, one warranty.'],
      ['Bonded and Insured', 'Fully insured restoration support for homes and light commercial.'],
    ],
    process: [
      ['Inspect & Photo', 'Document damage for your records or insurer.'],
      ['Demo Soft Board', 'Remove damaged drywall and prep the cavity.'],
      ['Hang & Finish', 'New board, tape, texture match to surrounding walls.'],
      ['Final Review', 'Walkthrough with paint-ready surfaces.'],
    ],
    faq: [
      ['Do you work with insurance claims?', 'Yes — we provide photos, scopes, and invoices suitable for most residential claims.'],
      ['How soon after a leak can you hang board?', 'After the source is fixed and the cavity is dry. We will not trap moisture.'],
      ['Can you match the old texture?', 'Yes — part of every water-damage restore.'],
      ['Are you insured?', 'Yes — bonded and insured.'],
      ['Do you warranty the repair?', 'Yes — 2-Year Workmanship on our labor.'],
      ['What areas do you serve?', 'Waco and Central Texas within about 60 miles.'],
    ],
    cross: [
      ['Drywall Hanging', 'drywall-hanging', 'Full hangs when damage is extensive.'],
      ['Taping & Finishing', 'taping-finishing', 'Multi-coat finish after replacement.'],
      ['Texture Matching', 'texture-matching', 'Blend new board into existing texture.'],
      ['Patch & Repair', 'patch-repair', 'Smaller wet spots that do not need full demo.'],
    ],
  },
  {
    slug: 'popcorn-removal',
    title: 'Popcorn Ceiling Removal',
    short: 'popcorn removal',
    subtitle: 'Safe scrape, skim, and smooth finish for a modern look — paint-ready ceilings when we leave.',
    expect: [
      ['Honest Assessment', 'We discuss testing needs for older textures and realistic timelines.'],
      ['Written Quote', 'Square footage, skim level, and cleanup included upfront.'],
      ['Contained Scrape', 'Plastic protection and thorough cleanup of texture debris.'],
      ['Smooth Finish', 'Skim and sand so ceilings are ready for primer and paint.'],
    ],
    why: [
      ['Modern Finish', 'Popcorn is dated — smooth ceilings update the whole room.'],
      ['Dust Discipline', 'Containment and cleanup designed for lived-in homes.'],
      ['Bonded and Insured', 'Insured crews for multi-room and whole-home jobs.'],
    ],
    process: [
      ['Protect & Prep', 'Cover floors, fixtures, and walls as needed.'],
      ['Scrape', 'Remove popcorn texture carefully and collect debris.'],
      ['Skim & Sand', 'Level the ceiling for a smooth modern surface.'],
      ['Handoff', 'Paint-ready ceiling walkthrough.'],
    ],
    faq: [
      ['How much does popcorn ceiling removal cost?', 'Driven by square footage, ceiling height, and skim level. Call (254) 970-1818 for a free estimate.'],
      ['Do I need asbestos testing?', 'Homes built before the 1980s may need testing before scrape. We will advise when it is prudent.'],
      ['Can you retexture instead of smooth?', 'Yes — smooth is most popular, but we can apply a light orange peel if preferred.'],
      ['Are you insured?', 'Yes — bonded and insured.'],
      ['Do you warranty the work?', 'Yes — 2-Year Workmanship.'],
      ['What areas do you serve?', 'Waco, Temple, Killeen, and surrounding towns.'],
    ],
    cross: [
      ['Taping & Finishing', 'taping-finishing', 'Skim coats for Level 5 smoothness.'],
      ['Texture Matching', 'texture-matching', 'Light texture options after scrape.'],
      ['Patch & Repair', 'patch-repair', 'Fix ceiling cracks before or after removal.'],
      ['Drywall Hanging', 'drywall-hanging', 'Replace damaged ceiling board if needed.'],
    ],
  },
  {
    slug: 'patch-repair',
    title: 'Patch & Repair',
    short: 'patch',
    subtitle: 'Holes, cracks, corner bead, and nail pops fixed cleanly with texture match and 2-year workmanship.',
    expect: [
      ['Right-Sized Repair', 'Patch when a patch is enough — full board only when needed.'],
      ['Written Quote', 'Upfront price for each patch or batched list.'],
      ['Texture Match', 'Blend so the fix disappears under paint.'],
      ['2-Year Workmanship', 'Repairs covered under our Smooth Finish Guarantee.'],
    ],
    why: [
      ['Fast Scheduling', 'Small patches often same-week; sometimes same-day.'],
      ['Clean Work Habits', 'Drop cloths, dust control, and debris hauled.'],
      ['Bonded and Insured', 'Trusted in occupied homes and rentals.'],
    ],
    process: [
      ['Scope', 'Photos or on-site look at holes, cracks, and beads.'],
      ['Quote', 'Batch multiple fixes for better value when possible.'],
      ['Repair', 'Cut, patch, tape, sand, and texture match.'],
      ['Walkthrough', 'Paint-ready patches before we leave.'],
    ],
    faq: [
      ['What size holes can you patch?', 'From picture-hanger nicks to large cut-outs. Very large areas may become a partial hang.'],
      ['How much do drywall patches cost in Waco?', 'Small patches often start in the low hundreds depending on texture. Call (254) 970-1818.'],
      ['Do you match texture on patches?', 'Yes — that is standard on every repair.'],
      ['Are you insured?', 'Yes — bonded and insured.'],
      ['Do you warranty patches?', 'Yes — 2-Year Workmanship.'],
      ['What areas do you serve?', 'Waco and Central Texas within about 60 miles.'],
    ],
    cross: [
      ['Texture Matching', 'texture-matching', 'Full-room texture after large repairs.'],
      ['Taping & Finishing', 'taping-finishing', 'Float and finish for bigger areas.'],
      ['Water Damage Drywall', 'water-damage-drywall', 'When moisture caused the damage.'],
      ['Drywall Hanging', 'drywall-hanging', 'When replacement board is the better fix.'],
    ],
  },
];

function layoutFor(s) {
  return `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.levelwalldrywall.com';
const url = BASE_URL + '/services/${s.slug}';

export const metadata: Metadata = {
  title: "${s.title} Waco TX | LevelWall Drywall",
  description: "${s.subtitle} Pro drywall contractors · bonded & insured · Smooth Finish Guarantee · 2-Year Workmanship.",
  keywords: ["${s.title} Waco TX", "drywall Waco", "${s.short} Central Texas", "LevelWall Drywall"],
  alternates: { canonical: url },
  openGraph: {
    title: "${s.title} Waco TX | LevelWall Drywall",
    description: "${s.subtitle}",
    url,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "${s.title} Waco TX | LevelWall Drywall",
    description: "${s.subtitle}",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "${s.title}",
  description: "${s.subtitle}",
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
  serviceType: "${s.title}",
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
`;
}

function pageFor(s) {
  const expLines = [
    `    { icon: faSearch, title: "${s.expect[0][0]}", description: "${s.expect[0][1]}" },`,
    `    { icon: faFileContract, title: "${s.expect[1][0]}", description: "${s.expect[1][1]}" },`,
    `    { icon: faCheckCircle, title: "${s.expect[2][0]}", description: "${s.expect[2][1]}" },`,
    `    { icon: faShieldHalved, title: "${s.expect[3][0]}", description: "${s.expect[3][1]}" },`,
  ].join('\n');
  const whyLines = [
    `    { icon: faClock, title: "${s.why[0][0]}", description: "${s.why[0][1]}" },`,
    `    { icon: faWrench, title: "${s.why[1][0]}", description: "${s.why[1][1]}" },`,
    `    { icon: faShieldHalved, title: "${s.why[2][0]}", description: "${s.why[2][1]}" },`,
  ].join('\n');
  const procLines = [
    `    { number: 1, title: "${s.process[0][0]}", description: "${s.process[0][1]}", icon: faHeadset },`,
    `    { number: 2, title: "${s.process[1][0]}", description: "${s.process[1][1]}", icon: faSearch },`,
    `    { number: 3, title: "${s.process[2][0]}", description: "${s.process[2][1]}", icon: faFileContract },`,
    `    { number: 4, title: "${s.process[3][0]}", description: "${s.process[3][1]}", icon: faCheckCircle },`,
  ].join('\n');
  const faqLines = s.faq.map(([q, a]) => `    { question: ${JSON.stringify(q)}, answer: ${JSON.stringify(a)} },`).join('\n');
  const crossLines = s.cross.map(([t, slug, b]) => `    { icon: faWrench, title: "${t}", body: "${b}", link: "/services/${slug}" },`).join('\n');
  const subFull = s.subtitle + ' Upfront quotes and a Smooth Finish Guarantee · 2-Year Workmanship.';

  return `// LevelWall Drywall — ${s.title} Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faWrench, faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicePage() {
  const expectations = [
${expLines}
  ];

  const whyFeatures = [
${whyLines}
  ];

  const processSteps = [
${procLines}
  ];

  const metrics = [
    { icon: faTrophy, value: 5000, label: "Rooms finished in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 17, label: "Years serving Waco locals", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling for ${s.short}.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full coverage throughout Hewitt.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for Woodway homes.", badge: "" },
    { town: "Temple", benefit: "Bell County coverage with reliable turnaround.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger properties.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Written quote before work starts", us: "✅ Always", others: "❌ Often hourly" },
    { feature: "Pro drywall crews", us: "✅ All jobs", others: "❌ Varies" },
    { feature: "Smooth Finish Guarantee · 2-Year Workmanship", us: "✅ Every job", others: "❌ Rare" },
    { feature: "No service contracts required", us: "✅ Never required", others: "❌ Sometimes" },
    { feature: "Texture matching included", us: "✅ Standard", others: "❌ Extra charge" },
  ];

  const faq = [
${faqLines}
  ];

  const crossServices = [
${crossLines}
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "${s.title}" },
      ]} />
      <SectionIntro title="${s.title} in Waco, TX" subtitle={${JSON.stringify(subFull)}} />
      <TrustBar headline="5,000+ Central Texas rooms — pro drywall crews, bonded and insured" />
      <div className={styles.section}><WhatToExpect expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose LevelWall" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/${s.slug}" title="${s.title} Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="${s.title} FAQs" /></div>
      <CTABanner
        headline="Ready for a Free Drywall Estimate?"
        subline="Upfront quotes. Pro drywall crews. Call (254) 970-1818."
        primaryText="Call Us Now"
        primaryLink="tel:+12549701818"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule ${s.title}" cityName="Waco" slug="services/${s.slug}" spot="${s.slug}-page-form" formVariant={2} />
      </div>
    </main>
  );
}
`;
}

for (const s of services) {
  const dir = path.join(ROOT, 'src/app/services', s.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'layout.tsx'), layoutFor(s));
  fs.writeFileSync(path.join(dir, 'page.tsx'), pageFor(s));
  console.log('service', s.slug);
}

// Services index
fs.writeFileSync(path.join(ROOT, 'src/app/services/page.tsx'), `// LevelWall Drywall — Services Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faLayerGroup, faBrush, faSprayCan, faWater, faBorderAll, faClipboardList,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faLock, faRotateLeft, faTag, faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faLayerGroup, title: "Drywall Hanging", body: "Straight hangs, tight joints, and square corners for remodels and new construction.", link: "/services/drywall-hanging" },
    { icon: faBrush, title: "Taping & Finishing", body: "Tape, mud, and sand through Level 4/5 for paint-ready walls and ceilings.", link: "/services/taping-finishing" },
    { icon: faSprayCan, title: "Texture Matching", body: "Orange peel, knockdown, skip trowel, and smooth — blended so patches disappear.", link: "/services/texture-matching" },
    { icon: faWater, title: "Water Damage Drywall", body: "Cut-out, dry cavity, hang, tape, and finish after leaks or storms.", link: "/services/water-damage-drywall" },
    { icon: faBorderAll, title: "Popcorn Ceiling Removal", body: "Safe scrape, skim, and smooth finish for a modern paint-ready ceiling.", link: "/services/popcorn-removal" },
    { icon: faClipboardList, title: "Patch & Repair", body: "Holes, cracks, corner bead, and nail pops with texture match.", link: "/services/patch-repair" },
  ];

  const expectations = [
    { icon: faSearch, title: "Clear Guidance First", description: "We explain hang vs patch, finish levels, and texture options before you commit." },
    { icon: faCheckCircle, title: "Upfront, Written Pricing", description: "No hourly billing surprises. You approve the price before we start." },
    { icon: faShieldHalved, title: "Pro Drywall Crews", description: "Trained hang, tape, and texture crews. Bonded and insured on every job." },
    { icon: faTag, title: "Smooth Finish Guarantee · 2-Year Workmanship", description: "Labor covered for two years. If our finish fails, we make it right." },
  ];

  const metrics = [
    { icon: faTrophy, value: 5000, label: "Rooms finished since 2009", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 17, label: "Years serving Central Texas", suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faHeadset, title: "A Real Person Answers", description: "Call or text and reach a real LevelWall team member — not a call center." },
    { icon: faShieldHalved, title: "No Contracts, Ever", description: "No subscription required. You hire us because the finish is done right." },
    { icon: faLock, title: "Bonded & Insured", description: "Pro drywall contractors fully insured. Proof available on request." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or online form. Share photos of walls or ceilings.", icon: faHeadset },
    { number: 2, title: "Scope On-Site", description: "We confirm board, finish level, and texture before quoting.", icon: faSearch },
    { number: 3, title: "Upfront Quote", description: "Written price before any work. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Finish & Guarantee", description: "Clean job, debris hauled, Smooth Finish Guarantee · 2-Year Workmanship.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faTag, title: "Upfront Pricing, Always", description: "The written price you approve is the price you pay." },
    { icon: faShieldHalved, title: "Smooth Finish Guarantee · 2-Year Workmanship", description: "If our labor fails within two years, we fix it." },
    { icon: faRotateLeft, title: "Satisfaction Guarantee", description: "Not happy with the finish? We return to make it right." },
    { icon: faLock, title: "Pro Drywall · Bonded & Insured", description: "Documentation available on request." },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling for hang, tape, and texture.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for remodels and popcorn removal.", badge: "" },
    { town: "Temple", benefit: "Regular service area — quick turnaround.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with no trip charge for most addresses.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Upfront, written pricing", us: "✅ Always", others: "❌ Vague estimates" },
    { feature: "Smooth Finish Guarantee · 2-Year Workmanship", us: "✅ Every job", others: "❌ Rare or none" },
    { feature: "Pro drywall crews", us: "✅ All crews", others: "❌ Not always" },
    { feature: "No service contracts required", us: "✅ Always", others: "❌ Sometimes required" },
    { feature: "Texture matching standard", us: "✅ Yes", others: "❌ Often extra" },
  ];

  const faq = [
    { question: "How much does drywall work cost in Waco?", answer: "Pricing depends on square footage, finish level, and texture. Small patches often start in the low hundreds. Call (254) 970-1818 for a free estimate." },
    { question: "Are your crews bonded and insured?", answer: "Yes — LevelWall Drywall uses pro drywall contractors who are bonded and insured." },
    { question: "Do you offer free estimates?", answer: "Yes — free estimates across our service area. Call (254) 970-1818." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "Do you offer a warranty?", answer: "Yes — Smooth Finish Guarantee · 2-Year Workmanship on completed labor." },
    { question: "How do I get a quote?", answer: "Call, text, or fill out our online form. We'll confirm scope and provide written pricing before any work starts." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <SectionIntro
        title="Drywall Services in Waco, TX"
        subtitle="Hanging, taping & finishing, texture matching, water damage drywall, popcorn ceiling removal, and patch & repair — pro crews, upfront quotes, Smooth Finish Guarantee · 2-Year Workmanship."
      />
      <TrustBar headline="5,000+ rooms · 4.9★ from 980+ reviews · Bonded & insured" />
      <div className={styles.section}><ServiceCardComponent heading="Our Services" subheading="Hang · tape · texture · repair — done level." cards={services} /></div>
      <div className={styles.section}><WhatToExpect expectations={expectations} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><GuaranteeSection guarantees={guarantees} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} /></div>
      <CTABanner
        headline="Ready for a Free Estimate?"
        subline="Upfront quotes. Pro drywall crews. Call (254) 970-1818."
        primaryText="Call (254) 970-1818"
        primaryLink="tel:+12549701818"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant2 title="Request a Free Estimate" cityName="Waco" slug="services" spot="services-index-form" formVariant={1} />
      </div>
    </main>
  );
}
`);

// services layout
fs.writeFileSync(path.join(ROOT, 'src/app/services/layout.tsx'), `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";

export const metadata: Metadata = {
  title: "Drywall Services Waco TX | Hang · Tape · Texture · Repair",
  description:
    "LevelWall Drywall services in Waco and Central Texas: drywall hanging, taping & finishing, texture matching, water damage drywall, popcorn ceiling removal, and patch & repair. Bonded & insured.",
  alternates: { canonical: \`\${BASE_URL}/services\` },
  openGraph: {
    title: "Drywall Services Waco TX | LevelWall Drywall",
    description: "Hang · tape · texture · repair for Central Texas homes and businesses.",
    url: \`\${BASE_URL}/services\`,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
`);

console.log('services index + layouts done');

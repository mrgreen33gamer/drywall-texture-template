import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const w = (rel, c) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, c);
  console.log('wrote', rel);
};

// ── Industries index ────────────────────────────────────────────────────────
w('src/app/industries/page.tsx', `"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "./page.module.scss";
import SectionIntro       from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison    from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import Variant4           from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Operation Before We Quote",
      description: "Homebuilders, property managers, and restoration partners all work differently. Before we quote, we learn your schedule, access rules, and punch windows.",
    },
    {
      icon: faShieldHalved,
      title: "Pro Drywall · Bonded & Insured",
      description: "We're based in Waco, TX with pro drywall crews and full insurance — the documentation multi-unit and commercial projects require.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Hang, Tape & Texture — One Vendor",
      description: "Whether you need production hangs, unit turns, or water-damage board replacement — we handle it under one roof.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3,    label: "B2B industries actively served across Central Texas", suffix: "",  duration: 2 },
    { icon: faChartLine, value: 400,  label: "Commercial and multi-unit drywall projects completed", suffix: "+", duration: 3 },
    { icon: faClock,     value: 17,   label: "Years serving Central Texas organizations",           suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Our home base — serving builders, PMs, and restoration partners.", badge: "Headquarters" },
    { town: "Temple", benefit: "Production and multi-unit drywall across Bell County.", badge: "" },
    { town: "Killeen", benefit: "Apartments, new builds, and restoration work.", badge: "" },
    { town: "Hewitt", benefit: "Residential portfolios and suburban production.", badge: "" },
    { town: "Woodway", benefit: "Custom homes and premium rentals.", badge: "" },
    { town: "McGregor", benefit: "Light commercial and community facilities.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Organization-specific scheduling", us: "✅ Built per project type", others: "❌ One-size-fits-all" },
    { feature: "Central Texas market knowledge", us: "✅ 17+ years in Waco", others: "❌ Out-of-area contractors" },
    { feature: "Pro drywall commercial crews", us: "✅ Always", others: "❌ Not always" },
    { feature: "Transparent, upfront pricing", us: "✅ Quote before work starts", others: "❌ Billable hours + surprises" },
    { feature: "Smooth Finish Guarantee · 2-Year Workmanship", us: "✅ On every job", others: "❌ Limited or none" },
  ];

  const faq = [
    {
      question: "What types of organizations does LevelWall Drywall work with?",
      answer: "We have dedicated experience with homebuilders, property management companies, and restoration partners — in addition to residential drywall services.",
    },
    {
      question: "Do you build a custom proposal for each organization?",
      answer: "Yes. Every proposal is built around production schedules, unit turns, insurance scopes, and access rules — not a generic residential quote.",
    },
    {
      question: "Do you serve organizations outside of Waco?",
      answer: "Yes — Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and most of Central Texas within about 60 miles of Waco.",
    },
    {
      question: "Can you handle multi-property or multi-building portfolios?",
      answer: "Yes — we build phased, portfolio-wide pricing and scheduling with a single dedicated point of contact.",
    },
    {
      question: "How do I know which program is right for my organization?",
      answer: "Start by clicking your industry below or contacting us directly. We'll recommend the approach that fits — no pressure.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
      <SectionIntro
        title="Industries We Serve Across Central Texas"
        subtitle="Drywall programs built for how your organization actually works — production hangs, unit turns, and restoration scopes — not a generic residential quote."
      />
      <TrustBar headline="Trusted by homebuilders, property managers, and restoration partners across Central Texas since 2009" />
      <div className={styles.section}>
        <SectionIndustriesServed
          title="Browse by Industry"
          subtitle="Click your industry to see exactly how we support organizations like yours."
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Organizations Choose LevelWall" />
      </div>
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} />
      </div>
      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Industry Partnership FAQs" />
      </div>
      <CTABanner
        headline="Need a Drywall Partner for Your Organization?"
        subline="Pro drywall crews. Portfolio-friendly scheduling. Call (254) 970-1818."
        primaryText="Call (254) 970-1818"
        primaryLink="tel:+12549701818"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title="Request an Industry Quote" cityName="Waco" slug="industries" spot="industries-index-form" formVariant={2} />
      </div>
    </main>
  );
}
`);

w('src/app/industries/layout.tsx', `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";

export const metadata: Metadata = {
  title: "Industries Served | LevelWall Drywall — Waco TX",
  description:
    "Drywall programs for homebuilders, property management, and restoration partners across Waco and Central Texas. Pro crews, bonded & insured.",
  alternates: { canonical: \`\${BASE_URL}/industries\` },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`);

function industryPage({ slug, title, subtitle, pains, why, faq, formTitle }) {
  const painLines = pains.map(([icon, p, c]) =>
    `    { icon: ${icon}, problem: ${JSON.stringify(p)}, consequence: ${JSON.stringify(c)} },`
  ).join('\n');
  const whyLines = why.map(([icon, t, d]) =>
    `    { icon: ${icon}, title: ${JSON.stringify(t)}, description: ${JSON.stringify(d)} },`
  ).join('\n');
  const faqLines = faq.map(([q, a]) =>
    `    { question: ${JSON.stringify(q)}, answer: ${JSON.stringify(a)} },`
  ).join('\n');

  w(`src/app/industries/${slug}/page.tsx`, `"use client";
import styles from "../page.module.scss";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";
import {
  faClipboardCheck, faShieldHalved, faUsers, faHeadset, faSearch, faFileContract, faCheckCircle,
  faClock, faTriangleExclamation, faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustryPage() {
  const pains = [
${painLines}
  ];

  const whyFeatures = [
${whyLines}
  ];

  const processSteps = [
    { number: 1, title: "Scope Call", description: "Share plans, work orders, access rules, and timeline constraints.", icon: faHeadset },
    { number: 2, title: "Site Walk", description: "We confirm hang, tape, texture, and any specialty boundaries.", icon: faSearch },
    { number: 3, title: "Package Quote", description: "Written pricing by unit, room, or punch list — easy to approve.", icon: faFileContract },
    { number: 4, title: "Execute & Report", description: "Clean completion, photos when requested, and warranty on labor.", icon: faCheckCircle },
  ];

  const faq = [
${faqLines}
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: ${JSON.stringify(title)} },
      ]} />
      <SectionIntro title={${JSON.stringify(title)}} subtitle={${JSON.stringify(subtitle)}} />
      <TrustBar headline="Pro drywall partner for Central Texas organizations — bonded & insured" />
      <div className={styles.section}>
        <IndustryPainPoints industry={${JSON.stringify(title)}} painPoints={pains} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={${JSON.stringify('Why ' + title + ' Choose LevelWall')}} />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title={${JSON.stringify(title + ' FAQs')}} />
      </div>
      <CTABanner
        headline="Let's Scope Your Project"
        subline="Call (254) 970-1818 or request a package quote online."
        primaryText="Call (254) 970-1818"
        primaryLink="tel:+12549701818"
        secondaryText="Request Quote"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title={${JSON.stringify(formTitle)}} cityName="Waco" slug={${JSON.stringify('industries/' + slug)}} spot={${JSON.stringify('industry-' + slug + '-form')}} formVariant={2} />
      </div>
    </main>
  );
}
`);

  w(`src/app/industries/${slug}/layout.tsx`, `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";
const url = BASE_URL + "/industries/${slug}";

export const metadata: Metadata = {
  title: "${title} Drywall Partner | LevelWall Drywall",
  description: ${JSON.stringify(subtitle)},
  alternates: { canonical: url },
  openGraph: {
    title: "${title} | LevelWall Drywall",
    description: ${JSON.stringify(subtitle)},
    url,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`);
}

industryPage({
  slug: 'homebuilders',
  title: 'Homebuilders',
  subtitle: 'Production and custom drywall hanging, taping, and texture for Central Texas homebuilders — on schedule for framing inspection and paint.',
  pains: [
    ['faClock', 'Schedule slips on finish', 'Late drywall pushes paint, trim, and closing dates.'],
    ['faTriangleExclamation', 'Inconsistent finish quality', 'Callbacks on seams and texture kill punch momentum.'],
    ['faUsers', 'Crew coordination gaps', 'Framers, plumbers, and HVAC leave openings that must hang tight the first time.'],
    ['faDollarSign', 'Change-order chaos', 'Vague board counts and hourly finish work blow production budgets.'],
  ],
  why: [
    ['faClipboardCheck', 'Production-Aware Crews', 'We plan around inspection windows, trade stacking, and closing dates.'],
    ['faShieldHalved', 'Pro Drywall · Bonded & Insured', 'Documentation ready for GCs and superintendents.'],
    ['faUsers', 'Single Point of Contact', 'One LevelWall lead coordinates multi-lot or multi-phase hang and finish.'],
  ],
  faq: [
    ['Can you hang and finish production homes?', 'Yes — we support production schedules with hang, tape, and texture packages.'],
    ['Do you coordinate with other trades?', 'Yes — we work around MEPs and schedule re-hangs for late openings when needed.'],
    ['Do you warranty builder work?', 'Yes — Smooth Finish Guarantee · 2-Year Workmanship on completed labor.'],
    ['Can you handle custom homes?', 'Yes — Level 4/5 finishes and specialty textures for custom builds.'],
  ],
  formTitle: 'Request a Homebuilder Quote',
});

industryPage({
  slug: 'property-management',
  title: 'Property Management',
  subtitle: 'Make-ready drywall, unit turns, and portfolio repairs for Central Texas property managers — one accountable drywall partner.',
  pains: [
    ['faClock', 'Slow unit turns', 'Vacant days cost rent. Wall repairs stack up and delay new tenant move-ins.'],
    ['faTriangleExclamation', 'Inconsistent vendor quality', 'Different contractors leave different texture — and more callbacks for your team.'],
    ['faUsers', 'Communication gaps', 'Tenants, owners, and vendors need clear updates without endless phone tag.'],
    ['faDollarSign', 'Budget surprises', 'Hourly billing and vague scopes blow CapEx and OpEx plans.'],
  ],
  why: [
    ['faClipboardCheck', 'Schedule-Aware Crews', 'We plan around tenant notices, business hours, and turn windows.'],
    ['faShieldHalved', 'Pro Drywall · Bonded & Insured', 'Documentation ready for PMs and ownership groups.'],
    ['faUsers', 'Single Point of Contact', 'One LevelWall lead coordinates multi-unit or multi-site work end to end.'],
  ],
  faq: [
    ['Can you handle multi-unit work orders?', 'Yes — we package make-ready drywall and punch lists with clear pricing and scheduling.'],
    ['Are your crews bonded and insured?', 'Yes — bonded and insured on every job.'],
    ['Do you warranty property work?', 'Yes — Smooth Finish Guarantee · 2-Year Workmanship on completed labor.'],
    ['Can you work after hours?', 'Often yes — tell us your access windows and we will schedule accordingly.'],
  ],
  formTitle: 'Request a Property Management Quote',
});

industryPage({
  slug: 'restoration-partners',
  title: 'Restoration Partners',
  subtitle: 'Water and storm drywall cut-out, hang, tape, and texture for restoration companies — reliable board work that supports your claim timeline.',
  pains: [
    ['faClock', 'Board delays slow drying goals', 'Late drywall hang extends containment and job cycle times.'],
    ['faTriangleExclamation', 'Texture mismatches', 'Poor blend after restore creates owner callbacks and rework.'],
    ['faUsers', 'Multiple vendors on one claim', 'Too many hands increase communication failures and invoice confusion.'],
    ['faDollarSign', 'Scope gaps', 'Under-documented drywall work weakens adjuster confidence.'],
  ],
  why: [
    ['faClipboardCheck', 'Claim-Friendly Documentation', 'Photos and scopes that support your estimate and supplements.'],
    ['faShieldHalved', 'Pro Drywall · Bonded & Insured', 'Insured crews ready for occupied and vacant restores.'],
    ['faUsers', 'Partner-Ready Communication', 'One LevelWall lead for your PM — clear ETAs and completion photos.'],
  ],
  faq: [
    ['Do you work as a sub for restoration companies?', 'Yes — we hang, tape, and texture after your dry-out is complete.'],
    ['Can you match existing texture after water damage?', 'Yes — texture matching is standard on restores.'],
    ['Do you provide documentation for claims?', 'Yes — photos, scopes, and invoices suitable for most residential claims.'],
    ['What is your service area?', 'Waco and Central Texas within about 60 miles.'],
  ],
  formTitle: 'Request a Restoration Partner Quote',
});

// ── SectionIndustriesServed defaults ────────────────────────────────────────
const sisPath = path.join(ROOT, 'components/PageComponents/SectionIndustriesServed/SectionIndustriesServed.tsx');
if (fs.existsSync(sisPath)) {
  let sis = fs.readFileSync(sisPath, 'utf8');
  // try common handyman leftovers
  const industryBlocks = [
    [/property-management|senior-living|small-business|homebuilders|restoration-partners/i, true],
  ];
  // rewrite if needed by full file write from handyman structure
}

// Read current file and rewrite INDUSTRIES array if present
{
  let sis = fs.readFileSync(sisPath, 'utf8');
  // Replace common link patterns
  sis = sis
    .replace(/\/industries\/senior-living/g, '/industries/property-management')
    .replace(/\/industries\/small-business/g, '/industries/restoration-partners');
  fs.writeFileSync(sisPath, sis);
}

// Force rewrite industries data via regex-friendly full component scan
const sisContent = fs.readFileSync(sisPath, 'utf8');
console.log('SectionIndustriesServed has homebuilders?', sisContent.includes('homebuilders'));
console.log('SectionIndustriesServed snippet:', sisContent.match(/href:.*industries[^'"]+/g)?.slice(0, 6));

// ── Blogs ───────────────────────────────────────────────────────────────────
const blogs = [
  {
    slug: 'texture-matching-after-patch',
    title: 'Texture Matching After a Drywall Patch (Waco Homes)',
    desc: 'A perfect patch still fails if the texture does not match. Learn how pros blend orange peel, knockdown, and skip trowel so repairs disappear after paint.',
    category: 'Repairs',
    date: 'July 3, 2026',
    readTime: 7,
    image: '/pages/blogs/energy-savings.jpg',
    alt: 'Drywall texture matching after patch work in Central Texas',
    intro: 'A tight drywall patch can still scream "repair" if the texture does not match the rest of the wall. LevelWall Drywall helps Waco, Temple, and Killeen homeowners blend orange peel, knockdown, and skip trowel so patches disappear under primer and paint.',
    cards: [
      ['Cost control', 'Matching texture once is cheaper than repainting a whole wall after a bad blend.'],
      ['Skill fit', 'Orange peel, knockdown, and smooth skim are everyday drywall work — not a specialty mystery.'],
      ['Lighting matters', 'Critical light and higher sheens show seams; Level 5 skim may be required first.'],
      ['Scope first', 'A written quote covering patch, blend, and paint readiness prevents surprise add-ons.'],
      ['Texas realities', 'Humidity and AC cycles make thin patches flash if not primed correctly.'],
      ['Warranty matters', 'Ask for workmanship coverage — LevelWall includes Smooth Finish Guarantee · 2-Year Workmanship.'],
    ],
    tip: 'Pro Tip: Photograph the existing texture in natural light and send it with your estimate request. Matching from a phone photo is faster and more accurate.',
    tips: [
      'Identify the texture type before anyone muds the patch',
      'Prime the repair before texture when the mud is porous',
      'Test a small blend area beside the patch first',
      'Use the same spray tip and pressure for orange peel',
      'Prime again before final paint to hide flash',
    ],
    ctaTitle: 'Need a Seamless Texture Match?',
    ctaBody: 'Get a free estimate from LevelWall Drywall — pro crews serving Waco and Central Texas.',
  },
  {
    slug: 'popcorn-ceiling-removal-cost',
    title: 'Popcorn Ceiling Removal Cost in Central Texas',
    desc: 'What drives popcorn ceiling removal pricing — square footage, asbestos testing, skim-coat level, and paint readiness — plus realistic ranges for Waco homes.',
    category: 'Guides',
    date: 'June 24, 2026',
    readTime: 6,
    image: '/pages/blogs/maintenance-plan.jpg',
    alt: 'Popcorn ceiling removal cost guide for Central Texas',
    intro: 'Popcorn ceilings date a room instantly. Removal pricing in Central Texas depends on square footage, ceiling height, testing for older homes, and how smooth you want the finish. LevelWall Drywall scrapes, skims, and leaves ceilings paint-ready.',
    cards: [
      ['Square footage', 'Bigger rooms cost more, but multi-room packages often lower the per-foot price.'],
      ['Ceiling height', 'Two-story and vaulted ceilings add protection and ladder time.'],
      ['Testing older homes', 'Pre-1980s texture may need asbestos testing before scrape — budget time and cost.'],
      ['Skim level', 'A true smooth ceiling needs skim and sand; light orange peel can be less prep.'],
      ['Cleanup', 'Debris, plastic, and dust control are real line items — not free extras.'],
      ['Paint readiness', 'Ask whether primer is included or left for your painter.'],
    ],
    tip: 'Pro Tip: Bundle hallway and living room removal in one visit. Moving containment once is cheaper than two separate mobilizations.',
    tips: [
      'Measure room length and width for a ballpark estimate',
      'Note ceiling height and fixtures that must be protected',
      'Ask about testing if the home is older',
      'Decide smooth vs light texture before work starts',
      'Plan paint for soon after skim so ceilings stay protected',
    ],
    ctaTitle: 'Want a Popcorn Removal Quote?',
    ctaBody: 'LevelWall Drywall serves Waco and Central Texas with upfront pricing and a Smooth Finish Guarantee.',
  },
  {
    slug: 'drywall-vs-plaster-repairs',
    title: 'Drywall vs Plaster Repairs: What Homeowners Should Know',
    desc: 'Older Waco homes may have plaster. Here is how repair methods differ from modern drywall, when to call a specialty crew, and how to budget the job.',
    category: 'Education',
    date: 'June 15, 2026',
    readTime: 8,
    image: '/pages/blogs/ac-replacement.jpg',
    alt: 'Drywall versus plaster repair comparison for Texas homes',
    intro: 'Many Central Texas homes mix modern drywall with older plaster. Repair methods are not identical — and using drywall patches on failing plaster can create new cracks. LevelWall Drywall helps homeowners choose the right approach for each wall.',
    cards: [
      ['Material difference', 'Drywall is gypsum board; plaster is a multi-coat system over lath or board.'],
      ['Crack patterns', 'Plaster often spider-cracks; drywall shows seams and fastener pops.'],
      ['Patch strategy', 'Small plaster cracks may float; large failures may need board replacement.'],
      ['Texture & paint', 'Both systems need proper prep so paint does not flash at the repair.'],
      ['Cost drivers', 'Access, finish level, and whether lath is loose change the budget fast.'],
      ['When to call pros', 'Ceiling sag, soft spots, or widespread cracks deserve a pro inspection.'],
    ],
    tip: 'Pro Tip: Press gently on the wall. Soft, hollow, or crumbling areas are not a simple mud job — get a scope before painting over them.',
    tips: [
      'Identify whether the wall is drywall or plaster before patching',
      'Do not ignore ceiling cracks after a roof or plumbing leak',
      'Match finish level to lighting in the room',
      'Budget texture and primer as part of the repair',
      'Ask for a written scope and workmanship warranty',
    ],
    ctaTitle: 'Not Sure If It Is Drywall or Plaster?',
    ctaBody: 'LevelWall can inspect and quote the right repair — call (254) 970-1818 or request an estimate online.',
  },
];

for (const b of blogs) {
  const cards = b.cards.map(([t, body], i) => {
    const icons = ['faDollarSign', 'faWrench', 'faShieldHalved', 'faClipboardCheck', 'faHouseChimney', 'faCheck'];
    return `      { icon: ${icons[i]}, title: ${JSON.stringify(t)}, body: ${JSON.stringify(body)} },`;
  }).join('\n');
  const tips = b.tips.map(t => `      ${JSON.stringify(t)},`).join('\n');

  w(`src/app/blogs/${b.slug}/page.tsx`, `
'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faWrench, faShieldHalved, faDollarSign, faClipboardCheck, faHouseChimney, faCheck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: ${JSON.stringify(b.intro)},
  },
  {
    type: 'cards',
    heading: 'Practical Takeaways',
    cards: [
${cards}
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: ${JSON.stringify(b.tip)},
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
${tips}
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title={${JSON.stringify(b.title)}}
        description={${JSON.stringify(b.desc)}}
        imageSrc="${b.image}"
        imageAlt={${JSON.stringify(b.alt)}}
        category="${b.category}"
        date="${b.date}"
        readTime={${b.readTime}}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title={${JSON.stringify(b.ctaTitle)}}
        body={${JSON.stringify(b.ctaBody)}}
        buttonText="Request a Free Estimate"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="${b.slug}-blog" />
    </>
  );
}
`);

  w(`src/app/blogs/${b.slug}/layout.tsx`, `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";
const url = BASE_URL + "/blogs/${b.slug}";

export const metadata: Metadata = {
  title: ${JSON.stringify(b.title + ' | LevelWall Drywall')},
  description: ${JSON.stringify(b.desc)},
  alternates: { canonical: url },
  openGraph: {
    title: ${JSON.stringify(b.title)},
    description: ${JSON.stringify(b.desc)},
    url,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`);
}

// ── About ───────────────────────────────────────────────────────────────────
w('src/app/about/page.tsx', `// LevelWall Drywall — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import AboutHero       from "#/PageComponents/AboutHero/AboutHero";
import AboutStory      from "#/PageComponents/AboutStory/AboutStory";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faHammer,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2009",
      description: "LevelWall was founded in Waco by Mitch Rowan. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust in Your Home",
      description: "Every pro on our team is trained for hang, tape, texture, and repair — bonded and insured. Containment, clean workspace, no mess left behind.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a full re-hang when a clean patch will do. Our reputation is built on straight talk — and 17 years of repeat customers prove it works.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 5000, label: "Rooms finished across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",           suffix: "%", duration: 2 },
    { icon: faClock,     value: 17,   label: "Years serving Central Texas families", suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — share photos and preferred timing.", icon: faClipboardCheck },
    { number: 2, title: "Scope Honestly", description: "A LevelWall pro confirms hang vs patch and explains options in plain English.", icon: faShieldHalved },
    { number: 3, title: "Upfront Quote", description: "Written price before any work starts. You decide — zero pressure.", icon: faHammer },
    { number: 4, title: "Finish & Guarantee", description: "Clean job site and Smooth Finish Guarantee · 2-Year Workmanship.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <AboutHero cityName="Waco" />
      <AboutStory cityName="Waco" />

      <SectionIntro
        title="About LevelWall Drywall"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2009. Level walls and matched textures at fair prices for the families and businesses we've called neighbors for 17 years."
      />

      <TrustBar headline="5,000+ Central Texas rooms finished — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <CTABanner
        headline="Ready to Work With a Local Crew You Can Trust?"
        subline="Call (254) 970-1818 or request a free estimate online."
        primaryText="Call (254) 970-1818"
        primaryLink="tel:+12549701818"
        secondaryText="Free Estimate"
        secondaryLink="/contact"
      />
    </main>
  );
}
`);

w('src/app/about/layout.tsx', `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";

export const metadata: Metadata = {
  title: "About LevelWall Drywall — Waco TX Drywall Company Since 2009",
  description:
    "Meet the LevelWall Drywall team. Locally owned and operated in Waco, Texas since 2009. Pro drywall contractors, bonded & insured, honest pricing, and a Smooth Finish Guarantee · 2-Year Workmanship.",
  keywords: [
    "about LevelWall Drywall",
    "drywall company Waco TX",
    "Mitch Rowan drywall",
    "Central Texas drywall contractor",
  ],
  alternates: { canonical: \`\${BASE_URL}/about\` },
  openGraph: {
    title: "About LevelWall Drywall — Waco TX Since 2009",
    description: "Locally owned drywall company in Waco — hang, tape, texture, and repair since 2009.",
    url: \`\${BASE_URL}/about\`,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`);

// ── Contact ─────────────────────────────────────────────────────────────────
w('src/app/contact/layout.tsx', `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";

export const metadata: Metadata = {
  title: "Contact LevelWall Drywall | Schedule Service in Waco & Central Texas",
  description:
    "Contact LevelWall Drywall to schedule drywall hanging, taping, texture matching, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 970-1818.",
  keywords: [
    "contact LevelWall Drywall",
    "drywall estimate Waco",
    "schedule drywall repair",
    "LevelWall contact",
  ],
  alternates: { canonical: \`\${BASE_URL}/contact\` },
  openGraph: {
    title: "Contact LevelWall Drywall | Waco & Central Texas",
    description: "Schedule hang, tape, texture, or patch service. Call (254) 970-1818.",
    url: \`\${BASE_URL}/contact\`,
    siteName: "LevelWall Drywall",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`);

// ── Service areas ───────────────────────────────────────────────────────────
w('src/app/service-areas/layout.tsx', `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levelwalldrywall.com";

export const metadata: Metadata = {
  title: "Service Areas | LevelWall Drywall — Waco & Central Texas",
  description:
    "LevelWall Drywall serves Waco, Hewitt, Woodway, Temple, Killeen, McGregor, China Spring, Bellmead, and surrounding Central Texas communities.",
  alternates: { canonical: \`\${BASE_URL}/service-areas\` },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`);

console.log('gen-pages-2 complete');

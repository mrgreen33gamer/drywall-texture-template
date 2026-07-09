// LevelWall Drywall — Popcorn Ceiling Removal Service Page
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
    { icon: faSearch, title: "Honest Assessment", description: "We discuss testing needs for older textures and realistic timelines." },
    { icon: faFileContract, title: "Written Quote", description: "Square footage, skim level, and cleanup included upfront." },
    { icon: faCheckCircle, title: "Contained Scrape", description: "Plastic protection and thorough cleanup of texture debris." },
    { icon: faShieldHalved, title: "Smooth Finish", description: "Skim and sand so ceilings are ready for primer and paint." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Modern Finish", description: "Popcorn is dated — smooth ceilings update the whole room." },
    { icon: faWrench, title: "Dust Discipline", description: "Containment and cleanup designed for lived-in homes." },
    { icon: faShieldHalved, title: "Bonded and Insured", description: "Insured crews for multi-room and whole-home jobs." },
  ];

  const processSteps = [
    { number: 1, title: "Protect & Prep", description: "Cover floors, fixtures, and walls as needed.", icon: faHeadset },
    { number: 2, title: "Scrape", description: "Remove popcorn texture carefully and collect debris.", icon: faSearch },
    { number: 3, title: "Skim & Sand", description: "Level the ceiling for a smooth modern surface.", icon: faFileContract },
    { number: 4, title: "Handoff", description: "Paint-ready ceiling walkthrough.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 5000, label: "Rooms finished in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 17, label: "Years serving Waco locals", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling for popcorn removal.", badge: "Home Base" },
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
    { question: "How much does popcorn ceiling removal cost?", answer: "Driven by square footage, ceiling height, and skim level. Call (254) 970-1818 for a free estimate." },
    { question: "Do I need asbestos testing?", answer: "Homes built before the 1980s may need testing before scrape. We will advise when it is prudent." },
    { question: "Can you retexture instead of smooth?", answer: "Yes — smooth is most popular, but we can apply a light orange peel if preferred." },
    { question: "Are you insured?", answer: "Yes — bonded and insured." },
    { question: "Do you warranty the work?", answer: "Yes — 2-Year Workmanship." },
    { question: "What areas do you serve?", answer: "Waco, Temple, Killeen, and surrounding towns." },
  ];

  const crossServices = [
    { icon: faWrench, title: "Taping & Finishing", body: "Skim coats for Level 5 smoothness.", link: "/services/taping-finishing" },
    { icon: faWrench, title: "Texture Matching", body: "Light texture options after scrape.", link: "/services/texture-matching" },
    { icon: faWrench, title: "Patch & Repair", body: "Fix ceiling cracks before or after removal.", link: "/services/patch-repair" },
    { icon: faWrench, title: "Drywall Hanging", body: "Replace damaged ceiling board if needed.", link: "/services/drywall-hanging" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Popcorn Ceiling Removal" },
      ]} />
      <SectionIntro title="Popcorn Ceiling Removal in Waco, TX" subtitle={"Safe scrape, skim, and smooth finish for a modern look — paint-ready ceilings when we leave. Upfront quotes and a Smooth Finish Guarantee · 2-Year Workmanship."} />
      <TrustBar headline="5,000+ Central Texas rooms — pro drywall crews, bonded and insured" />
      <div className={styles.section}><WhatToExpect expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose LevelWall" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/popcorn-removal" title="Popcorn Ceiling Removal Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Popcorn Ceiling Removal FAQs" /></div>
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
        <Variant4 title="Schedule Popcorn Ceiling Removal" cityName="Waco" slug="services/popcorn-removal" spot="popcorn-removal-page-form" formVariant={2} />
      </div>
    </main>
  );
}

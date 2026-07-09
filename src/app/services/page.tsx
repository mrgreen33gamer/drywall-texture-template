// LevelWall Drywall — Services Overview
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

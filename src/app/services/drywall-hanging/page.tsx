// LevelWall Drywall — Drywall Hanging Service Page
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
    { icon: faSearch, title: "Clear Scope First", description: "We measure board counts, ceiling height, and openings before quoting — no vague estimates." },
    { icon: faFileContract, title: "Written Quote", description: "Labor and materials in the number. You approve before we hang a single sheet." },
    { icon: faCheckCircle, title: "Clean Professional Hang", description: "Screws on pattern, seams staggered, corners true — ready for tape and finish." },
    { icon: faShieldHalved, title: "2-Year Workmanship", description: "Every hang is backed by our Smooth Finish Guarantee · 2-Year Workmanship." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Efficient Scheduling", description: "Remodel hangs booked quickly. New construction coordinated with your GC schedule." },
    { icon: faWrench, title: "Pro Hangers", description: "Crews that hang level, plumb, and tight so finish coats go on right." },
    { icon: faShieldHalved, title: "Bonded and Insured", description: "Fully insured on every job. Documentation on request." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Share plans, photos, or room dimensions — we confirm fit and timing.", icon: faHeadset },
    { number: 2, title: "Quote", description: "You get an upfront price for hang (and tape if bundled).", icon: faSearch },
    { number: 3, title: "Hang Day", description: "We protect floors, hang board, and leave the site broom-clean.", icon: faFileContract },
    { number: 4, title: "Walkthrough", description: "We review corners and seams before tape or handoff to finish.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 5000, label: "Rooms finished in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 17, label: "Years serving Waco locals", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling for hanging.", badge: "Home Base" },
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
    { question: "What does drywall hanging include?", answer: "Hanging gypsum board on walls and ceilings, fastening to code pattern, and preparing seams for tape. Taping and texture can be bundled." },
    { question: "How much does drywall hanging cost in Waco?", answer: "Depends on square footage, ceiling height, and access. Call (254) 970-1818 for a free estimate." },
    { question: "Do you hang moisture-resistant board?", answer: "Yes — green board and appropriate products for baths and wet areas when specified." },
    { question: "Are you insured?", answer: "Yes — pro drywall contractors who are bonded and insured." },
    { question: "Do you warranty the work?", answer: "Yes — Smooth Finish Guarantee · 2-Year Workmanship on completed labor." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
  ];

  const crossServices = [
    { icon: faWrench, title: "Taping & Finishing", body: "Tape, mud, and sand to paint-ready levels.", link: "/services/taping-finishing" },
    { icon: faWrench, title: "Texture Matching", body: "Match orange peel, knockdown, and more.", link: "/services/texture-matching" },
    { icon: faWrench, title: "Water Damage Drywall", body: "Replace board after leaks and storms.", link: "/services/water-damage-drywall" },
    { icon: faWrench, title: "Patch & Repair", body: "Smaller fixes when a full hang is not needed.", link: "/services/patch-repair" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Drywall Hanging" },
      ]} />
      <SectionIntro title="Drywall Hanging in Waco, TX" subtitle={"Straight hangs, tight joints, and square corners for new construction, remodels, and room additions across Central Texas. Upfront quotes and a Smooth Finish Guarantee · 2-Year Workmanship."} />
      <TrustBar headline="5,000+ Central Texas rooms — pro drywall crews, bonded and insured" />
      <div className={styles.section}><WhatToExpect expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose LevelWall" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/drywall-hanging" title="Drywall Hanging Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Drywall Hanging FAQs" /></div>
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
        <Variant4 title="Schedule Drywall Hanging" cityName="Waco" slug="services/drywall-hanging" spot="drywall-hanging-page-form" formVariant={2} />
      </div>
    </main>
  );
}

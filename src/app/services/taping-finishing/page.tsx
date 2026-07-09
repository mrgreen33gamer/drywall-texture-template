// LevelWall Drywall — Taping & Finishing Service Page
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
    { icon: faSearch, title: "Finish Level Guidance", description: "We recommend Level 4 or 5 based on lighting and paint sheen — no overselling." },
    { icon: faFileContract, title: "Written Quote", description: "Coats, sanding, and materials included in an upfront price." },
    { icon: faCheckCircle, title: "Dust Control", description: "Containment and cleanup so the home stays livable between coats." },
    { icon: faShieldHalved, title: "2-Year Workmanship", description: "Seams and finish covered under our Smooth Finish Guarantee." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Multi-Coat Process", description: "Proper dry times between coats — no rushing that shows after paint." },
    { icon: faWrench, title: "Paint-Ready Surfaces", description: "We leave walls ready for primer and paint with seams that disappear." },
    { icon: faShieldHalved, title: "Bonded and Insured", description: "Fully insured finish crews on residential and light commercial work." },
  ];

  const processSteps = [
    { number: 1, title: "Inspect", description: "We check hung board, fasteners, and gaps before tape.", icon: faHeadset },
    { number: 2, title: "Tape & Coat", description: "Paper or mesh tape with multiple mud coats as needed.", icon: faSearch },
    { number: 3, title: "Sand & Check", description: "Feather edges under critical light so seams do not flash.", icon: faFileContract },
    { number: 4, title: "Handoff", description: "Paint-ready walkthrough with finish level confirmed.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 5000, label: "Rooms finished in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 17, label: "Years serving Waco locals", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling for taping.", badge: "Home Base" },
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
    { question: "What is Level 4 vs Level 5 finish?", answer: "Level 4 is standard for most walls with flat or eggshell paint. Level 5 adds a skim coat for critical lighting and higher sheens." },
    { question: "How long does taping take?", answer: "Most rooms need several days for coats and dry times. We schedule around that honestly." },
    { question: "Can you finish board hung by others?", answer: "Yes, after we inspect fastener pattern and board condition." },
    { question: "Are you insured?", answer: "Yes — bonded and insured." },
    { question: "Do you warranty finishing?", answer: "Yes — 2-Year Workmanship on our labor." },
    { question: "What areas do you serve?", answer: "Waco and Central Texas within about 60 miles." },
  ];

  const crossServices = [
    { icon: faWrench, title: "Drywall Hanging", body: "Board hung plumb and tight before finish.", link: "/services/drywall-hanging" },
    { icon: faWrench, title: "Texture Matching", body: "Texture after finish coats.", link: "/services/texture-matching" },
    { icon: faWrench, title: "Popcorn Ceiling Removal", body: "Smooth skim after popcorn scrape.", link: "/services/popcorn-removal" },
    { icon: faWrench, title: "Patch & Repair", body: "Localized tape and float repairs.", link: "/services/patch-repair" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Taping & Finishing" },
      ]} />
      <SectionIntro title="Taping & Finishing in Waco, TX" subtitle={"Tape, mud, and sand through Level 4 or Level 5 so walls and ceilings take paint without telegraphing seams. Upfront quotes and a Smooth Finish Guarantee · 2-Year Workmanship."} />
      <TrustBar headline="5,000+ Central Texas rooms — pro drywall crews, bonded and insured" />
      <div className={styles.section}><WhatToExpect expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose LevelWall" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/taping-finishing" title="Taping & Finishing Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Taping & Finishing FAQs" /></div>
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
        <Variant4 title="Schedule Taping & Finishing" cityName="Waco" slug="services/taping-finishing" spot="taping-finishing-page-form" formVariant={2} />
      </div>
    </main>
  );
}

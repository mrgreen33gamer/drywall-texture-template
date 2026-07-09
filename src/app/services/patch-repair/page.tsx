// LevelWall Drywall — Patch & Repair Service Page
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
    { icon: faSearch, title: "Right-Sized Repair", description: "Patch when a patch is enough — full board only when needed." },
    { icon: faFileContract, title: "Written Quote", description: "Upfront price for each patch or batched list." },
    { icon: faCheckCircle, title: "Texture Match", description: "Blend so the fix disappears under paint." },
    { icon: faShieldHalved, title: "2-Year Workmanship", description: "Repairs covered under our Smooth Finish Guarantee." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Fast Scheduling", description: "Small patches often same-week; sometimes same-day." },
    { icon: faWrench, title: "Clean Work Habits", description: "Drop cloths, dust control, and debris hauled." },
    { icon: faShieldHalved, title: "Bonded and Insured", description: "Trusted in occupied homes and rentals." },
  ];

  const processSteps = [
    { number: 1, title: "Scope", description: "Photos or on-site look at holes, cracks, and beads.", icon: faHeadset },
    { number: 2, title: "Quote", description: "Batch multiple fixes for better value when possible.", icon: faSearch },
    { number: 3, title: "Repair", description: "Cut, patch, tape, sand, and texture match.", icon: faFileContract },
    { number: 4, title: "Walkthrough", description: "Paint-ready patches before we leave.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 5000, label: "Rooms finished in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 17, label: "Years serving Waco locals", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling for patch.", badge: "Home Base" },
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
    { question: "What size holes can you patch?", answer: "From picture-hanger nicks to large cut-outs. Very large areas may become a partial hang." },
    { question: "How much do drywall patches cost in Waco?", answer: "Small patches often start in the low hundreds depending on texture. Call (254) 970-1818." },
    { question: "Do you match texture on patches?", answer: "Yes — that is standard on every repair." },
    { question: "Are you insured?", answer: "Yes — bonded and insured." },
    { question: "Do you warranty patches?", answer: "Yes — 2-Year Workmanship." },
    { question: "What areas do you serve?", answer: "Waco and Central Texas within about 60 miles." },
  ];

  const crossServices = [
    { icon: faWrench, title: "Texture Matching", body: "Full-room texture after large repairs.", link: "/services/texture-matching" },
    { icon: faWrench, title: "Taping & Finishing", body: "Float and finish for bigger areas.", link: "/services/taping-finishing" },
    { icon: faWrench, title: "Water Damage Drywall", body: "When moisture caused the damage.", link: "/services/water-damage-drywall" },
    { icon: faWrench, title: "Drywall Hanging", body: "When replacement board is the better fix.", link: "/services/drywall-hanging" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Patch & Repair" },
      ]} />
      <SectionIntro title="Patch & Repair in Waco, TX" subtitle={"Holes, cracks, corner bead, and nail pops fixed cleanly with texture match and 2-year workmanship. Upfront quotes and a Smooth Finish Guarantee · 2-Year Workmanship."} />
      <TrustBar headline="5,000+ Central Texas rooms — pro drywall crews, bonded and insured" />
      <div className={styles.section}><WhatToExpect expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose LevelWall" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/patch-repair" title="Patch & Repair Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Patch & Repair FAQs" /></div>
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
        <Variant4 title="Schedule Patch & Repair" cityName="Waco" slug="services/patch-repair" spot="patch-repair-page-form" formVariant={2} />
      </div>
    </main>
  );
}

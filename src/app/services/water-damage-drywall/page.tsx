// LevelWall Drywall — Water Damage Drywall Service Page
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
    { icon: faSearch, title: "Damage Assessment", description: "We identify soft board, mold-risk cavities, and what must be replaced." },
    { icon: faFileContract, title: "Written Scope", description: "Demo, hang, tape, and texture priced upfront for you or your adjuster." },
    { icon: faCheckCircle, title: "Dry & Replace", description: "Board only goes back when the cavity is dry and ready." },
    { icon: faShieldHalved, title: "2-Year Workmanship", description: "Finish labor covered under our Smooth Finish Guarantee." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Insurance Experience", description: "Clear photos and scopes that help claims move faster." },
    { icon: faWrench, title: "Full Restore Path", description: "Demo through texture match — one crew, one warranty." },
    { icon: faShieldHalved, title: "Bonded and Insured", description: "Fully insured restoration support for homes and light commercial." },
  ];

  const processSteps = [
    { number: 1, title: "Inspect & Photo", description: "Document damage for your records or insurer.", icon: faHeadset },
    { number: 2, title: "Demo Soft Board", description: "Remove damaged drywall and prep the cavity.", icon: faSearch },
    { number: 3, title: "Hang & Finish", description: "New board, tape, texture match to surrounding walls.", icon: faFileContract },
    { number: 4, title: "Final Review", description: "Walkthrough with paint-ready surfaces.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 5000, label: "Rooms finished in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 17, label: "Years serving Waco locals", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling for water damage.", badge: "Home Base" },
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
    { question: "Do you work with insurance claims?", answer: "Yes — we provide photos, scopes, and invoices suitable for most residential claims." },
    { question: "How soon after a leak can you hang board?", answer: "After the source is fixed and the cavity is dry. We will not trap moisture." },
    { question: "Can you match the old texture?", answer: "Yes — part of every water-damage restore." },
    { question: "Are you insured?", answer: "Yes — bonded and insured." },
    { question: "Do you warranty the repair?", answer: "Yes — 2-Year Workmanship on our labor." },
    { question: "What areas do you serve?", answer: "Waco and Central Texas within about 60 miles." },
  ];

  const crossServices = [
    { icon: faWrench, title: "Drywall Hanging", body: "Full hangs when damage is extensive.", link: "/services/drywall-hanging" },
    { icon: faWrench, title: "Taping & Finishing", body: "Multi-coat finish after replacement.", link: "/services/taping-finishing" },
    { icon: faWrench, title: "Texture Matching", body: "Blend new board into existing texture.", link: "/services/texture-matching" },
    { icon: faWrench, title: "Patch & Repair", body: "Smaller wet spots that do not need full demo.", link: "/services/patch-repair" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Water Damage Drywall" },
      ]} />
      <SectionIntro title="Water Damage Drywall in Waco, TX" subtitle={"Cut-out, dry cavity, hang, tape, and finish after leaks or storms — with insurance-friendly documentation. Upfront quotes and a Smooth Finish Guarantee · 2-Year Workmanship."} />
      <TrustBar headline="5,000+ Central Texas rooms — pro drywall crews, bonded and insured" />
      <div className={styles.section}><WhatToExpect expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose LevelWall" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/water-damage-drywall" title="Water Damage Drywall Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Water Damage Drywall FAQs" /></div>
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
        <Variant4 title="Schedule Water Damage Drywall" cityName="Waco" slug="services/water-damage-drywall" spot="water-damage-drywall-page-form" formVariant={2} />
      </div>
    </main>
  );
}

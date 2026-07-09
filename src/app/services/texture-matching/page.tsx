// LevelWall Drywall — Texture Matching Service Page
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
    { icon: faSearch, title: "Texture Sample First", description: "We test blend beside the repair before full spray or trowel." },
    { icon: faFileContract, title: "Written Quote", description: "Upfront price for match type and square footage." },
    { icon: faCheckCircle, title: "Blend Into Existing", description: "Feather edges so new texture does not read as a square patch." },
    { icon: faShieldHalved, title: "2-Year Workmanship", description: "Texture work covered under our Smooth Finish Guarantee." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Common Texas Textures", description: "Daily work with orange peel, knockdown, and smooth skim." },
    { icon: faWrench, title: "Paint-Day Ready", description: "We leave surfaces ready for primer so color does not flash." },
    { icon: faShieldHalved, title: "Bonded and Insured", description: "Insured crews in occupied homes and job sites." },
  ];

  const processSteps = [
    { number: 1, title: "Identify Texture", description: "We match the existing pattern and sheen expectations.", icon: faHeadset },
    { number: 2, title: "Prep", description: "Prime patches and mask adjacent surfaces.", icon: faSearch },
    { number: 3, title: "Apply & Blend", description: "Spray or hand texture feathered into the field.", icon: faFileContract },
    { number: 4, title: "Review", description: "Walkthrough under room lighting before paint.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 5000, label: "Rooms finished in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 17, label: "Years serving Waco locals", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling for texture.", badge: "Home Base" },
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
    { question: "Can you match knockdown texture?", answer: "Yes — knockdown, orange peel, skip trowel, and smooth are standard." },
    { question: "Will the patch show after paint?", answer: "Proper blend plus primer greatly reduces flash. Critical light may need Level 5 skim first." },
    { question: "Do you texture full rooms?", answer: "Yes — new rooms and after popcorn removal." },
    { question: "Are you insured?", answer: "Yes — bonded and insured." },
    { question: "Do you warranty texture?", answer: "Yes — 2-Year Workmanship on our labor." },
    { question: "What areas do you serve?", answer: "Waco, Temple, Killeen, and surrounding Central Texas." },
  ];

  const crossServices = [
    { icon: faWrench, title: "Patch & Repair", body: "Repair first, then match texture.", link: "/services/patch-repair" },
    { icon: faWrench, title: "Taping & Finishing", body: "Level finishes before texture.", link: "/services/taping-finishing" },
    { icon: faWrench, title: "Popcorn Ceiling Removal", body: "Smooth ceilings after scrape.", link: "/services/popcorn-removal" },
    { icon: faWrench, title: "Water Damage Drywall", body: "Replace and retexture after leaks.", link: "/services/water-damage-drywall" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Texture Matching" },
      ]} />
      <SectionIntro title="Texture Matching in Waco, TX" subtitle={"Orange peel, knockdown, skip trowel, and smooth — blended so patches and repairs disappear after paint. Upfront quotes and a Smooth Finish Guarantee · 2-Year Workmanship."} />
      <TrustBar headline="5,000+ Central Texas rooms — pro drywall crews, bonded and insured" />
      <div className={styles.section}><WhatToExpect expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose LevelWall" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/texture-matching" title="Texture Matching Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Texture Matching FAQs" /></div>
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
        <Variant4 title="Schedule Texture Matching" cityName="Waco" slug="services/texture-matching" spot="texture-matching-page-form" formVariant={2} />
      </div>
    </main>
  );
}

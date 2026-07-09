// LevelWall Drywall — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faBorderAll, faBrush, faClipboardList, faLayerGroup, faWater, faSprayCan,
  faTrophy, faChartLine, faClock,
  faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faClipboardCheck, faShieldHalved, faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faLayerGroup,
      title: "Drywall Hanging",
      body: "Straight hangs, tight joints, and square corners — new construction, remodels, and room additions.",
      link: "/services/drywall-hanging",
    },
    {
      icon: faBrush,
      title: "Taping & Finishing",
      body: "Tape, mud, and sand through Level 4/5 so walls and ceilings take paint without telegraphing seams.",
      link: "/services/taping-finishing",
    },
    {
      icon: faSprayCan,
      title: "Texture Matching",
      body: "Orange peel, knockdown, skip trowel, and smooth — blended so patches disappear after paint.",
      link: "/services/texture-matching",
    },
    {
      icon: faWater,
      title: "Water Damage Drywall",
      body: "Cut-out, dry cavity, hang, tape, and finish after leaks or storms — insurance-friendly documentation.",
      link: "/services/water-damage-drywall",
    },
    {
      icon: faBorderAll,
      title: "Popcorn Ceiling Removal",
      body: "Safe scrape, skim, and smooth finish for a modern look — paint-ready when we leave.",
      link: "/services/popcorn-removal",
    },
    {
      icon: faClipboardList,
      title: "Patch & Repair",
      body: "Holes, cracks, corner bead, and nail pops fixed cleanly with texture match and 2-year workmanship.",
      link: "/services/patch-repair",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 5000, label: "Rooms finished across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 17,   label: "Years of local drywall experience",    suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",        suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Written Quotes Before We Hang",
      description: "You get a firm price before we start. No hourly billing surprises, no mid-job add-ons.",
    },
    {
      icon: faShieldHalved,
      title: "Pro Drywall Crews Contractors",
      description: "Every crew member is trained for hang, tape, texture, and repair — bonded and insured.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2009",
      description: "We're not a franchise. LevelWall was founded in Waco by Mitch Rowan. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — share photos of the walls or ceiling and preferred timing.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "Scope & Quote",
      description: "We confirm board, tape levels, texture type, and an upfront price before anything starts.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Approve",
      description: "Zero pressure. Approve the written quote and we lock in the hang or repair date.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Finish & Guarantee",
      description: "Clean job site, smooth finish, and our Smooth Finish Guarantee · 2-Year Workmanship.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Scope Guidance",
      description: "We'll tell you what needs full board replacement vs. a clean patch — no overselling.",
    },
    {
      icon: faWrench,
      title: "Clean, Contained Work",
      description: "Plastic containment, floor protection, and dust control. Debris hauled when we leave.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Written Price",
      description: "Written quote before work begins. The number doesn't change when mud coats run long.",
    },
    {
      icon: faStar,
      title: "Smooth Finish Guarantee · 2-Year Workmanship",
      description: "If our finish fails within two years, we make it right. Simple as that.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for hangs, texture, and repairs.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential coverage. On our regular route.",                    badge: "" },
    { town: "Woodway",      benefit: "Regular availability for remodels and popcorn removal.",              badge: "" },
    { town: "Temple",       benefit: "Regular service area — reliable turnaround for Bell County.",         badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",     badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",          badge: "" },
  ];

  const faq = [
    {
      question: "How much does drywall work cost in Waco?",
      answer: "Pricing depends on square footage, finish level, and texture. Small patches often start in the low hundreds; full room hangs and popcorn removal are quoted after a quick scope. Call (254) 970-1818 for a free estimate.",
    },
    {
      question: "Do you offer same-day patch service?",
      answer: "Yes when schedule allows — especially for small holes and corner repairs. Call (254) 970-1818 and we'll give you an honest ETA.",
    },
    {
      question: "What drywall services do you offer?",
      answer: "Drywall hanging, taping & finishing, texture matching, water damage drywall, popcorn ceiling removal, and patch & repair.",
    },
    {
      question: "Are your crews bonded and insured?",
      answer: "Yes — LevelWall Drywall uses pro drywall crews who are bonded and insured. Documentation available on request.",
    },
    {
      question: "Do you offer a warranty?",
      answer: "Yes — our Smooth Finish Guarantee with 2-Year Workmanship covering labor on every job we complete.",
    },
    {
      question: "Can you match existing wall texture?",
      answer: "Yes. Orange peel, knockdown, skip trowel, and smooth finishes are part of everyday work. We test blend before full texture so the repair disappears under paint.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>

      <WelcomePage />

      <TrustBar
        headline="Waco's trusted drywall crew — bonded, and warrantied on every finish"
      />

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Drywall Done Level"
          subheading="From single patches to full hangs — LevelWall handles hang, tape, texture, and repair."
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <WhatToExpect expectations={expectations} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Drywall Service FAQs" />
      </div>

      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>

      <CTABanner
        headline="Ready for a Smooth, Level Finish?"
        subline="Upfront quotes. Pro drywall crews. Call (254) 970-1818."
        primaryText="Call (254) 970-1818"
        primaryLink="tel:+12549701818"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4 title="Request a Free Estimate" cityName="Waco" slug="home" spot="home-form" formVariant={4} />
      </div>

    </main>
  );
}

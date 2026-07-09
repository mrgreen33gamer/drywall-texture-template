"use client";
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
    { icon: faClock, problem: "Schedule slips on finish", consequence: "Late drywall pushes paint, trim, and closing dates." },
    { icon: faTriangleExclamation, problem: "Inconsistent finish quality", consequence: "Callbacks on seams and texture kill punch momentum." },
    { icon: faUsers, problem: "Crew coordination gaps", consequence: "Framers, plumbers, and HVAC leave openings that must hang tight the first time." },
    { icon: faDollarSign, problem: "Change-order chaos", consequence: "Vague board counts and hourly finish work blow production budgets." },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Production-Aware Crews", description: "We plan around inspection windows, trade stacking, and closing dates." },
    { icon: faShieldHalved, title: "Pro Drywall · Bonded & Insured", description: "Documentation ready for GCs and superintendents." },
    { icon: faUsers, title: "Single Point of Contact", description: "One LevelWall lead coordinates multi-lot or multi-phase hang and finish." },
  ];

  const processSteps = [
    { number: 1, title: "Scope Call", description: "Share plans, work orders, access rules, and timeline constraints.", icon: faHeadset },
    { number: 2, title: "Site Walk", description: "We confirm hang, tape, texture, and any specialty boundaries.", icon: faSearch },
    { number: 3, title: "Package Quote", description: "Written pricing by unit, room, or punch list — easy to approve.", icon: faFileContract },
    { number: 4, title: "Execute & Report", description: "Clean completion, photos when requested, and warranty on labor.", icon: faCheckCircle },
  ];

  const faq = [
    { question: "Can you hang and finish production homes?", answer: "Yes — we support production schedules with hang, tape, and texture packages." },
    { question: "Do you coordinate with other trades?", answer: "Yes — we work around MEPs and schedule re-hangs for late openings when needed." },
    { question: "Do you warranty builder work?", answer: "Yes — Smooth Finish Guarantee · 2-Year Workmanship on completed labor." },
    { question: "Can you handle custom homes?", answer: "Yes — Level 4/5 finishes and specialty textures for custom builds." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Homebuilders" },
      ]} />
      <SectionIntro title={"Homebuilders"} subtitle={"Production and custom drywall hanging, taping, and texture for Central Texas homebuilders — on schedule for framing inspection and paint."} />
      <TrustBar headline="Pro drywall partner for Central Texas organizations — bonded & insured" />
      <div className={styles.section}>
        <IndustryPainPoints industry={"Homebuilders"} painPoints={pains} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Homebuilders Choose LevelWall"} />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title={"Homebuilders FAQs"} />
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
        <Variant4 title={"Request a Homebuilder Quote"} cityName="Waco" slug={"industries/homebuilders"} spot={"industry-homebuilders-form"} formVariant={2} />
      </div>
    </main>
  );
}

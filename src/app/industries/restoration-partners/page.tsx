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
    { icon: faClock, problem: "Board delays slow drying goals", consequence: "Late drywall hang extends containment and job cycle times." },
    { icon: faTriangleExclamation, problem: "Texture mismatches", consequence: "Poor blend after restore creates owner callbacks and rework." },
    { icon: faUsers, problem: "Multiple vendors on one claim", consequence: "Too many hands increase communication failures and invoice confusion." },
    { icon: faDollarSign, problem: "Scope gaps", consequence: "Under-documented drywall work weakens adjuster confidence." },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Claim-Friendly Documentation", description: "Photos and scopes that support your estimate and supplements." },
    { icon: faShieldHalved, title: "Pro Drywall · Bonded & Insured", description: "Insured crews ready for occupied and vacant restores." },
    { icon: faUsers, title: "Partner-Ready Communication", description: "One LevelWall lead for your PM — clear ETAs and completion photos." },
  ];

  const processSteps = [
    { number: 1, title: "Scope Call", description: "Share plans, work orders, access rules, and timeline constraints.", icon: faHeadset },
    { number: 2, title: "Site Walk", description: "We confirm hang, tape, texture, and any specialty boundaries.", icon: faSearch },
    { number: 3, title: "Package Quote", description: "Written pricing by unit, room, or punch list — easy to approve.", icon: faFileContract },
    { number: 4, title: "Execute & Report", description: "Clean completion, photos when requested, and warranty on labor.", icon: faCheckCircle },
  ];

  const faq = [
    { question: "Do you work as a sub for restoration companies?", answer: "Yes — we hang, tape, and texture after your dry-out is complete." },
    { question: "Can you match existing texture after water damage?", answer: "Yes — texture matching is standard on restores." },
    { question: "Do you provide documentation for claims?", answer: "Yes — photos, scopes, and invoices suitable for most residential claims." },
    { question: "What is your service area?", answer: "Waco and Central Texas within about 60 miles." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Restoration Partners" },
      ]} />
      <SectionIntro title={"Restoration Partners"} subtitle={"Water and storm drywall cut-out, hang, tape, and texture for restoration companies — reliable board work that supports your claim timeline."} />
      <TrustBar headline="Pro drywall partner for Central Texas organizations — bonded & insured" />
      <div className={styles.section}>
        <IndustryPainPoints industry={"Restoration Partners"} painPoints={pains} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Restoration Partners Choose LevelWall"} />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title={"Restoration Partners FAQs"} />
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
        <Variant4 title={"Request a Restoration Partner Quote"} cityName="Waco" slug={"industries/restoration-partners"} spot={"industry-restoration-partners-form"} formVariant={2} />
      </div>
    </main>
  );
}

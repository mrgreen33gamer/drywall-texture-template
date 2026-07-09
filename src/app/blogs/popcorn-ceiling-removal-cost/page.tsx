
'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faWrench, faShieldHalved, faDollarSign, faClipboardCheck, faHouseChimney, faCheck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Popcorn ceilings date a room instantly. Removal pricing in Central Texas depends on square footage, ceiling height, testing for older homes, and how smooth you want the finish. LevelWall Drywall scrapes, skims, and leaves ceilings paint-ready.",
  },
  {
    type: 'cards',
    heading: 'Practical Takeaways',
    cards: [
      { icon: faDollarSign, title: "Square footage", body: "Bigger rooms cost more, but multi-room packages often lower the per-foot price." },
      { icon: faWrench, title: "Ceiling height", body: "Two-story and vaulted ceilings add protection and ladder time." },
      { icon: faShieldHalved, title: "Testing older homes", body: "Pre-1980s texture may need asbestos testing before scrape — budget time and cost." },
      { icon: faClipboardCheck, title: "Skim level", body: "A true smooth ceiling needs skim and sand; light orange peel can be less prep." },
      { icon: faHouseChimney, title: "Cleanup", body: "Debris, plastic, and dust control are real line items — not free extras." },
      { icon: faCheck, title: "Paint readiness", body: "Ask whether primer is included or left for your painter." },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Bundle hallway and living room removal in one visit. Moving containment once is cheaper than two separate mobilizations.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      "Measure room length and width for a ballpark estimate",
      "Note ceiling height and fixtures that must be protected",
      "Ask about testing if the home is older",
      "Decide smooth vs light texture before work starts",
      "Plan paint for soon after skim so ceilings stay protected",
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title={"Popcorn Ceiling Removal Cost in Central Texas"}
        description={"What drives popcorn ceiling removal pricing — square footage, asbestos testing, skim-coat level, and paint readiness — plus realistic ranges for Waco homes."}
        imageSrc="/pages/blogs/maintenance-plan.jpg"
        imageAlt={"Popcorn ceiling removal cost guide for Central Texas"}
        category="Guides"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title={"Want a Popcorn Removal Quote?"}
        body={"LevelWall Drywall serves Waco and Central Texas with upfront pricing and a Smooth Finish Guarantee."}
        buttonText="Request a Free Estimate"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="popcorn-ceiling-removal-cost-blog" />
    </>
  );
}

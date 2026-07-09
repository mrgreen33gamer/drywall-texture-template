
'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faWrench, faShieldHalved, faDollarSign, faClipboardCheck, faHouseChimney, faCheck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "A tight drywall patch can still scream \"repair\" if the texture does not match the rest of the wall. LevelWall Drywall helps Waco, Temple, and Killeen homeowners blend orange peel, knockdown, and skip trowel so patches disappear under primer and paint.",
  },
  {
    type: 'cards',
    heading: 'Practical Takeaways',
    cards: [
      { icon: faDollarSign, title: "Cost control", body: "Matching texture once is cheaper than repainting a whole wall after a bad blend." },
      { icon: faWrench, title: "Skill fit", body: "Orange peel, knockdown, and smooth skim are everyday drywall work — not a specialty mystery." },
      { icon: faShieldHalved, title: "Lighting matters", body: "Critical light and higher sheens show seams; Level 5 skim may be required first." },
      { icon: faClipboardCheck, title: "Scope first", body: "A written quote covering patch, blend, and paint readiness prevents surprise add-ons." },
      { icon: faHouseChimney, title: "Texas realities", body: "Humidity and AC cycles make thin patches flash if not primed correctly." },
      { icon: faCheck, title: "Warranty matters", body: "Ask for workmanship coverage — LevelWall includes Smooth Finish Guarantee · 2-Year Workmanship." },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Photograph the existing texture in natural light and send it with your estimate request. Matching from a phone photo is faster and more accurate.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      "Identify the texture type before anyone muds the patch",
      "Prime the repair before texture when the mud is porous",
      "Test a small blend area beside the patch first",
      "Use the same spray tip and pressure for orange peel",
      "Prime again before final paint to hide flash",
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title={"Texture Matching After a Drywall Patch (Waco Homes)"}
        description={"A perfect patch still fails if the texture does not match. Learn how pros blend orange peel, knockdown, and skip trowel so repairs disappear after paint."}
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt={"Drywall texture matching after patch work in Central Texas"}
        category="Repairs"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title={"Need a Seamless Texture Match?"}
        body={"Get a free estimate from LevelWall Drywall — pro crews serving Waco and Central Texas."}
        buttonText="Request a Free Estimate"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="texture-matching-after-patch-blog" />
    </>
  );
}

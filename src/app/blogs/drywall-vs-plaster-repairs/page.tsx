
'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faWrench, faShieldHalved, faDollarSign, faClipboardCheck, faHouseChimney, faCheck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Many Central Texas homes mix modern drywall with older plaster. Repair methods are not identical — and using drywall patches on failing plaster can create new cracks. LevelWall Drywall helps homeowners choose the right approach for each wall.",
  },
  {
    type: 'cards',
    heading: 'Practical Takeaways',
    cards: [
      { icon: faDollarSign, title: "Material difference", body: "Drywall is gypsum board; plaster is a multi-coat system over lath or board." },
      { icon: faWrench, title: "Crack patterns", body: "Plaster often spider-cracks; drywall shows seams and fastener pops." },
      { icon: faShieldHalved, title: "Patch strategy", body: "Small plaster cracks may float; large failures may need board replacement." },
      { icon: faClipboardCheck, title: "Texture & paint", body: "Both systems need proper prep so paint does not flash at the repair." },
      { icon: faHouseChimney, title: "Cost drivers", body: "Access, finish level, and whether lath is loose change the budget fast." },
      { icon: faCheck, title: "When to call pros", body: "Ceiling sag, soft spots, or widespread cracks deserve a pro inspection." },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Press gently on the wall. Soft, hollow, or crumbling areas are not a simple mud job — get a scope before painting over them.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      "Identify whether the wall is drywall or plaster before patching",
      "Do not ignore ceiling cracks after a roof or plumbing leak",
      "Match finish level to lighting in the room",
      "Budget texture and primer as part of the repair",
      "Ask for a written scope and workmanship warranty",
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title={"Drywall vs Plaster Repairs: What Homeowners Should Know"}
        description={"Older Waco homes may have plaster. Here is how repair methods differ from modern drywall, when to call a specialty crew, and how to budget the job."}
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt={"Drywall versus plaster repair comparison for Texas homes"}
        category="Education"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title={"Not Sure If It Is Drywall or Plaster?"}
        body={"LevelWall can inspect and quote the right repair — call (254) 970-1818 or request an estimate online."}
        buttonText="Request a Free Estimate"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="drywall-vs-plaster-repairs-blog" />
    </>
  );
}

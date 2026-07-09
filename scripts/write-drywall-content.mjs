/**
 * Write proper LevelWall Drywall content after bulk rebrand from handyman.
 * Overwrites key pages + cleans residual awkward phrases.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const w = (rel, content) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, 'utf8');
  console.log('wrote', rel);
};

// ── Global cleanup ──────────────────────────────────────────────────────────
const SKIP = new Set(['node_modules', '.next', '.git', 'GeoLite2-City.mmdb', 'COMBINE_FILES_SERVICE']);
const TEXT_EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.scss', '.css', '.json', '.md', '.txt']);
const CLEANUPS = [
  ['bonded & insured, bonded, and insured', 'bonded and insured'],
  ['Bonded & insured, bonded, and insured', 'Bonded and insured'],
  ['bonded & insured and insured', 'bonded and insured'],
  ['Bonded & insured and insured', 'Bonded and insured'],
  ['Bonded & insured & insured', 'Bonded & insured'],
  ['bonded & insured & insured', 'bonded & insured'],
  ['insured, and warrantied', 'and warrantied'],
  ['pro drywall contractors', 'pro drywall crews'],
  ['Pro drywall contractors', 'Pro drywall crews'],
  ['a drywall cost', 'drywall work cost'],
  ['How much does a drywall cost', 'How much does drywall work cost'],
  ['Background-Checked', 'Pro Drywall'],
  ['background-checked', 'pro drywall'],
  ['honey-do items', 'patch jobs'],
  ['honey-do', 'patch'],
  ['Honey-do', 'Patch'],
  ['services/honey-do-lists', 'services/patch-repair'],
  ['honey-do-lists-page-form', 'patch-repair-page-form'],
  ['TV drywall repair', 'water damage drywall'],
  ['door window repair', 'texture matching'],
  ['popcorn removal ceiling work', 'popcorn ceiling removal'],
  ['from patch & repair to drywall and drywall repair', 'from patch repairs to full hanging and texture matching'],
  ['general repairs, drywall, texture matching, drywall repair, popcorn removal, and patch & repair',
    'drywall hanging, taping & finishing, texture matching, water damage drywall, popcorn removal, and patch & repair'],
  ['General repairs, drywall, drywall repair & patch & repair',
    'Drywall hanging, taping, texture matching & patch repair'],
  ['a upfront price', 'an upfront price'],
  ['a skilled drywall contractor can handle', 'our drywall crews can handle'],
  ['If our work fails within a year', 'If our finish fails within two years'],
  ['within a year, we make it right', 'within two years, we make it right'],
  ['If our labor fails within a year', 'If our labor fails within two years'],
  ['Brand Accent — gold/yellow', 'Brand Accent — warm orange'],
  ['Sam\'s crew', 'Mitch\'s crew'],
  ['No random day labor', 'No untrained day labor'],
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

let cleaned = 0;
for (const f of walk(ROOT)) {
  if (!TEXT_EXT.has(path.extname(f).toLowerCase())) continue;
  if (f.includes('write-drywall-content') || f.includes('rebrand-from-handyman')) continue;
  let c = fs.readFileSync(f, 'utf8');
  const orig = c;
  for (const [a, b] of CLEANUPS) c = c.split(a).join(b);
  if (c !== orig) { fs.writeFileSync(f, c); cleaned++; }
}
console.log('cleanup files:', cleaned);

// ── Design spec (restore if mangled) ────────────────────────────────────────
w('docs/superpowers/specs/2026-07-09-drywall-texture-design.md', `# Drywall Texture Template — Design Spec

## Context

Scott Apps trade template reskin of \`drywall-texture-template\` (fork of HVAC), following \`RESKIN_PLAYBOOK.md\`. Sibling-cloned patterns from \`handyman-template\` / \`garage-door-template\`.

Per standing decisions for non-gallery trades: per-city SEO subpages are deleted, and the \`src/app/projects/\` route is deleted.

## Business Identity (locked, reuse verbatim)

- **Business name:** LevelWall Drywall
- **Tagline:** Hang · Tape · Texture · Repair
- **Location:** Waco, TX (home base)
- **Service area cities:** Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead
- **Founded:** 2009
- **Owner:** Mitch Rowan
- **Credential/license line:** "Pro Drywall Contractors · Bonded & Insured"
- **Guarantee:** Smooth Finish Guarantee · 2-Year Workmanship
- **Social proof:** 4.9★, 980+ reviews, 5,000+ rooms finished
- **Brand accent color:** warm gray \`#78716c\` with \`$orange\` \`#ea580c\` (light \`#f97316\`; dark \`#c2410c\`)
- **Phone:** (254) 970-1818 / \`tel:+12549701818\`
- **Email:** hello@levelwalldrywall.com
- **Domain:** levelwalldrywall.com
- **Address:** 2100 N 25th St, Waco, TX 76708
- No per-city SEO subpages

## Services (6)

| Old HVAC slug | New slug | Title |
|---|---|---|
| ac-repair | drywall-hanging | Drywall Hanging |
| heating | taping-finishing | Taping & Finishing |
| installation | texture-matching | Texture Matching |
| duct-cleaning | water-damage-drywall | Water Damage Drywall |
| indoor-air-quality | popcorn-removal | Popcorn Ceiling Removal |
| maintenance | patch-repair | Patch & Repair |

## Industries Served (3)

| Old slug | New slug | Title |
|---|---|---|
| automotive | homebuilders | Homebuilders |
| manufacturing | property-management | Property Management |
| oil-gas | restoration-partners | Restoration Partners |

## Blogs (3)

1. \`texture-matching-after-patch\`
2. \`popcorn-ceiling-removal-cost\`
3. \`drywall-vs-plaster-repairs\`

## Pages

Home, Services (index + 6 detail), Industries (index + 3 detail), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No \`/projects\` route. No per-city SEO.

## Non-goals

- No per-city SEO subpages
- No new component primitives
- No project gallery
- No marketplace catalog flip (separate pass)

## Success Criteria

- Zero Arctic Air / HVAC-pro / old phone / Mapbox pk leaks in customer-facing source
- Accent \`#ea580c\` in \`$orange\`
- \`npm run typecheck\` passes
- Logical git commits by batch
`);

// ── globalVariables ─────────────────────────────────────────────────────────
w('src/app/globalVariables.scss', `// src/app/globalVariables.scss
// ─────────────────────────────────────────────────────────────────────────────
// LevelWall Drywall — Brand Tokens
//
// THREE DISTINCT FONTS:
//   $titleFont  → Barlow Condensed  — bold condensed display (hero h1, section titles)
//   $headerFont → Outfit            — clean geometric sans   (nav, card titles, labels, CTAs)
//   $textFont   → Inter             — refined humanist sans  (body copy, form text, paragraphs)
// ─────────────────────────────────────────────────────────────────────────────

$titleFont:  var(--font-barlow-condensed), 'Barlow Condensed', sans-serif;
$headerFont: var(--font-outfit),           'Outfit',           sans-serif;
$textFont:   var(--font-inter),            'Inter',            sans-serif;

// ── Core Palette ─────────────────────────────────────────────────────────────
$black:      #000000;
$obsidian:   #0d1b2a;
$blackflat:  #1a2a3a;
$white:      #FFFFFF;
$offwhite:   #f8fafc;

// Greys (warm stone tint)
$darkgrey:   #78716c;
$grey:       #57534e;
$lightgrey:  #d6d3d1;

// Brand Accent — warm orange ($orange primary) with stone gray support
$orange:     #ea580c;
$lightorange:#f97316;
$darkorange: #c2410c;

// Legacy aliases
$green:      $orange;
$lightgreen: $lightorange;
$darkgreen:  $darkorange;
$blue:       #1e6fa8;

// Error
$danger-red: #ef4444;
`);

// ── reviews ─────────────────────────────────────────────────────────────────
w('libs/local-db/reviews.ts', `// libs/local-db/reviews.ts
// Static testimonials for LevelWall Drywall

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Drywall Hanging',
    text:     "LevelWall hung and finished three bedrooms in our remodel. Boards were tight, seams invisible after paint, and they left the house clean. Mitch's crew is solid — 5,000+ rooms finished shows.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Taping & Finishing',
    text:     'Kids put two big holes in the hallway and the previous patch showed. LevelWall re-taped, floated to Level 4, and texture-matched the orange peel. You cannot tell anything happened.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Texture Matching',
    text:     'Knockdown match after a plumbing cut-out looked impossible. LevelWall nailed the pattern so paint blended perfectly. Fair price and on time.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Water Damage Drywall',
    text:     'Ceiling leak wrecked two rooms. LevelWall demoed the bad board, dried the cavity, hung new drywall, and finished smooth. Insurance paperwork was straightforward.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Popcorn Ceiling Removal',
    text:     'Took down popcorn in the living room and hallway, skim-coated smooth, and left it paint-ready. Huge upgrade — worth every penny.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Patch & Repair',
    text:     'Door kick, picture hangers, and a soft corner all fixed in one afternoon. Bonded, respectful of the house, and the 2-year workmanship guarantee gives peace of mind.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Property Management',
    text:     'We use LevelWall for make-ready drywall across our rental units. Fast turnaround, consistent texture, and one invoice property managers understand.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Drywall Hanging',
    text:     'New garage suite hung, taped, and textured to match the main house. Professional, priced fairly, finished on schedule. Smooth Finish Guarantee sealed the deal.',
  },
];

export default reviews;
`);

// ── blog-posts ──────────────────────────────────────────────────────────────
w('libs/blog-posts.ts', `// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'texture-matching-after-patch',
    title:    'Texture Matching After a Drywall Patch (Waco Homes)',
    excerpt:  'A perfect patch still fails if the texture does not match. Learn how pros blend orange peel, knockdown, and skip trowel so repairs disappear after paint.',
    category: 'Repairs',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'Drywall texture matching after patch work in Central Texas',
    featured: true,
  },
  {
    slug:     'popcorn-ceiling-removal-cost',
    title:    'Popcorn Ceiling Removal Cost in Central Texas',
    excerpt:  'What drives popcorn ceiling removal pricing — square footage, asbestos testing, skim-coat level, and paint readiness — plus realistic ranges for Waco homes.',
    category: 'Guides',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/maintenance-plan.jpg',
    imageAlt: 'Popcorn ceiling removal cost guide for Central Texas',
  },
  {
    slug:     'drywall-vs-plaster-repairs',
    title:    'Drywall vs Plaster Repairs: What Homeowners Should Know',
    excerpt:  'Older Waco homes may have plaster. Here is how repair methods differ from modern drywall, when to call a specialty crew, and how to budget the job.',
    category: 'Education',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Drywall versus plaster repair comparison for Texas homes',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
`);

console.log('Core libs written. Continue with page writers...');

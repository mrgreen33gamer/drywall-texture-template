// libs/local-db/reviews.ts
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

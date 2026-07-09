// libs/blog-posts.ts
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
    imageSrc: '/pages/home/welcome/after.jpg',
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
    imageSrc: '/pages/home/services/service-3.jpg',
    imageAlt: 'Popcorn ceiling removal cost guide for Central Texas',
  },
  {
    slug:     'drywall-vs-plaster-repairs',
    title:    'Drywall vs Plaster Repairs: What Homeowners Should Know',
    excerpt:  'Older Waco homes may have plaster. Here is how repair methods differ from modern drywall, when to call a specialty crew, and how to budget the job.',
    category: 'Education',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/home/welcome/hero-main.jpg',
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

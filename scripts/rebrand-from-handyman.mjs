/**
 * Rebrand LevelWall Drywall → LevelWall Drywall
 * Remaps service/industry/blog slugs and key trade copy.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SKIP = new Set(['node_modules', '.next', '.git', 'GeoLite2-City.mmdb', 'COMBINE_FILES_SERVICE']);

// Ordered: longer / more specific first
const REPLACEMENTS = [
  // Identity
  ['LevelWall Drywall', 'LevelWall Drywall'],
  ['levelwalldrywall.com', 'levelwalldrywall.com'],
  ['levelwalldrywall', 'levelwalldrywall'],
  ['LevelWall', 'LevelWall'],
  ['Mitch Rowan', 'Mitch Rowan'],
  ['Owner & Lead Drywall Contractor', 'Owner & Lead Drywall Contractor'],
  ['Lead Drywall Contractor', 'Lead Drywall Contractor'],

  // Contact
  ['(254) 970-1818', '(254) 970-1818'],
  ['+12549701818', '+12549701818'],
  ['hello@levelwalldrywall.com', 'hello@levelwalldrywall.com'],
  ['2100 N 25th St, Waco, TX 76708', '2100 N 25th St, Waco, TX 76708'],
  ['2100 N 25th St', '2100 N 25th St'],
  ['76708', '76708'],

  // Credentials / proof
  ['Pro Drywall Contractors · Bonded & Insured', 'Pro Drywall Contractors · Bonded & Insured'],
  ['Pro Drywall Contractors · Fully Insured', 'Pro Drywall Contractors · Fully Insured'],
  ['Pro Drywall · Bonded & Insured · Waco, TX', 'Pro Drywall · Bonded & Insured · Waco, TX'],
  ['Pro Drywall Contractors · Bonded & Insured', 'Pro Drywall Contractors · Bonded & Insured'],
  ['Pro Drywall Contractors', 'Pro Drywall Contractors'],
  ['pro drywall contractors', 'pro drywall contractors'],
  ['pro drywall contractors', 'pro drywall contractors'],
  ['Bonded & insured', 'Bonded & insured'],
  ['bonded & insured', 'bonded & insured'],
  ['Smooth Finish Guarantee · 2-Year Workmanship', 'Smooth Finish Guarantee · 2-Year Workmanship'],
  ['2-Year Workmanship', '2-Year Workmanship'],
  ['2-Yr Warranty', '2-Yr Warranty'],
  ['2-year workmanship warranty', '2-year workmanship warranty'],
  ['980+ Reviews', '980+ Reviews'],
  ['980+ reviews', '980+ reviews'],
  ['980+', '980+'],
  ['5,000+ Rooms', '5,000+ Rooms'],
  ['5,000+ rooms', '5,000+ rooms'],
  ['5,000+', '5,000+'],
  ['5000', '5000'],
  ['Founded in 2009', 'Founded in 2009'],
  ['Since 2009', 'Since 2009'],
  ['since 2009', 'since 2009'],
  ['foundingDate: "2009"', 'foundingDate: "2009"'],
  ['"2009"', '"2009"'],
  ['17 Years', '17 Years'],
  ['17 years', '17 years'],
  ['value: 17', 'value: 17'],

  // Taglines
  ['Hang · Tape · Texture · Repair', 'Hang · Tape · Texture · Repair'],
  ['Hang · tape · texture · repair', 'Hang · tape · texture · repair'],
  ['Hang · Tape · Texture · Repair', 'Hang · Tape · Texture · Repair'],
  ['professional drywall services', 'professional drywall services'],
  ['Smooth Finish Guarantee', 'Smooth Finish Guarantee'],
  ['smooth finish guaranteed', 'smooth finish guaranteed'],
  ['Level Walls · Perfect Texture Matches', 'Level Walls · Perfect Texture Matches'],
  ['Upfront quotes', 'Upfront quotes'],
  ['upfront quotes', 'upfront quotes'],
  ['Written Quotes Before We Hang', 'Written Quotes Before We Hang'],
  ['Written Quote Before Work', 'Written Quote Before Work'],
  ['written quote before work', 'written quote before work'],
  ['upfront price', 'upfront price'],
  ['Upfront quote', 'Upfront quote'],
  ['upfront quote', 'upfront quote'],
  ['Upfront Quote', 'Upfront Quote'],
  ['Package pricing', 'Package pricing'],
  ['package pricing', 'package pricing'],

  // Colors — gold → orange accent (keep warm gray separate in SCSS)
  ['#ea580c', '#ea580c'],
  ['#f97316', '#f97316'],
  ['#c2410c', '#c2410c'],

  // Service slug paths (drywall contractor → drywall) — longer first
  ['/services/popcorn-removal', '/services/popcorn-removal'],
  ['/services/texture-matching', '/services/texture-matching'],
  ['/services/water-damage-drywall', '/services/water-damage-drywall'],
  ['/services/patch-repair', '/services/patch-repair'],
  ['/services/taping-finishing', '/services/taping-finishing'],
  ['/services/drywall-hanging', '/services/drywall-hanging'],

  // Industry slug paths
  ['/industries/homebuilders', '/industries/homebuilders'],
  ['/industries/property-management', '/industries/homebuilders'],
  ['/industries/restoration-partners', '/industries/restoration-partners'],

  // Blog slugs
  ['texture-matching-after-patch', 'texture-matching-after-patch'],
  ['popcorn-ceiling-removal-cost', 'popcorn-ceiling-removal-cost'],
  ['drywall-vs-plaster-repairs', 'drywall-vs-plaster-repairs'],

  // Service titles (UI labels)
  ['Water Damage Drywall', 'Water Damage Drywall'],
  ['Water Damage Drywall', 'Water Damage Drywall'],
  ['water damage drywall', 'water damage drywall'],
  ['Popcorn Ceiling Removal', 'Popcorn Ceiling Removal'],
  ['Popcorn Ceiling Removal', 'Popcorn Ceiling Removal'],
  ['popcorn ceiling removal', 'popcorn ceiling removal'],
  ['Texture Matching', 'Texture Matching'],
  ['Texture Matching', 'Texture Matching'],
  ['texture matching', 'texture matching'],
  ['Patch & Repair', 'Patch & Repair'],
  ['Patch & Repair', 'Patch & Repair'],
  ['Patch & Repair', 'Patch & Repair'],
  ['patch & repair', 'patch & repair'],
  ['patch & repair', 'patch & repair'],
  ['Taping & Finishing', 'Taping & Finishing'],
  ['taping & finishing', 'taping & finishing'],
  ['Drywall Hanging', 'Drywall Hanging'],
  ['drywall hanging', 'drywall hanging'],
  ['Drywall Hanging', 'Drywall Hanging'],

  // Industry titles
  ['Property Management', 'Property Management'],
  ['Property Management', 'Property Management'],
  ['property management', 'property management'],
  ['Restoration Partners', 'Restoration Partners'],
  ['Restoration Partners', 'Restoration Partners'],
  ['restoration partners', 'restoration partners'],
  // property-management already correct name when remapped from senior-living content
  // homebuilders from property-management:
  ['Homebuilders', 'Homebuilders'],
  // careful: after senior→property-management title swap, leave homebuilders labels

  // Trade vocabulary
  ['drywall services', 'drywall services'],
  ['Drywall Services', 'Drywall Services'],
  ['drywall company', 'drywall company'],
  ['Drywall company', 'Drywall company'],
  ['drywall cost', 'drywall cost'],
  ['a drywall pro', 'a drywall pro'],
  ['A drywall pro', 'A drywall pro'],
  ['drywall contractor', 'drywall contractor'],
  ['Drywall Contractor', 'Drywall Contractor'],
  ['drywall work', 'drywall work'],
  ['Drywall Work', 'Drywall Work'],
  ['drywall work', 'drywall work'],
  ['Drywall Work', 'Drywall Work'],
  ['patch and repair', 'patch and repair'],
  ['Patch & Repair', 'Patch & Repair'],
  ['drywall repair', 'drywall repair'],
  ['Drywall Repair', 'Drywall Repair'],
  ['popcorn removal', 'popcorn removal'],
  ['Popcorn Removal', 'Popcorn Removal'],
  ['ceiling work', 'ceiling work'],
  ['Ceiling Work', 'Ceiling Work'],
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

const TEXT_EXT = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs',
  '.scss', '.css', '.json', '.md', '.txt', '.html', '.svg',
]);

function rebrandFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (!TEXT_EXT.has(ext)) return false;
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  for (const [from, to] of REPLACEMENTS) {
    if (content.includes(from)) content = content.split(from).join(to);
  }
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    return true;
  }
  return false;
}

function renameDir(fromRel, toRel) {
  const from = path.join(ROOT, fromRel);
  const to = path.join(ROOT, toRel);
  if (!fs.existsSync(from)) {
    console.warn('skip rename (missing):', fromRel);
    return;
  }
  if (fs.existsSync(to)) {
    console.warn('skip rename (target exists):', toRel);
    return;
  }
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.renameSync(from, to);
  console.log('renamed', fromRel, '→', toRel);
}

// ── 1) Rename dirs first so path strings in files match after rebrand ──
// Services
renameDir('src/app/services/drywall-hanging', 'src/app/services/drywall-hanging');
renameDir('src/app/services/taping-finishing', 'src/app/services/taping-finishing');
renameDir('src/app/services/texture-matching', 'src/app/services/texture-matching');
renameDir('src/app/services/water-damage-drywall', 'src/app/services/water-damage-drywall');
renameDir('src/app/services/popcorn-removal', 'src/app/services/popcorn-removal');
renameDir('src/app/services/patch-repair', 'src/app/services/patch-repair');

// Industries — order matters to avoid collisions
// property-management → temp → homebuilders; senior-living → property-management; small-business → restoration-partners
renameDir('src/app/industries/homebuilders', 'src/app/industries/_tmp-homebuilders');
renameDir('src/app/industries/property-management', 'src/app/industries/homebuilders');
renameDir('src/app/industries/restoration-partners', 'src/app/industries/restoration-partners');
renameDir('src/app/industries/_tmp-homebuilders', 'src/app/industries/homebuilders');

// Blogs
renameDir('src/app/blogs/texture-matching-after-patch', 'src/app/blogs/texture-matching-after-patch');
renameDir('src/app/blogs/popcorn-ceiling-removal-cost', 'src/app/blogs/popcorn-ceiling-removal-cost');
renameDir('src/app/blogs/drywall-vs-plaster-repairs', 'src/app/blogs/drywall-vs-plaster-repairs');

// ── 2) Text rebrand ──
const files = walk(ROOT);
let changed = 0;
for (const f of files) {
  if (rebrandFile(f)) {
    changed++;
    console.log('updated', path.relative(ROOT, f));
  }
}
console.log(`\nDone. ${changed} files updated.`);

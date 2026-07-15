// _archetype-library/hero-h-parallax/Component.tsx
//
// Hero H: Layered Parallax — foliage/gravel texture via CSS gradients + optional
// textureSrc image layers. Scroll-linked depth on document.body (scroll container).
// No discrete widget card — full-bleed layered texture behind left-aligned copy.
'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function useBodyScrollY() {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const read = () => {
      // document.body is the scroll container in these templates
      const y =
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.scrollY ||
        0;
      scrollY.set(y);
    };
    read();
    document.body.addEventListener('scroll', read, { passive: true });
    window.addEventListener('scroll', read, { passive: true });
    return () => {
      document.body.removeEventListener('scroll', read);
      window.removeEventListener('scroll', read);
    };
  }, [scrollY]);

  return scrollY;
}

export default function WelcomePage() {
const badgeText = 'Waco\'s Trusted Drywall Pros — Hang · Tape · Texture · Repair';
const headlineLines = [
  'Level Walls.',
  'Smooth Finish Guarantee.',
];
const headlineAccent = 'LevelWall.';
const subheadline = 'Upfront quotes. Pro drywall crews. Smooth Finish Guarantee · 2-Year Workmanship. Serving Waco and Central Texas — hanging, taping, texture matching, and repairs.';
const primaryCta = { label: 'Call (254) 970-1818', href: 'tel:+12549701818' };
const secondaryCta = { label: 'Free Estimate', href: '/contact' };
const chips = [
  'Same-Day Patches',
  'No Contracts',
  'Bonded & Insured',
  'Since 2009',
  '2-Yr Warranty',
];
const stats = [
  {
    "value": "5,000+",
    "label": "Rooms Finished"
  },
  {
    "value": "4.9 ★",
    "label": "Google Rating"
  },
  {
    "value": "2-Year",
    "label": "Workmanship Warranty"
  },
  {
    "value": "Same-Day",
    "label": "Service Available"
  }
];
const meterTarget = 72;
const meterTopLabel = "Peak";
const meterMidLabel = "Local";
const meterBotLabel = "Base";
const particleColor = '#a1a1aa';
const beforeImageSrc = '/pages/home/welcome/before.jpg';
const afterImageSrc = '/pages/home/welcome/after.jpg';
const beforeLabel = "Damaged drywall";
const afterLabel = "Texture matched";
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "Orange Peel", swatch: "#a3a3a3", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Knockdown", swatch: "#d4d4d4", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Smooth L5", swatch: "#e5e5e5", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "Skip Trowel", swatch: "#737373", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Repair", swatch: "#525252", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "New Build", swatch: "#404040", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "Could not find the patch. Texture match was spot-on and they left the rooms clean.";
const authorName = "Omar F.";
const authorMeta = "Water damage repair · Temple";
const rating = 5;
const schematicLabel = "LevelWall schematic";
const gauges = [
  { label: "Rooms", value: "4,000+" },
  { label: "Rating", value: "4.9 ★" },
  { label: "Match", value: "On-site" },
  { label: "Clean-up", value: "Included" }
];
const toggles = [
  { label: "Licensed crew", on: true },
  { label: "Same-week", on: true },
  { label: "Warrantied", on: true }
];
const accentWord = "LevelWall";
// Photographic parallax hero — real drywall crew photography, sourced for this
// component (see components/Pages/Home/WelcomePage/styles.module.scss for the
// scrim + photo-card treatment).
const heroBgSrc = '/pages/home/welcome/hero-parallax-bg.jpg';
const photoCardSrc = '/pages/home/welcome/hero-crew-photo.jpg';
const photoCardAlt = 'LevelWall drywall technician using a level and trowel to finish a taped seam on a job site in Waco, TX';
const photoBadgeText = 'LevelWall Crew · On-Site';
const photoSpecs = ['Same-Day Patches', '2-Yr Warranty'];

  const scrollY = useBodyScrollY();
  const smoothY = useSpring(scrollY, { stiffness: 90, damping: 28, mass: 0.4 });

  // Scroll-linked parallax on the photographic background. document.body is the
  // scroll container in this template (see useBodyScrollY above), so we drive the
  // transform off that instead of framer-motion's window-based useScroll.
  const bgY = useTransform(smoothY, [0, 600], ['0%', '14%']);
  const bgScale = useTransform(smoothY, [0, 600], [1.06, 1.14]);

  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Photographic parallax background — real drywall/taping job-site scene */}
      <motion.div
        className={styles.bgLayer}
        style={reducedMotion ? undefined : { y: bgY, scale: bgScale }}
        aria-hidden="true"
      >
        <Image
          src={heroBgSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </motion.div>
      {/* Neutral obsidian scrim keeps the photo on-brand and the headline legible */}
      <div className={styles.scrim} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Authentic drywall crew photo — the ownable image, framed as a spec card */}
        <motion.div
          className={styles.photoStage}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.photoCard}>
            <Image
              src={photoCardSrc}
              alt={photoCardAlt}
              fill
              priority
              sizes="(max-width: 960px) 88vw, 460px"
              className={styles.photo}
            />
            <div className={styles.photoGlaze} aria-hidden="true" />

            <div className={styles.photoBadge}>
              <span className={styles.photoBadgeDot} />
              {photoBadgeText}
            </div>

            <div className={styles.specCard}>
              {photoSpecs.map((spec) => (
                <span key={spec} className={styles.specRow}>
                  <CheckIcon size={10} /> {spec}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

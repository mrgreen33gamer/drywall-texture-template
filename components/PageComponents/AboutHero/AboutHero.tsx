'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface AboutHeroProps {
  cityName: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ cityName }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.accentBar} aria-hidden="true" />

      <div className={styles.heroContainer}>

        <motion.div
          className={styles.textColumn}
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <span className={styles.eyebrow}>Since 2009 · {cityName}, TX</span>
          <h1 className={styles.heroTitle}>
            Central Texas Drywall Contractor<br />
            <em>Done Right.</em><br />
            Every Time.
          </h1>
          <p className={styles.heroSubtitle}>
            LevelWall Drywall has been hanging, taping, and texturing walls in{' '}
            <strong>{cityName}</strong> and across Central Texas since 2009 —
            with pro drywall crews, upfront pricing, and a Smooth Finish Guarantee on every job.
          </p>

          <div className={styles.statRow}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>17+</span>
              <span className={styles.statLabel}>Years Local</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNumber}>4.9★</span>
              <span className={styles.statLabel}>Google Rating</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNumber}>5,000+</span>
              <span className={styles.statLabel}>Rooms Finished</span>
            </div>
          </div>

          <div className={styles.badges}>
            <span className={styles.badge}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Pro Drywall Crews
            </span>
            <span className={styles.badge}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Bonded &amp; Insured
            </span>
            <span className={styles.badge}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              2-Year Warranty
            </span>
          </div>
        </motion.div>

        <motion.div
          className={styles.imageColumn}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
        >
          <div className={styles.imageFrame}>
            <div className={styles.imageWrapper}>
              <Image
                src="/pages/seo-template-resources/about-hero.png"
                alt="LevelWall Drywall — Waco, Texas drywall contractor pros"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className={styles.imageOverlay} aria-hidden="true" />
            </div>
            <div className={styles.trustCard}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              <div className={styles.trustCardText}>
                <span className={styles.trustCardTitle}>LevelWall Drywall</span>
                <span className={styles.trustCardSub}>Waco&apos;s Most Trusted Drywall Contractor</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHero;

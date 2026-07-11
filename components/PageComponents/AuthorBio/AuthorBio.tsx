// components/PageComponents/AuthorBio/AuthorBio.tsx
// FIX9: LinkedIn "Connect on LinkedIn" link now fires 'click' tracking.
"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useTrackEvent } from '&/useTrackEvent';

interface AuthorBioProps {
  cityName:  string;
  imageSrc?: string;
  imageAlt?: string;
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mitch Rowan",
  jobTitle: "Owner & Lead Drywall Contractor",
  worksFor: {
    "@type": "Organization",
    name: "LevelWall Drywall",
    url: "https://www.levelwalldrywall.com",
  },
  url: "https://www.levelwalldrywall.com/about",
  sameAs: [
    "https://www.facebook.com/levelwalldrywall",
    "https://www.levelwalldrywall.com",
  ],
  knowsAbout: [
    "Drywall Hanging", "Taping & Finishing", "Texture Matching",
    "Water Damage Drywall", "Popcorn Ceiling Removal", "Patch & Repair",
  ],
  description:
    "Owner of LevelWall Drywall in Waco, TX. Bonded & insured pro with 11+ years helping Central Texas homes and businesses. Upfront pricing, Smooth Finish Guarantee · 2-Year Workmanship.",
};

const AuthorBio: React.FC<AuthorBioProps> = ({
  cityName,
  imageSrc = "/pages/home/welcome/hero-main.jpg",
  imageAlt = "Mitch Rowan - Owner of LevelWall Drywall",
}) => {
  const trackEvent = useTrackEvent();

  return (
    <section className={styles.authorBio} aria-label="About the Author">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className={styles.card}>
        <div className={styles.accentStrip} aria-hidden="true" />

        <div className={styles.imageCol}>
          <div className={styles.imageRing}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={180}
              height={180}
              className={styles.authorImage}
              priority
            />
          </div>
          <div className={styles.verifiedBadge}>✓ Verified Owner</div>
        </div>

        <div className={styles.content}>
          <p className={styles.role}>Owner & Lead Drywall Contractor · LevelWall Drywall</p>
          <h2 className={styles.title}>Mitch Rowan</h2>

          <p className={styles.description}>
            11+ years as a bonded & insured pro serving Central Texas
            homes and businesses. Based in <strong>Waco, TX</strong> — serving{" "}
            <strong>{cityName}</strong> and the surrounding region. Every job is
            flat-rate, warrantied, and done right the first time.
          </p>

          <ul className={styles.credentials} aria-label="Credentials and specializations">
            <li>Pro Drywall Crews Pro</li>
            <li>Panel upgrades, wiring, lighting, EV chargers &amp; generators</li>
            <li>2,500+ electrical rooms finished across Central Texas</li>
            <li>Bonded, insured, Smooth Finish Guarantee · 2-Year Workmanship on every install</li>
          </ul>

          <p className={styles.updated}>
            Last updated April 2026 · Based on real local data &amp; 2026 Texas building practices
          </p>

          <div className={styles.footer}>
            <a
              href="https://www.facebook.com/brightvoltelectric"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinLink}
              aria-label="Connect with LevelWall Drywall on Facebook"
              onClick={() => trackEvent({
                eventType:    'click',
                elementLabel: 'Connect on Facebook',
                section:      'AuthorBio',
              })}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Find us on Facebook
            </a>

            <div className={styles.badges}>
              <span className={styles.badge}>15+ Years</span>
              <span className={styles.badge}>4.9 ★ Rated</span>
              <span className={styles.badge}>Waco, TX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;

// components/PageComponents/SectionIndustriesServed/SectionIndustriesServed.tsx
"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faPeopleRoof,
  faStore,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

const INDUSTRIES = [
  { slug: 'homebuilders',          label: 'Homebuilders',          icon: faBuilding },
  { slug: 'property-management',   label: 'Property Management',   icon: faPeopleRoof },
  { slug: 'restoration-partners',  label: 'Restoration Partners',  icon: faStore },
];

interface SectionIndustriesServedProps {
  title?: string;
  subtitle?: string;
  disableLinks?: boolean;
}

export default function SectionIndustriesServed({
  title = 'Industries We Serve Across Texas',
  subtitle = 'Drywall Contractor support built for how your organization actually works.',
  disableLinks = false,
}: SectionIndustriesServedProps) {
  return (
    <section className={styles.section}>

      <div className={styles.header}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.sub}>{subtitle}</p>
      </div>

      <div className={styles.grid}>
        {INDUSTRIES.map(({ slug, label, icon }) => {
          const card = (
            <div className={styles.card} key={slug}>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={icon} className={styles.industryIcon} />
              </div>
              <span className={styles.industryLabel}>{label}</span>
              {!disableLinks && (
                <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
              )}
            </div>
          );

          return disableLinks ? (
            card
          ) : (
            <Link key={slug} href={`/industries/${slug}`} className={styles.cardLink}>
              {card}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

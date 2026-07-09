// PageComponents/LocalCitationBlock/LocalCitationBlock.tsx
import Link from 'next/link';
import styles from './styles.module.scss';

interface HoursEntry {
  days:  string;
  hours: string;
}

interface LocalCitationBlockProps {
  businessName?:  string;
  address?:       string;
  phone?:         string;
  email?:         string;
  googleMapsUrl?: string;
  hours?:         HoursEntry[];
  cityName?:      string;
}

const DEFAULT_HOURS: HoursEntry[] = [
  { days: 'Monday – Friday', hours: '7:00 AM – 7:00 PM' },
  { days: 'Saturday',        hours: '8:00 AM – 5:00 PM' },
  { days: 'Sunday',          hours: 'Emergency Only' },
];

const LocalCitationBlock: React.FC<LocalCitationBlockProps> = ({
  businessName  = 'LevelWall Drywall',
  address       = '2100 N 25th St, Waco, TX 76708',
  phone         = '(254) 970-1818',
  email         = 'hello@levelwalldrywall.com',
  googleMapsUrl = 'https://maps.google.com/?q=LevelWall+Drywall Contractor+Waco+TX',
  hours         = DEFAULT_HOURS,
  cityName      = 'Waco',
}) => {
  return (
    <section
      className={styles.section}
      aria-label="Business Contact Information"
      itemScope
      itemType="https://schema.org/HomeAndConstructionBusiness"
    >
      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>Find Us</span>
          <h2 className={styles.title} itemProp="name">{businessName}</h2>
          <p className={styles.subtitle}>
            Based in {cityName}, TX — serving all of Central Texas with bonded & insured drywall contractor pros.
          </p>
        </div>

        <div className={styles.grid}>

          <div className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardLabel}>Address</span>
              <p
                className={styles.cardValue}
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">{address}</span>
              </p>
              <Link
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                Get Directions
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardLabel}>Phone</span>
              <a href={`tel:+1${phone.replace(/\D/g, '')}`} className={styles.cardValue} itemProp="telephone">
                {phone}
              </a>
              <span className={styles.emergency}>Same-day when available</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardLabel}>Email</span>
              <a href={`mailto:${email}`} className={styles.cardValue} itemProp="email">
                {email}
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardLabel}>Hours</span>
              <ul className={styles.hoursList}>
                {hours.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocalCitationBlock;

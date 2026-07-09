'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface ComparisonRow {
  feature:  string;
  us:       boolean | string;
  others:   boolean | string;
}

interface ValueComparisonProps {
  rows?:  ComparisonRow[];
  title?: string;
}

const DEFAULT_ROWS: ComparisonRow[] = [
  { feature: 'Upfront pricing (no hourly billing)',  us: true,  others: false },
  { feature: 'Smooth Finish Guarantee · 2-Year Workmanship',            us: true,  others: false },
  { feature: 'Same-day service when available',        us: true,  others: 'Sometimes' },
  { feature: 'No service contracts required',          us: true,  others: false },
  { feature: 'Bonded & insured pros',      us: true,  others: true },
  { feature: 'Upfront quote before work begins',       us: true,  others: false },
  { feature: 'Patch list packaging',                us: true,  others: 'Sometimes' },
  { feature: 'Satisfaction guarantee',                 us: true,  others: false },
];

function StatusIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className={`${styles.icon} ${styles.iconYes}`} aria-label="Yes">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className={`${styles.icon} ${styles.iconNo}`} aria-label="No">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </span>
    );
  }
  return <span className={styles.iconMaybe}>{value}</span>;
}

export default function ValueComparison({ rows = DEFAULT_ROWS, title = 'LevelWall vs. The Other Guys' }: ValueComparisonProps) {
  return (
    <section className={styles.section} aria-label="Value comparison">
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>Side by Side</span>
          <h2 className={styles.title}>{title}</h2>
        </motion.div>

        <div className={styles.colHeaders}>
          <div className={styles.colHeaderFeature} />
          <div className={styles.colHeaderUs}>
            <span className={styles.colLogoMark}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </span>
            LevelWall
          </div>
          <div className={styles.colHeaderOthers}>Competitors</div>
        </div>

        <div className={styles.rowList}>
          {rows.map((row, i) => (
            <motion.div
              key={i}
              className={styles.compRow}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <span className={styles.feature}>{row.feature}</span>
              <span className={styles.usCell}><StatusIcon value={row.us} /></span>
              <span className={styles.othersCell}><StatusIcon value={row.others} /></span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

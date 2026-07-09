'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string;
  icon?:    string;
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'Tools & Materials We Use',
    items: [
      { name: 'Gypsum Board (1/2\" & 5/8\")', type: 'brand', icon: '🧱' },
      { name: 'Joint Compound & Tape',      type: 'brand', icon: '🧱' },
      { name: 'Corner Bead & Trim',         type: 'brand', icon: '🧱' },
      { name: 'Texture Sprayers',           type: 'brand', icon: '🧱' },
      { name: 'Dust Containment',           type: 'brand', icon: '🧱' },
      { name: 'Moisture-Resistant Board',   type: 'brand', icon: '🧱' },
      { name: 'Patch & Texture Kits',       type: 'brand', icon: '🧱' },
      { name: 'Finish Sanding Systems',     type: 'brand', icon: '🧱' },
    ],
  },
  {
    label: 'Credentials & Coverage',
    items: [
      { name: 'Pro Drywall Contractors', type: 'cert', icon: '✓' },
      { name: 'Bonded & Insured',        type: 'cert', icon: '✓' },
      { name: 'Local Owner-Led',         type: 'cert', icon: '✓' },
      { name: 'Smooth Finish Guarantee · 2-Year Workmanship', type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Service Types',
    items: [
      { name: 'Drywall Hanging',         type: 'tool', icon: '🛠️' },
      { name: 'Taping & Finishing',     type: 'tool', icon: '🛠️' },
      { name: 'Texture Matching',       type: 'tool', icon: '🛠️' },
      { name: 'Water Damage Drywall',   type: 'tool', icon: '🛠️' },
      { name: 'Popcorn Removal',        type: 'tool', icon: '🛠️' },
      { name: 'Patch & Repair',         type: 'tool', icon: '🛠️' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Prepared Pros, Quality Materials',
  subtitle = 'We show up stocked for common residential repairs — bonded & insured, insured, no shortcuts on materials.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Tools and credentials">
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Work With</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <div key={gi} className={styles.group}>
              <span className={styles.groupLabel}>{group.label}</span>
              <div className={styles.items}>
                {group.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    className={`${styles.item} ${item.type === 'cert' ? styles.itemCert : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ delay: gi * 0.06 + ii * 0.04, duration: 0.4, ease: 'easeOut' }}
                  >
                    {item.type === 'cert' ? (
                      <div className={styles.certCheck} aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                    ) : (
                      <div className={styles.itemDot} aria-hidden="true" />
                    )}
                    <span className={styles.itemName}>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;

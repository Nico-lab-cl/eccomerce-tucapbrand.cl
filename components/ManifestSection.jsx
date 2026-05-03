import styles from './ManifestSection.module.css';

const SPECS = [
  { label: 'MATERIAL', value: '100% PREMIUM WOOL BLEND' },
  { label: 'CONSTRUCTION', value: 'STRUCTURED HIGH CROWN' },
  { label: 'FIT', value: '59FIFTY® FITTED' },
  { label: 'VISOR', value: 'FLAT BRIM — GREY UNDERVISOR' },
  { label: 'CLOSURE', value: 'FITTED — TRUE TO SIZE' },
  { label: 'ORIGIN', value: 'DESIGNED IN NEW YORK CITY' },
  { label: 'EDITION', value: 'LIMITED RUN — 250 UNITS' },
];

export default function ManifestSection() {
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.sectionTag}>003</span>
          <h2 className="headline-lg">THE MANIFEST</h2>
        </div>
      </div>

      <div className={styles.layout}>
        {/* Left: Brand Statement */}
        <div className={styles.statement}>
          <p className={styles.statementText}>
            TUCAP IS NOT A BRAND.<br />
            IT IS A STRUCTURE.<br />
            A GRID OF INTENTION<br />
            BUILT ON CONCRETE<br />
            AND RAW MATERIAL.
          </p>
          <div className={styles.statementMeta}>
            <span className="label-caps" style={{ color: 'var(--secondary)' }}>EST. 2024</span>
            <span className="label-caps" style={{ color: 'var(--outline)' }}>NEW YORK, NY</span>
          </div>
        </div>

        {/* Right: Spec Sheet */}
        <div className={styles.specs}>
          <div className={styles.specsTitle}>
            <span className="label-caps" style={{ color: 'var(--secondary)' }}>PRODUCT SPECIFICATIONS</span>
          </div>
          {SPECS.map((spec, i) => (
            <div key={i} className={styles.specRow}>
              <span className={styles.specLabel}>{spec.label}</span>
              <span className={styles.specDivider} />
              <span className={styles.specValue}>{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import styles from './CategoryBanner.module.css';

export default function CategoryBanner() {
  return (
    <section className={styles.section}>
      {/* Section Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.sectionTag}>002</span>
          <h2 className="headline-lg">CATEGORIES</h2>
        </div>
      </div>

      <div className={styles.grid}>
        {/* Headwear */}
        <Link href="/headwear" className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src="/cap-varsity.png"
              alt="Headwear Collection"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.cardOverlay} />
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardLabel}>COLLECTION</span>
            <h3 className={styles.cardTitle}>HEADWEAR</h3>
            <span className={styles.cardCta}>EXPLORE →</span>
          </div>
        </Link>

        {/* Apparel */}
        <Link href="/apparel" className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src="/cap-camo.png"
              alt="Apparel Collection"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.cardOverlay} />
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardLabel}>COLLECTION</span>
            <h3 className={styles.cardTitle}>APPAREL</h3>
            <span className={styles.cardCta}>EXPLORE →</span>
          </div>
        </Link>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './releases.module.css';

const ALL_PRODUCTS = [
  { id: 1, name: 'NY 59FIFTY "ROSES"', slug: 'ny-59fifty-roses', price: 65.00, image: '/cap-roses.png', tag: 'NEW' },
  { id: 2, name: 'SUPREME x NY 59FIFTY', slug: 'supreme-ny-59fifty', price: 85.00, image: '/cap-supreme.png', tag: 'COLLAB' },
  { id: 3, name: 'LA 59FIFTY "STRAWBERRY"', slug: 'la-59fifty-strawberry', price: 65.00, image: '/cap-strawberry.png', tag: null },
  { id: 4, name: 'WHITE SOX 2003 ALL-STAR', slug: 'white-sox-allstar-2003', price: 65.00, image: '/cap-allstar.png', tag: 'LIMITED' },
  { id: 5, name: 'VARSITY "FOREST"', slug: 'varsity-forest', price: 55.00, image: '/cap-varsity.png', tag: null },
  { id: 6, name: 'TACTICAL "CAMO"', slug: 'tactical-camo', price: 60.00, image: '/cap-camo.png', tag: 'NEW' },
];

export const metadata = {
  title: 'RELEASES — TUCAP',
  description: 'Browse all TUCAP streetwear releases. Premium fitted caps and headwear.',
};

export default function ReleasesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <div className={styles.headerContent}>
            <span className={styles.eyebrow}>ALL RELEASES</span>
            <h1 className={styles.pageTitle}>THE ARCHIVE</h1>
            <p className={styles.pageSubtitle}>
              Every drop. Every collaboration. The complete TUCAP catalog.
            </p>
          </div>
          <div className={styles.headerStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{ALL_PRODUCTS.length}</span>
              <span className={styles.statLabel}>PRODUCTS</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>SS26</span>
              <span className={styles.statLabel}>SEASON</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className={styles.filterBar}>
          <span className={styles.filterLabel}>FILTER</span>
          <div className={styles.filters}>
            <button className={`${styles.filterBtn} ${styles.filterBtnActive}`}>ALL</button>
            <button className={styles.filterBtn}>NEW</button>
            <button className={styles.filterBtn}>COLLAB</button>
            <button className={styles.filterBtn}>LIMITED</button>
          </div>
          <span className={styles.filterCount}>{ALL_PRODUCTS.length} ITEMS</span>
        </div>

        {/* Products Grid */}
        <div className={styles.grid}>
          {ALL_PRODUCTS.map((product) => (
            <Link
              href={`/product/${product.slug}`}
              key={product.id}
              className={styles.card}
            >
              {product.tag && (
                <span className={styles.tag}>{product.tag}</span>
              )}
              <div className={styles.imageWrap}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className={styles.info}>
                <span className={styles.name}>{product.name}</span>
                <span className={styles.price}>${product.price.toFixed(2)}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductGrid.module.css';

const PRODUCTS = [
  {
    id: 1,
    name: 'NY 59FIFTY "ROSES"',
    slug: 'ny-59fifty-roses',
    price: 65.00,
    image: '/cap-roses.png',
    tag: 'NEW',
  },
  {
    id: 2,
    name: 'SUPREME x NY 59FIFTY',
    slug: 'supreme-ny-59fifty',
    price: 85.00,
    image: '/cap-supreme.png',
    tag: 'COLLAB',
  },
  {
    id: 3,
    name: 'LA 59FIFTY "STRAWBERRY"',
    slug: 'la-59fifty-strawberry',
    price: 65.00,
    image: '/cap-strawberry.png',
    tag: null,
  },
  {
    id: 4,
    name: 'WHITE SOX 2003 ALL-STAR',
    slug: 'white-sox-allstar-2003',
    price: 65.00,
    image: '/cap-allstar.png',
    tag: 'LIMITED',
  },
];

export default function ProductGrid() {
  return (
    <section className={styles.section}>
      {/* Section Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.sectionTag}>001</span>
          <h2 className="headline-lg">LATEST DROPS</h2>
        </div>
        <Link href="/releases" className={styles.viewAll}>
          VIEW ALL →
        </Link>
      </div>

      {/* Products */}
      <div className={styles.grid}>
        {PRODUCTS.map((product, i) => (
          <Link
            href={`/product/${product.slug}`}
            key={product.id}
            className={styles.card}
            style={{ animationDelay: `${i * 0.1}s` }}
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
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className={styles.info}>
              <div>
                <span className={styles.name}>{product.name}</span>
              </div>
              <span className={styles.price}>${product.price.toFixed(2)}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

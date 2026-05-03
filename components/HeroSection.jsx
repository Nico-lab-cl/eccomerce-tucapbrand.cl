'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    }
  }, []);

  return (
    <section className={styles.hero}>
      {/* Left: Title Block */}
      <div className={styles.titleBlock}>
        <div className={styles.titleInner} ref={titleRef}>
          <span className={styles.eyebrow}>SS26 COLLECTION</span>
          <h1 className={styles.title}>
            LATEST<br />DROPS
          </h1>
          <p className={styles.subtitle}>
            Brutalist apparel engineered for the urban grid. 
            No compromises. No filler. Just raw execution.
          </p>
          <div className={styles.ctas}>
            <Link href="/releases" className="btn btn-primary btn-lg">
              SHOP RELEASES
            </Link>
            <Link href="/headwear" className="btn btn-secondary btn-lg">
              HEADWEAR
            </Link>
          </div>
        </div>
      </div>

      {/* Right: Hero Image */}
      <div className={styles.imageBlock}>
        <div className={styles.imageWrapper}>
          <Image
            src="/hero.png"
            alt="TUCAP Streetwear Collection"
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className={styles.imageOverlay} />
        </div>
        <div className={styles.imageTag}>
          <span className="label-caps">EDITORIAL — VOL. 01</span>
        </div>
      </div>
    </section>
  );
}

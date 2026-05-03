'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className={styles.header}>
      {/* Announcement Bar */}
      <div className={styles.announcement}>
        <div className={styles.marquee}>
          <div className="marquee-track">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="marquee-item">
                FREE SHIPPING ON ORDERS OVER $100 &nbsp;★&nbsp; 
                NEW DROPS EVERY FRIDAY &nbsp;★&nbsp; 
                BRUTALIST APPAREL. DESIGNED IN THE GRIT. BUILT FOR THE GRID. &nbsp;★&nbsp;
                FREE SHIPPING ON ORDERS OVER $100 &nbsp;★&nbsp; 
                NEW DROPS EVERY FRIDAY &nbsp;★&nbsp; 
                BRUTALIST APPAREL. DESIGNED IN THE GRIT. BUILT FOR THE GRID. &nbsp;★&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          TUCAP
        </Link>

        <div className={`${styles.links} ${mobileOpen ? styles.linksOpen : ''}`}>
          <Link href="/releases" className={styles.link} onClick={() => setMobileOpen(false)}>RELEASES</Link>
          <Link href="/headwear" className={styles.link} onClick={() => setMobileOpen(false)}>HEADWEAR</Link>
          <Link href="/apparel" className={styles.link} onClick={() => setMobileOpen(false)}>APPAREL</Link>
          <Link href="/about" className={styles.link} onClick={() => setMobileOpen(false)}>ABOUT</Link>
        </div>

        <div className={styles.actions}>
          <Link href="/cart" className={styles.cartBtn} aria-label="Shopping cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
          </Link>

          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineOpen1 : ''}`} />
            <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineOpen2 : ''}`} />
          </button>
        </div>
      </nav>
    </header>
  );
}

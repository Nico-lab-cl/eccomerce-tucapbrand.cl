'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Newsletter */}
      <div className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2 className="headline-lg">JOIN THE GRID</h2>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: 'var(--space-2)' }}>
            First access to new drops, exclusive releases, and the raw feed.
          </p>
        </div>
        <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            className={styles.newsletterInput}
            aria-label="Email for newsletter"
          />
          <button type="submit" className="btn btn-primary">SUBSCRIBE</button>
        </form>
      </div>

      {/* Footer Grid */}
      <div className={styles.grid}>
        <div className={styles.col}>
          <span className={styles.colTitle}>NAVIGATE</span>
          <Link href="/releases" className={styles.colLink}>Releases</Link>
          <Link href="/headwear" className={styles.colLink}>Headwear</Link>
          <Link href="/apparel" className={styles.colLink}>Apparel</Link>
          <Link href="/about" className={styles.colLink}>About</Link>
        </div>
        <div className={styles.col}>
          <span className={styles.colTitle}>LEGAL</span>
          <Link href="/terms" className={styles.colLink}>Terms of Service</Link>
          <Link href="/privacy" className={styles.colLink}>Privacy Policy</Link>
          <Link href="/shipping" className={styles.colLink}>Shipping & Returns</Link>
        </div>
        <div className={styles.col}>
          <span className={styles.colTitle}>CONTACT</span>
          <a href="mailto:info@tucap.com" className={styles.colLink}>info@tucap.com</a>
          <a href="https://instagram.com/tucap" className={styles.colLink} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com/tucap" className={styles.colLink} target="_blank" rel="noopener noreferrer">Twitter / X</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <span className={styles.bottomText}>© {new Date().getFullYear()} TUCAP. ALL RIGHTS RESERVED.</span>
        <span className={styles.bottomText}>BRUTALIST APPAREL. DESIGNED IN THE GRIT. BUILT FOR THE GRID.</span>
      </div>
    </footer>
  );
}

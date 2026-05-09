'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/aralis-logo.png"
            alt="Aralis – Alfajores Artesanales"
            width={160}
            height={80}
            className={styles.logoImg}
            priority
          />
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          <Link href="/#sabores" onClick={() => setMenuOpen(false)}>Sabores</Link>
          <Link href="/#historia" onClick={() => setMenuOpen(false)}>Nuestra Historia</Link>
          <Link href="/#colecciones" onClick={() => setMenuOpen(false)}>Colecciones</Link>
          <Link href="/#contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
        </div>

        <div className={styles.actions}>
          <Link href="/tienda" className={styles.shopBtn}>
            Tienda
          </Link>
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
          </button>
        </div>
      </nav>
    </header>
  );
}

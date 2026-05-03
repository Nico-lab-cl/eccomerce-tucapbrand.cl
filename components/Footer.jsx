'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contacto" className={styles.footer}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.newsletter}>
          <h3 className="headline-md">Únete a nuestra lista</h3>
          <p className="body-md">
            Recibe invitaciones a degustaciones exclusivas y lanzamientos de temporada.
          </p>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className={styles.input}
              required
            />
            <button type="submit" className="btn btn-primary">
              Suscribirse
            </button>
          </form>
        </div>

        <div className={styles.navGrid}>
          <div className={styles.navCol}>
            <span className="label-sm">Tienda</span>
            <Link href="/tienda">Todos los Alfajores</Link>
            <Link href="/tienda?categoria=cajas">Cajas de Regalo</Link>
            <Link href="/tienda?categoria=corporativo">Pedidos Corporativos</Link>
          </div>
          
          <div className={styles.navCol}>
            <span className="label-sm">Marca</span>
            <Link href="/#historia">Nuestra Historia</Link>
            <Link href="/contacto">Contacto</Link>
            <Link href="/faq">Preguntas Frecuentes</Link>
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomContent}>
            <span className={styles.copyright}>
              © {new Date().getFullYear()} Chocoblingblau. Elaborado en Chile.
            </span>
            <div className={styles.legal}>
              <Link href="/legal/privacidad">Privacidad</Link>
              <Link href="/legal/terminos">Términos</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

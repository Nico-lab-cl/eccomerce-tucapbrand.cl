import Image from 'next/image';
import Link from 'next/link';
import styles from './CategoryBanner.module.css';

export default function CategoryBanner() {
  return (
    <section id="colecciones" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="label-sm">Colecciones</span>
          <h2 className="headline-xl" style={{ marginTop: '12px' }}>
            El regalo perfecto
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Box de 6 */}
          <Link href="/tienda" className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src="/alfajor-box.png"
                alt="Caja de 6 alfajores artesanales Chocoblingblau"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className="headline-md">Caja Selección — 6 unidades</h3>
              <p className="body-md">
                Nuestra caja insignia con una selección curada de los tres sabores.
                El regalo ideal para los amantes del buen chocolate.
              </p>
              <span className={styles.price}>$15.900</span>
              <span className={styles.link}>Ver detalles →</span>
            </div>
          </Link>

          {/* Envoltorio individual */}
          <Link href="/tienda" className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src="/alfajor-wrapped.png"
                alt="Alfajores envueltos individualmente con sello artesanal"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className="headline-md">Envueltos Individualmente</h3>
              <p className="body-md">
                Cada alfajor va envuelto a mano en papel artesanal con sello dorado.
                Perfecto para eventos corporativos y regalos personalizados.
              </p>
              <span className={styles.price}>Desde $2.900 c/u</span>
              <span className={styles.link}>Personalizar →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

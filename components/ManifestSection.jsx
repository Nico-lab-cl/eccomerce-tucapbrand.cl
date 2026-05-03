import Link from 'next/link';
import styles from './ManifestSection.module.css';

export default function ManifestSection() {
  return (
    <section id="historia" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.story}>
            <span className="label-sm">Nuestra Historia</span>
            <h2 className="headline-lg" style={{ marginTop: '16px', marginBottom: '24px' }}>
              De una receta familiar<br />a tu paladar.
            </h2>
            <p className="body-lg" style={{ marginBottom: '16px' }}>
              En Chocoblingblau, creemos que un alfajor no es solo un dulce, 
              es un ritual. Todo comenzó en la cocina de nuestra abuela, donde 
              el aroma a manjar cociéndose lentamente llenaba la casa.
            </p>
            <p className="body-lg" style={{ marginBottom: '32px' }}>
              Hoy, mantenemos viva esa tradición. Nuestras galletas se hornean 
              diariamente, nuestro manjar sigue siendo de campo, y utilizamos 
              exclusivamente chocolate belga de alta pureza para crear una 
              experiencia sensorial inigualable.
            </p>
            <Link href="/sobre-nosotros" className="btn btn-outline">
              Leer más sobre nosotros
            </Link>
          </div>

          <div className={styles.specs}>
            <div className={styles.specHeader}>
              <span className="label-sm">El Ritual del Sabor</span>
            </div>
            
            <div className={styles.specList}>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>COBERTURA</span>
                <span className={styles.specValue}>Chocolate Belga (70% o Blanco)</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>RELLENO</span>
                <span className={styles.specValue}>Manjar de Campo Artesanal</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>MASA</span>
                <span className={styles.specValue}>Galleta Suave Tradicional</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>ELABORACIÓN</span>
                <span className={styles.specValue}>100% a Mano en Chile</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>CADUCIDAD</span>
                <span className={styles.specValue}>30 Días (Sin preservantes)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

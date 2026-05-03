import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className="label-sm">Alfajores Artesanales de Autor</span>
        <h1 className={styles.title}>
          El arte del<br />
          <span className={styles.accent}>alfajor</span>
        </h1>
        <p className={styles.subtitle}>
          Elaborados a mano con chocolate belga, manjar de campo 
          y recetas heredadas. Cada bocado es una experiencia.
        </p>
        <div className={styles.ctas}>
          <Link href="/tienda" className="btn btn-primary">
            Explorar Colección
          </Link>
          <Link href="/#historia" className="btn btn-outline">
            Nuestra Historia
          </Link>
        </div>
      </div>
      <div className={styles.imageWrap}>
        <Image
          src="/alfajor-hero.png"
          alt="Composición artesanal de alfajores premium Chocoblingblau"
          fill
          style={{ objectFit: 'cover' }}
          sizes="50vw"
          priority
        />
      </div>
    </section>
  );
}

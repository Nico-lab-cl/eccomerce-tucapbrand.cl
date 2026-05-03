import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductGrid.module.css';

const SABORES = [
  {
    name: 'Chocolate 70% Cacao',
    slug: 'chocolate-70',
    description: 'Cobertura de chocolate belga oscuro con manjar de campo.',
    image: '/alfajor-chocolate.png',
    price: '$2.900',
    tag: '70% Cocoa',
  },
  {
    name: 'Chocolate Blanco',
    slug: 'chocolate-blanco',
    description: 'Delicada cobertura de chocolate blanco con manjar cremoso.',
    image: '/alfajor-white.png',
    price: '$2.900',
    tag: 'Clásico',
  },
  {
    name: 'Caramelo & Sal',
    slug: 'caramelo-sal',
    description: 'Caramelo dorado con un toque de flor de sal de Cáhuil.',
    image: '/alfajor-caramel.png',
    price: '$3.200',
    tag: 'Premium',
  },
];

export default function ProductGrid() {
  return (
    <section id="sabores" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="label-sm">Nuestros Sabores</span>
          <h2 className="headline-xl" style={{ marginTop: '12px' }}>
            Tres expresiones<br />del alfajor perfecto
          </h2>
          <p className="body-lg" style={{ marginTop: '16px', maxWidth: '480px' }}>
            Cada variedad es una receta única, elaborada con ingredientes 
            seleccionados a mano y técnicas artesanales.
          </p>
        </div>

        <div className={styles.grid}>
          {SABORES.map((sabor) => (
            <Link
              key={sabor.slug}
              href={`/product/${sabor.slug}`}
              className={styles.card}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={sabor.image}
                  alt={sabor.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.cardInfo}>
                <span className="chip">{sabor.tag}</span>
                <h3 className={styles.cardName}>{sabor.name}</h3>
                <p className={styles.cardDesc}>{sabor.description}</p>
                <span className={styles.cardPrice}>{sabor.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

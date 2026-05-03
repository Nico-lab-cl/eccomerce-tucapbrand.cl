'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './ProductPage.module.css';

const PRODUCTS = {
  'ny-59fifty-roses': {
    id: '1', name: 'NY 59FIFTY "ROSES"', price: 65.00, image: '/cap-roses.png',
    description: 'Premium New York Yankees fitted cap with hand-embroidered rose detailing. Structured high crown. Grey undervisor. Limited edition.',
    sizes: ['7', '7 1/8', '7 1/4', '7 3/8', '7 1/2'],
    specs: [
      { label: 'MATERIAL', value: '100% PREMIUM WOOL' },
      { label: 'CROWN', value: 'STRUCTURED HIGH' },
      { label: 'VISOR', value: 'FLAT — GREY UNDER' },
      { label: 'EMBROIDERY', value: 'RAISED FLORAL' },
      { label: 'EDITION', value: 'LIMITED — 250 UNITS' },
    ],
  },
  'supreme-ny-59fifty': {
    id: '2', name: 'SUPREME x NY 59FIFTY', price: 85.00, image: '/cap-supreme.png',
    description: 'Exclusive Supreme collaboration with New Era. Black crown with iconic box logo side patch. Ultra-limited release.',
    sizes: ['7', '7 1/8', '7 1/4', '7 3/8'],
    specs: [
      { label: 'MATERIAL', value: '100% POLYESTER' },
      { label: 'CROWN', value: 'STRUCTURED HIGH' },
      { label: 'COLLABORATION', value: 'SUPREME x NEW ERA' },
      { label: 'PATCH', value: 'WOVEN BOX LOGO' },
      { label: 'EDITION', value: 'ULTRA-LIMITED — 100 UNITS' },
    ],
  },
  'la-59fifty-strawberry': {
    id: '3', name: 'LA 59FIFTY "STRAWBERRY"', price: 65.00, image: '/cap-strawberry.png',
    description: 'Los Angeles Dodgers fitted in a bold strawberry pink colorway. Structured high crown with green undervisor.',
    sizes: ['7', '7 1/8', '7 1/4', '7 3/8', '7 1/2'],
    specs: [
      { label: 'MATERIAL', value: '100% PREMIUM WOOL' },
      { label: 'COLORWAY', value: 'STRAWBERRY PINK' },
      { label: 'UNDERVISOR', value: 'GREEN' },
      { label: 'CROWN', value: 'STRUCTURED HIGH' },
      { label: 'EDITION', value: 'SEASONAL DROP' },
    ],
  },
  'white-sox-allstar-2003': {
    id: '4', name: 'WHITE SOX 2003 ALL-STAR', price: 65.00, image: '/cap-allstar.png',
    description: 'Chicago White Sox 2003 All-Star Game commemorative fitted. Black crown with gold All-Star patch.',
    sizes: ['7 1/8', '7 1/4', '7 3/8', '7 1/2'],
    specs: [
      { label: 'MATERIAL', value: '100% PREMIUM WOOL' },
      { label: 'PATCH', value: '2003 ALL-STAR GAME' },
      { label: 'CROWN', value: 'STRUCTURED HIGH' },
      { label: 'UNDERVISOR', value: 'GREY' },
      { label: 'EDITION', value: 'COLLECTOR\'S — 150 UNITS' },
    ],
  },
  'varsity-forest': {
    id: '5', name: 'VARSITY "FOREST"', price: 55.00, image: '/cap-varsity.png',
    description: 'Dark forest green fitted with varsity letter embroidery. Wool blend construction.',
    sizes: ['7', '7 1/4', '7 1/2'],
    specs: [
      { label: 'MATERIAL', value: 'WOOL BLEND' },
      { label: 'COLORWAY', value: 'FOREST GREEN' },
      { label: 'EMBROIDERY', value: 'VARSITY LETTER' },
      { label: 'CROWN', value: 'STRUCTURED' },
      { label: 'EDITION', value: 'STANDARD RELEASE' },
    ],
  },
  'tactical-camo': {
    id: '6', name: 'TACTICAL "CAMO"', price: 60.00, image: '/cap-camo.png',
    description: 'Military-inspired camouflage fitted cap. Olive/tan woodland pattern. Blacked-out eyelets.',
    sizes: ['7', '7 1/4', '7 1/2'],
    specs: [
      { label: 'MATERIAL', value: 'RIPSTOP NYLON' },
      { label: 'PATTERN', value: 'WOODLAND CAMO' },
      { label: 'EYELETS', value: 'BLACKED OUT' },
      { label: 'CROWN', value: 'STRUCTURED HIGH' },
      { label: 'EDITION', value: 'TACTICAL DROP' },
    ],
  },
};

export default function ProductPage() {
  const params = useParams();
  const product = PRODUCTS[params.slug];
  const [selectedSize, setSelectedSize] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className={styles.notFound}>
          <h1 className="headline-lg">PRODUCT NOT FOUND</h1>
          <Link href="/" className="btn btn-secondary" style={{ marginTop: '24px' }}>BACK TO HOME</Link>
        </div>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>HOME</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link href="/releases" className={styles.breadcrumbLink}>RELEASES</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>{product.name}</span>
        </div>

        {/* Product Layout */}
        <div className={styles.layout}>
          {/* Image */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Details */}
          <div className={styles.detailsCol}>
            <div className={styles.details}>
              <span className={styles.tag}>HEADWEAR</span>
              <h1 className={styles.name}>{product.name}</h1>
              <span className={styles.price}>${product.price.toFixed(2)}</span>

              <p className={styles.description}>{product.description}</p>

              {/* Size Selector */}
              <div className={styles.sizeSection}>
                <span className={styles.sizeLabel}>SIZE</span>
                <div className={styles.sizes}>
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`${styles.sizeBtn} ${selectedSize === size ? styles.sizeBtnActive : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <button
                className={`btn btn-primary btn-lg ${styles.addBtn}`}
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                {addedToCart ? '✓ ADDED TO CART' : selectedSize ? 'ADD TO CART' : 'SELECT SIZE'}
              </button>

              {/* Specs */}
              <div className={styles.specs}>
                <span className={styles.specsTitle}>SPECIFICATIONS</span>
                {product.specs.map((spec, i) => (
                  <div key={i} className={styles.specRow}>
                    <span className={styles.specLabel}>{spec.label}</span>
                    <span className={styles.specDivider} />
                    <span className={styles.specValue}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

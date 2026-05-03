'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './cart.module.css';

const INITIAL_CART = [
  {
    id: 1,
    name: 'NY 59FIFTY "ROSES"',
    slug: 'ny-59fifty-roses',
    price: 65.00,
    image: '/cap-roses.png',
    size: '7 1/4',
    quantity: 1,
  },
];

export default function CartPage() {
  const [items, setItems] = useState(INITIAL_CART);

  const updateQty = (id, delta) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 12.00;
  const total = subtotal + shipping;

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className="headline-lg">YOUR CART</h1>
          <span className={styles.count}>{items.length} ITEM{items.length !== 1 ? 'S' : ''}</span>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <p className="headline-md">CART IS EMPTY</p>
            <Link href="/releases" className="btn btn-primary" style={{ marginTop: '24px' }}>
              BROWSE RELEASES
            </Link>
          </div>
        ) : (
          <div className={styles.layout}>
            {/* Items */}
            <div className={styles.items}>
              {/* Table Header */}
              <div className={styles.tableHeader}>
                <span className={styles.thProduct}>PRODUCT</span>
                <span className={styles.thSize}>SIZE</span>
                <span className={styles.thQty}>QTY</span>
                <span className={styles.thPrice}>TOTAL</span>
                <span className={styles.thRemove}></span>
              </div>

              {items.map((item) => (
                <div key={item.id} className={styles.row}>
                  <div className={styles.rowProduct}>
                    <div className={styles.rowImage}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="80px"
                      />
                    </div>
                    <Link href={`/product/${item.slug}`} className={styles.rowName}>
                      {item.name}
                    </Link>
                  </div>
                  <span className={styles.rowSize}>{item.size}</span>
                  <div className={styles.rowQty}>
                    <button className={styles.qtyBtn} onClick={() => updateQty(item.id, -1)}>−</button>
                    <span className={styles.qtyVal}>{item.quantity}</span>
                    <button className={styles.qtyBtn} onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                  <span className={styles.rowPrice}>${(item.price * item.quantity).toFixed(2)}</span>
                  <button className={styles.removeBtn} onClick={() => removeItem(item.id)} aria-label="Remove item">
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className={styles.summary}>
              <div className={styles.summaryTitle}>ORDER SUMMARY</div>
              <div className={styles.summaryRow}>
                <span>SUBTOTAL</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>SHIPPING</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                <span>TOTAL</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 'var(--space-4)' }}>
                CHECKOUT
              </button>
              <Link href="/releases" className={styles.continueShopping}>
                ← CONTINUE SHOPPING
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

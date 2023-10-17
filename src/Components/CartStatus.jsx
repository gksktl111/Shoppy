import styles from './CartStatus.module.css';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useCart from '../Hook/useCart';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className={styles.cart__container}>
      <AiOutlineShoppingCart className={styles.cart} />
      {products && <p className={styles.cart__count}>{products.length}</p>}
    </div>
  );
}

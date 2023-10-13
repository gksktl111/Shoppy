import React from 'react';
import Card from './Card';
import { loadProducts } from '../api/firebase';
import styles from './CardList.module.css';
import { useQuery } from '@tanstack/react-query';
export default function CardList() {
  const {
    isLoding,
    error,
    data: products,
  } = useQuery(['products'], loadProducts);

  return (
    <>
      {isLoding && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className={styles.cardList__container}>
        {products &&
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}

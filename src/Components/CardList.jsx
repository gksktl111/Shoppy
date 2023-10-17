import React from 'react';
import Card from './Card';
import styles from './CardList.module.css';
import useProducts from '../Hook/useProducts';

export default function CardList() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      {isLoading && <p>Loading...</p>}
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

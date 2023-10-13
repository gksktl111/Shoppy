import React from 'react';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';

export default function Card({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate(`/products/${id}`, { state: { product } });
  };

  return (
    <>
      <div className={styles.img__container} onClick={navigateToDetail}>
        <img className={styles.img} src={image} alt={title} />
        <div className={styles.img__data}>
          <div className={styles.product__mainData}>
            <span>{title}</span>
            <span>￦{price}</span>
          </div>
          <div className={styles.product__subData}>{category}</div>
        </div>
      </div>
    </>
  );
}

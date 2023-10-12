import React from 'react';
import { useParams } from 'react-router-dom';
import { loadProduct } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import styles from './ProductDetail.module.css';

export default function ProductDetail() {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: product,
  } = useQuery(['product'], () => loadProduct(id));

  const handleAddCart = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {product && (
        <div className={styles.container}>
          <img src={product.imgae} alt={product.title} />
          <div className={styles.description__container}>
            <div>
              <p>{product.title}</p>
              <p>￦{product.price}</p>
            </div>
            <p>{product.description}</p>

            <form onSubmit={handleAddCart}>
              <div>
                <span>옵션 : </span>
                <select>
                  {product.options[0] && <option value='S'>S</option>}
                  {product.options[1] && <option value='M'>M</option>}
                  {product.options[2] && <option value='L'>L</option>}
                  {product.options[3] && <option value='XL'>XL</option>}
                </select>
              </div>
              <button>장바구니에 추가</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

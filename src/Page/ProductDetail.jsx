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
        <div>
          <img src={product.imgae} alt={product.title} />
          <div>
            <span>{product.title}</span>
            <span>￦{product.price}</span>
            <span>{product.description}</span>

            <form onSubmit={handleAddCart}>
              <span>옵션 : </span>
              <select>
                <option value='javascript'>JavaScript</option>
                <option value='php'>PHP</option>
                <option value='java'>Java</option>
                <option value='golang'>Golang</option>
                <option value='python'>Python</option>
                <option value='c#'>C#</option>
                <option value='C++'>C++</option>
                <option value='erlang'>Erlang</option>
              </select>
              <button>장바구니에 추가</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

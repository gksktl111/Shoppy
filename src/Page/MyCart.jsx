import React from 'react';
import CartItem from '../Components/CartItem';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../Components/PriceCard';
import styles from './MyCart.module.css';
import Button from './../Components/ui/Button';
import useCart from '../Hook/useCart';

const SHIPPING = 3000;

export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    hasProducts &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section className={styles.container}>
      <h1 className={styles.topTitle}>내 장바구니</h1>
      {!hasProducts && <p>장바구니에 상품이 없습니다. 열심히 쇼핑해 주세요!</p>}
      {hasProducts && (
        <>
          <ul className={styles.ul}>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className={styles.totalPrice__container}>
            <PriceCard text='상품총액' price={totalPrice} />
            <BsFillPlusCircleFill className={styles.icon} />
            <PriceCard text='상품총액' price={SHIPPING} />
            <FaEquals className={styles.icon} />
            <PriceCard text='상품총액' price={totalPrice + SHIPPING} />
          </div>
          <Button text='주문하기' />
        </>
      )}
    </section>
  );
}

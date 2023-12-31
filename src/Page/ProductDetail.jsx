import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ProductDetail.module.css';
import Button from '../Components/ui/Button';
import useCart from '../Hook/useCart';

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();

  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();

  const [selected, setSelected] = useState(options && options[0]);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleAddCart = (e) => {
    e.preventDefault();

    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product);
  };

  return (
    <section>
      <section className={styles.container}>
        <img src={image} alt={title} className={styles.product__img} />
        <div className={styles.description__container}>
          <p>{category}</p>
          <p className={styles.product__title}>{title}</p>
          <p className={styles.product__price}>￦{price}</p>
          <p className={styles.product__description}>{description}</p>

          <form onSubmit={handleAddCart}>
            <div className={styles.option__container}>
              <label htmlFor='select' className={styles.option__span}>
                옵션:
              </label>
              <select
                id='select'
                className={styles.select}
                onChange={handleSelect}
                value={selected}
              >
                {options &&
                  options.map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
              </select>
            </div>
            <Button text={'장바구니 추가'} />
          </form>
        </div>
      </section>
    </section>
  );
}

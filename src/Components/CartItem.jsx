import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import styles from './CartItem.module.css';
import useCart from '../Hook/useCart';

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
}) {
  const { addOrUpdateItem, removeItem } = useCart();
  const handeleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };

  const handelePlus = () => {
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });
  };

  const handeleDelete = () => removeItem.mutate(id);

  return (
    <li className={styles.li}>
      <img src={image} alt={title} className={styles.img} />
      <div className={styles.product__container}>
        <div className={styles.data}>
          <p className={styles.title}>{title}</p>
          <p className={styles.option}>{option}</p>
          <p className={styles.price}>￦{price}</p>
        </div>
        <div className={styles.btn}>
          <AiOutlineMinusSquare onClick={handeleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare onClick={handelePlus} />
          <RiDeleteBin5Fill onClick={handeleDelete} />
        </div>
      </div>
    </li>
  );
}

import React from 'react';
import style from './NewProduct.module.css';

export default function NewProduct() {
  return (
    <section className={style.container}>
      <h1 className={style.header}>새로운 제품 등록 </h1>
      <form className={style.form}>
        <input className={style.input} type='text' />
        <input className={style.input} type='text' />
        <input className={style.input} type='text' />
        <input className={style.input} type='text' />
        <input className={style.input} type='text' />
        <input className={style.input} type='text' />
        <button>제품등록하기</button>
      </form>
    </section>
  );
}

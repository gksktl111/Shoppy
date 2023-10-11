import React from 'react';
import CardList from '../Components/CardList';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.banner__container} />
      <CardList />
    </div>
  );
}

import React from 'react';
import styles from './User.module.css';

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className={styles.container}>
      <img src={photoURL} alt={displayName} className={styles.img} />
      <span className={styles.name}>{displayName}</span>
    </div>
  );
}

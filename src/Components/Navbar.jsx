import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import { login, logout, onuserStateChange } from '../api/firebase';
import User from './User';

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onuserStateChange(setUser);
  }, []);

  console.log(user.uid);

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.title__container}>
        <FiShoppingBag className={styles.logo} />
        <h1 className={styles.title}>Shoppy</h1>
      </Link>
      <nav className={styles.nav}>
        <Link to='/products'>Products</Link>
        {user && <Link to='/carts'>Carts</Link>}
        {user && (
          <Link to='/products/new'>
            <BsFillPencilFill />
          </Link>
        )}

        <div className={styles.userInfo}>
          {user && <User user={user} />}
          {!user && (
            <button className={styles.login} onClick={login}>
              Login
            </button>
          )}
          {user && (
            <button className={styles.login} onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

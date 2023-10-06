import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from './Context/AuthContext';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.title__container}>
        <FiShoppingBag className={styles.logo} />
        <h1 className={styles.title}>Shoppy</h1>
      </Link>
      <nav className={styles.nav}>
        <Link to='/products'>Products</Link>
        {user && <Link to='/carts'>Carts</Link>}
        {user && user.isAdmin && (
          <Link to='/products/new'>
            <BsFillPencilFill />
          </Link>
        )}

        <div className={styles.userInfo}>
          {user && <User user={user} />}
          {!user && <Button text={'Login'} onClick={login} />}
          {user && <Button text={'Logout'} onClick={logout} />}
        </div>
      </nav>
    </header>
  );
}

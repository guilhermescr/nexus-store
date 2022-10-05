import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import Logo from '../../img/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={Logo} alt="Nexus Store Logo" />
      </Link>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/products">Products</Link>
        </li>
        <li className={styles.item}>
          <Link to="/aboutus">About Us</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;

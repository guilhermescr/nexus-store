import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import Logo from '../../img/logo.png';
import LogoV2 from '../../img/logo_v2.png';

function Header() {
  const [navbarMenuVisible, setNavbarMenuVisible] = useState(false);

  function toggleNavbarVisibility(navbarState) {
    if (!navbarMenuVisible) {
      // open menu
      document.body.style.overflowY = 'hidden';

      document.querySelector(
        '#navbar'
      ).classList = `${styles.navbar} ${styles.visible}`;
    } else {
      // close menu
      document.body.style.overflowY = 'auto';

      document.querySelector('#navbar').classList = `${styles.navbar}`;
    }
    setNavbarMenuVisible(navbarState);
  }

  return (
    <header id="header" className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={LogoV2} alt="Nexus Store Logo" />
      </Link>

      <div
        onClick={() => {
          toggleNavbarVisibility(true);
        }}
        role="button"
        className={styles.hamburger_menu_container}
      >
        <div className={styles.hamburger_bar}></div>
        <div className={styles.hamburger_bar}></div>
        <div className={styles.hamburger_bar}></div>
      </div>

      <nav id="navbar" className={styles.navbar}>
        <div
          onClick={() => {
            toggleNavbarVisibility(false);
          }}
          className={styles.close_menu_container}
        >
          <div className={styles.close_bar_axis}></div>
          <div className={styles.close_bar_axis}></div>
        </div>

        <img className={styles.logo} src={Logo} alt="Nexus Store Logo" />

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link
              onClick={() => {
                toggleNavbarVisibility(false);
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              onClick={() => {
                toggleNavbarVisibility(false);
              }}
              to="/products"
            >
              Products
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              onClick={() => {
                toggleNavbarVisibility(false);
              }}
              to="/aboutus"
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

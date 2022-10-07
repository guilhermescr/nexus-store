import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import Logo from '../../img/logo.png';
import LogoV2 from '../../img/logo_v2.png';

import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineClose
} from 'react-icons/ai';

function Header() {
  const [navbarMenuVisible, setNavbarMenuVisible] = useState(false);
  const [searchBarIsEmpty, setSearchBarIsEmpty] = useState(true);

  function toggleNavbarVisibility(navbarState) {
    let navbar = document.querySelector('#navbar');

    if (!navbarMenuVisible) {
      // open menu
      document.body.style.overflow = 'hidden';

      navbar.classList = `${styles.navbar} ${styles.visible}`;
    } else {
      // close menu
      document.body.style.overflow = 'auto';

      navbar.classList = `${styles.navbar}`;
    }
    setNavbarMenuVisible(navbarState);
  }

  return (
    <header id="header" className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={LogoV2} alt="Nexus Store Logo" />
      </Link>

      <div className={styles.shopping_cart_container}>
        <AiOutlineShoppingCart />
      </div>

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

      <div id="searchContainer" className={styles.search_container}>
        <input
          type="search"
          id="inputSearch"
          autoComplete="off"
          placeholder="What are you looking for?"
          spellCheck="false"
          onChange={event => {
            setSearchBarIsEmpty(event.target.value.length === 0);
          }}
        />
        <div className={styles.input_search_buttons}>
          {searchBarIsEmpty ? (
            <AiOutlineSearch />
          ) : (
            <AiOutlineClose
              onClick={() => {
                setSearchBarIsEmpty(true);
                document.querySelector('#inputSearch').value = '';
              }}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

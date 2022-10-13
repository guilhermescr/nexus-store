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
import CloseMenu from './responsive/CloseMenu';
import BurgerMenu from './responsive/BurgerMenu';

function Header() {
  const [navbarMenuVisible, setNavbarMenuVisible] = useState(true);
  const [headerSearchBarIsEmpty, setHeaderSearchBarIsEmpty] = useState(true);
  const [navbarSearchBarIsEmpty, setNavbarSearchBarIsEmpty] = useState(true);

  const openNavbar = () => {
    let navbar = document.querySelector('#navbar');
    // open menu
    document.body.style.overflow = 'hidden';

    navbar.classList = `${styles.navbar} ${styles.visible}`;

    setNavbarMenuVisible(false);
  };

  const closeNavbar = () => {
    let navbar = document.querySelector('#navbar');
    // close menu
    document.body.style.overflow = 'auto';
    navbar.classList = `${styles.navbar}`;
    setNavbarMenuVisible(true);
  };

  document.body.onload = () => {
    // this.previousElementSibling is the currentInput
    document
      .querySelector('#headerSearchButtons')
      .addEventListener('click', function () {
        setHeaderSearchBarIsEmpty(true);
        this.previousElementSibling.value = '';
      });
    document
      .querySelector('#navbarSearchButtons')
      .addEventListener('click', function () {
        setNavbarSearchBarIsEmpty(true);
        this.previousElementSibling.value = '';
      });
  };

  return (
    <header id="header" className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={LogoV2} alt="Nexus Store Logo" />
      </Link>

      <div className={styles.shopping_cart_container}>
        <Link to="/cart">
          <AiOutlineShoppingCart />
        </Link>
      </div>

      <BurgerMenu openMenu={openNavbar} />

      <nav id="navbar" className={styles.navbar}>
        <CloseMenu closeMenu={closeNavbar} />

        <img className={styles.logo} src={Logo} alt="Nexus Store Logo" />

        <div className={styles.search_container}>
          <input
            type="search"
            autoComplete="off"
            placeholder="What are you looking for?"
            spellCheck="false"
            onChange={event => {
              setNavbarSearchBarIsEmpty(event.target.value.length === 0);
            }}
          />
          <div id="navbarSearchButtons" className={styles.input_search_buttons}>
            {navbarSearchBarIsEmpty ? <AiOutlineSearch /> : <AiOutlineClose />}
          </div>
        </div>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link onClick={openNavbar} to="/">
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link onClick={openNavbar} to="/products">
              Products
            </Link>
          </li>
          <li className={styles.item}>
            <Link onClick={openNavbar} to="/aboutus">
              About Us
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.search_container}>
        <input
          type="search"
          autoComplete="off"
          placeholder="What are you looking for?"
          spellCheck="false"
          onChange={event => {
            setHeaderSearchBarIsEmpty(event.target.value.length === 0);
          }}
        />
        <div id="headerSearchButtons" className={styles.input_search_buttons}>
          {headerSearchBarIsEmpty ? <AiOutlineSearch /> : <AiOutlineClose />}
        </div>
      </div>
    </header>
  );
}

export default Header;

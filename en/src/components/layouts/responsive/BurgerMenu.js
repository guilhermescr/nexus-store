import styles from './BurgerMenu.module.css';

function BurgerMenu({ openMenu }) {
  return (
    <div
      onClick={openMenu}
      role="button"
      className={styles.hamburger_menu_container}
    >
      <div className={styles.hamburger_bar}></div>
      <div className={styles.hamburger_bar}></div>
      <div className={styles.hamburger_bar}></div>
    </div>
  );
}

export default BurgerMenu;

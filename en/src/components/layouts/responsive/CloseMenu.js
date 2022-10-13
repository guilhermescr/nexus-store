import styles from './CloseMenu.module.css';

function CloseMenu({ closeMenu }) {
  return (
    <div
      onClick={closeMenu}
      role="button"
      className={styles.close_menu_container}
    >
      <div className={styles.close_bar_axis}></div>
      <div className={styles.close_bar_axis}></div>
    </div>
  );
}

export default CloseMenu;

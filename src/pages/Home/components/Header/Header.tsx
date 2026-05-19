import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Countries</h1>
      <input type="text" placeholder="Procurando algum específico?" className={styles.searchBar} />
    </header>
  );
}

export default Header;

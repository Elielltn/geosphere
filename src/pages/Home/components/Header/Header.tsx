import styles from "./Header.module.css";

type HeaderProps = {
  onSearchChange: (search: string) => void
}

function Header({onSearchChange}: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Countries</h1>
      <input onChange={(e) => onSearchChange(e.target.value)} type="text" placeholder="Procurando algum específico?" className={styles.searchBar} />
    </header>
  );
}

export default Header;

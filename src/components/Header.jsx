import styles from "../styles/header.module.css"

const Header = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.navLinks}>
          <ul>
            <li>About</li>
            <li>Skills </li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;

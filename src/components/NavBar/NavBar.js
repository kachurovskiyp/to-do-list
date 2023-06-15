import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={`${styles.icon}`}><span className={`fa fa-tasks`}></span></a>
      <ul className={styles.menu}>
        <li><a href="/">Home</a></li>
        <li><a href="/favorite">Favorite</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
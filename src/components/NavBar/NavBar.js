import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={`${styles.icon}`}><span className={`fa fa-tasks`}></span></Link>
      <ul className={styles.menu}>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? styles.linkActive : undefined}
            to="/">
              Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? styles.linkActive : undefined}
            to="/favorite">
              Favorite
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? styles.linkActive : undefined}
            to="/about">
              About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
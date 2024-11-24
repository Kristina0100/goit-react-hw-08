import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import clsx from 'clsx';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const buildCssClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

  return (
    <nav className={styles.nav}>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildCssClasses} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
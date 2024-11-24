import { NavLink } from "react-router-dom";

import clsx from 'clsx';
import styles from './AuthNav.module.css';

export const AuthNav = () => {

      const buildCssClasses = ({ isActive }) =>
        clsx(styles.link, isActive && styles.active);
    
    return (
        <div className={styles.wrap}>
            <NavLink className={buildCssClasses} to='/register'>
                Register
            </NavLink>
            <NavLink className={buildCssClasses} to='/login'>
                Log In
            </NavLink>
        </div>
    );
};
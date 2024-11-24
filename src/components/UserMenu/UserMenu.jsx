import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import styles from './UserMenu.module.css';

export const UserMenu = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

  return (
    <div className={styles.container}>
      <p className={styles.text}>Welcome, {user.name}</p>
      <button className={styles.btn} type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

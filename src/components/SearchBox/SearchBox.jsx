import { useDispatch, useSelector } from "react-redux";
import { changeFilter,  changeFilterByNum } from "../../redux/filters/slice";
import { selectNameFilter, selectNumFilter } from '../../redux/filters/selectors';

import styles from "./SearchBox.module.css";

export const SearchBox = () => {

  const filter = useSelector(selectNameFilter);
  const numFilter = useSelector(selectNumFilter);

  const dispatch = useDispatch();

  return (
    <div>
      <label className={styles.search}>
        Filter contacts by name
        <input className={styles.input} value={filter} type="text" onChange={(event) => {
          const action = changeFilter(event.target.value);
          dispatch(action);
        }}
        />
      </label>

        <label className={styles.search}>
        Filter contacts by phone number
        <input className={styles.input} value={numFilter} type="text" onChange={(event) => {
          const action = changeFilterByNum(event.target.value);
          dispatch(action);
        }}
        />
      </label>
    </div>
  )
};

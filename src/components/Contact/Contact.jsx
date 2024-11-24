import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/slice";

import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import styles from "./Contact.module.css";

export const Contact = ({ contact }) => {
  
  const dispatch = useDispatch();

  return (
    <div className={styles.contact}>
      <div className={styles.wrap}>
        <p className={styles.name}><FaUser className={styles.icons} />{contact.name}</p>
        <p className={styles.phone}><FaPhoneAlt className={styles.icons} />{contact.number}</p>
      </div>
      <button className={styles.button} onClick={() => dispatch(openModal(contact))} type="button">Delete</button>
    </div>
  )
};

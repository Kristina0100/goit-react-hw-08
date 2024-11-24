import { useDispatch} from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import {Toaster, toast } from 'react-hot-toast';
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import styles from "./Contact.module.css";

export const Contact = ({ contact }) => {
  
  const dispatch = useDispatch();
  
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
        toast.success('Successfully deleted', {
        position: 'top-center',
        duration: 3000,
        style: {
          background: '#ff7575',
          color: '#fff',
        },
      });
  };

  return (
    <div className={styles.contact}>
      <div>
        <p className={styles.name}><FaUser className={styles.icons} />{contact.name}</p>
        <p><FaPhoneAlt className={styles.icons} />{contact.number}</p>
      </div>
      <button className={styles.button} onClick={handleDelete} type="button">Delete</button>
        <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{
          top: 20,
        }}
      />
    </div>
  )
};

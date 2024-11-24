import { useSelector } from "react-redux";
import { selectFilteredContacts, selectFilteredContactsByNum } from '../../redux/contacts/selectors';
import { Contact } from "../Contact/Contact";

import styles from "./ContactList.module.css";

export const ContactList = () => {

    const nameFilter = useSelector(selectFilteredContacts);
    const numberFilter = useSelector(selectFilteredContactsByNum);

    const filteredContacts = nameFilter.filter((contact) =>
    numberFilter.includes(contact)
  );

    return (
        <div className={styles.container}>
            <ul className={styles.contacts}>
            {filteredContacts.map(contact => {
                return (<li key={contact.id}>
                    <Contact
                        contact={contact} />
                </li>)
            })}
            </ul>
        </div>
    )
};
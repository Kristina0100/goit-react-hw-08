import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from '../../redux/contacts/operations';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { ContactList } from '../../components/ContactList/ContactList';

export default function  ContactsPage () {

    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.contacts.isLoading);
    const error = useSelector((state) => state.contacts.error);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
      
    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <div>{isLoading && !error && 'Request in progress...'}
            </div>
            <ContactList />
        </>
    )
};
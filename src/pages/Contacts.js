import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
        <h2 className='title'>Phonebook</h2>
            <ContactForm />
            <div>{isLoading && 'Request in progress...'}</div>
            <h2 className='title'>My contacts</h2>
            <Filter />
            <ContactList />
        </>
    );
};

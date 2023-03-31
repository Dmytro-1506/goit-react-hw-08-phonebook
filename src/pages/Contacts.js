import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    console.log('contacts page');

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
                <title>Your contacts</title>
            <ContactForm />
            <div>{isLoading && 'Request in progress...'}</div>
            <ContactList />
        </>
    );
};

import './ContactList.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { findedContacts } from 'redux/contacts/selectors';
import './ContactList.css'

export const ContactList = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(findedContacts);

    return <div className='contacts'>
        <ul className="contact-list">
            {contacts.map(item => {
                return <li key={item.id} className='contact-item'>
                    <span>{item.name}:</span>
                    <span className='number'>{item.number}</span>
                        <button type="button" className='deleteBtn' name={item.name} onClick={()=>{dispatch(deleteContact(item.id))}}>Delete contact</button>
                    </li>
            })}
        </ul>
    </div>
}
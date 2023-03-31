import { useDispatch } from "react-redux";
import { filterContacts } from "redux/contacts/slice";

export const Filter = () => {
    const dispatch = useDispatch();

    return <div>
        <p>Find contacts by name</p>
        <input className='find' name="findContacts" onChange={(e)=>{dispatch(filterContacts(e.target.value))}}></input></div>
}
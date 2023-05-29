import { useDispatch} from 'react-redux';

import { useContactsSlectors } from 'store/contacts/selectors';
import { useFilterSlectors } from 'store/filter/selectors';
import { deleteContact } from 'store/contacts/operations';


export const ContactList = () => {

    const { contactsState } = useContactsSlectors();
    const { filterState } = useFilterSlectors();
    const dispatch = useDispatch();


    const deleteContacts = value => {
        dispatch(deleteContact(value));
    };


    const getFilteredContacts = () => {
        const normalizeFilter = filterState.toLowerCase().trim();
        return contactsState.filter(contact => {
            return contact.name.toLocaleLowerCase().includes(normalizeFilter);
        });
    };


    return (
        <ul>
            {getFilteredContacts().map(contact => {
                const { name, number, id } = contact;
                return (
                    <li key={id} style={{ fontSize: '20px' }}>
                        {name}: {number}
                        <button
                            type="button"
                            name={name}
                            onClick={() => {
                                deleteContacts(id);
                            }}
                            style={{ marginLeft: '12px' }}
                        >
                            Delete
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

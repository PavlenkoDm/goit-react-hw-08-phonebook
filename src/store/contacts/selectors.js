import { useSelector } from 'react-redux';

export const useContactsSlectors = () => {
    const contactsState = useSelector(state => state.contacts.items);
    const loading = useSelector(state => state.contacts.isLoading);
    const err = useSelector(state => state.contacts.error);

    return { contactsState, loading, err };
};

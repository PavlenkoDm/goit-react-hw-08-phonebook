import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { ContactForm } from 'components/index';
import { Filter } from 'components/index';
import { ContactList } from 'components/index';
import { getContacts } from 'store/contacts/operations';
import { useContactsSlectors } from 'store/contacts/selectors';
import style from './Phonebook.module.css'

export default function Phonebook() {
    const dispatch = useDispatch();
    const { contactsState } = useContactsSlectors();

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    return (
        <div className={style.container}>
            <main>
                <Helmet>
                    <title>Your contacts</title>
                </Helmet>

                <ContactForm />

                {contactsState.length > 0 && (
                    <>
                        <h2 className={style.title}>Contacts:</h2>

                        <Filter />

                        <ContactList />
                    </>
                )}
            </main>
        </div>
    );
}

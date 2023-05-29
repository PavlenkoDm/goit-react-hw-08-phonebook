import { NavLink } from 'react-router-dom';
import { useAuthSlectors } from 'store/auth/selectors';
import style from './Navigation.module.css';

export const Navigation = () => {
    const { selectIsLoggedIn } = useAuthSlectors();

    return (
        <nav>
            <NavLink className={style.link} to="/">
                Home
            </NavLink>
            {selectIsLoggedIn && (
                <NavLink className={style.link} to="/phonebook">
                    Contacts
                </NavLink>
            )}
        </nav>
    );
};

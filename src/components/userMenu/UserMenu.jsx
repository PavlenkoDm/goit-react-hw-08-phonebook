import { useDispatch } from 'react-redux';
import { logOut } from 'store/auth/operations';
import { useAuthSlectors } from 'store/auth/selectors';
import style from './UserMenu.module.css';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { selectUser } = useAuthSlectors();

    return (
        <div className={style.wrapper}>
            <p className={style.username}>Welcome, {selectUser.email}</p>
            <button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    );
};

import { Navigation } from 'components/navigation/Navigation';
import { UserMenu } from 'components/userMenu/UserMenu';
import { AuthNav } from 'components/authNav/AuthNav';
import { useAuthSlectors } from 'store/auth/selectors';
import style from './AppBar.module.css';

export const AppBar = () => {
    const { selectIsLoggedIn } = useAuthSlectors();

    return (
        <header className={style.header}>
            <Navigation />
            {selectIsLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};

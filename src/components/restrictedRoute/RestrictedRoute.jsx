import { Navigate } from 'react-router-dom';

import { useAuthSlectors } from 'store/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const { selectIsLoggedIn } = useAuthSlectors();

    return selectIsLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

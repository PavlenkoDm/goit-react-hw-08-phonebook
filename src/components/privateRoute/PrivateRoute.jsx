import { Navigate } from 'react-router-dom';

import { useAuthSlectors } from 'store/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { selectIsLoggedIn, selectIsRefreshing } = useAuthSlectors();
    const shouldRedirect = !selectIsLoggedIn && !selectIsRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

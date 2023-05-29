import { useSelector } from 'react-redux';

export const useAuthSlectors = () => {
    const selectIsLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const selectUser = useSelector(state => state.auth.user);
    const selectIsRefreshing = useSelector(state => state.auth.isRefreshing);

    return { selectIsLoggedIn, selectUser, selectIsRefreshing };
};

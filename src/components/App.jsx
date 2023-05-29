import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';

import { SharedLayout } from './sharedLayout/SharedLayout';
import { useAuthSlectors } from 'store/auth/selectors';
import { refreshUser } from 'store/auth/operations';
import { PrivateRoute } from './privateRoute/PrivateRoute';
import { RestrictedRoute } from './restrictedRoute/RestrictedRoute';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Phonebook = lazy(() => import('pages/Phonebook'));

export const App = () => {
    const dispatch = useDispatch();
    const { selectIsRefreshing } = useAuthSlectors();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return selectIsRefreshing ? (
        <h2>Refreshing user...</h2>
    ) : (
        <div>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="/register"
                        element={
                            <RestrictedRoute
                                redirectTo="/phonebook"
                                component={<Register />}
                            />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <RestrictedRoute
                                redirectTo="/phonebook"
                                component={<Login />}
                            />
                        }
                    />
                    <Route
                        path="/phonebook"
                        element={
                            <PrivateRoute
                                redirectTo="/login"
                                component={<Phonebook />}
                            />
                        }
                    />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
};

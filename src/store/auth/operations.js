import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            Loading.circle();
            const res = await axios.post('/users/signup', credentials);
            setAuthHeader(res.data.token);
            Loading.remove();
            return res.data;
        } catch (error) {
            Loading.remove();
            Notify.failure(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            Loading.circle();
            const res = await axios.post('/users/login', credentials);
            //After successful login, add the token to the HTTP header
            setAuthHeader(res.data.token);
            Loading.remove();
            return res.data;
        } catch (error) {
            // Loading.remove();
            // Notify.failure(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        Loading.circle();
        await axios.post('/users/logout');
        // After a successful logout, remove the token from the HTTP header
        clearAuthHeader();
        Loading.remove();
    } catch (error) {
        Loading.remove();
        Notify.failure(error.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            Loading.circle();
            setAuthHeader(persistedToken);
            const res = await axios.get('/users/current');
            Loading.remove();
            return res.data;
        } catch (error) {
            Loading.remove();
            Notify.failure(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

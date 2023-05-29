import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';



export const getContacts = createAsyncThunk(
    'contacts/getContacts',
    async (_, thunkApi) => {
        try {
            Loading.circle();
            const response = await axios.get('/contacts');
            Loading.remove();
            return response.data;
        } catch (error) {
            Loading.remove();
            Notify.failure(error.message);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);



export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkApi) => {
        try {
            Loading.circle();
            const response = await axios.delete(`/contacts/${id}`);
            Loading.remove();
            return response.data;
        } catch (error) {
            Loading.remove();
            Notify.failure(error.message);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);



export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkApi) => {
        try {
            Loading.circle();
            const response = await axios.post(`/contacts`, {...contact});
            Loading.remove();
            return response.data;
        } catch (error) {
            Loading.remove();
            Notify.failure(error.message);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

// export const editTodo = createAsyncThunk(
//   'todos/editTodo',
//   async (editedTodo, thunkApi) => {
//     try {
//       const response = await fetch(`${BASE_URL}/todos/${editedTodo.id}`, {
//         method: 'PUT',
//         body: JSON.stringify(editedTodo),
//         headers: { 'content-type': 'application/json' },
//       });
//       if (!response.ok) throw new Error('404');
//       const data = await response.json();

//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

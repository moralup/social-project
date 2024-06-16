import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, setAuthData } from 'entities/user';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';

export interface loginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    loginByUsernameProps,
    { rejectValue: string }
>('login/loginByUsername', async (authData, { rejectWithValue, dispatch }) => {
    try {
        const response = await axios.post<User>('http://localhost:8000/login', authData);
        const user = response.data;

        if (!user) {
            throw new Error();
        }

        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
        dispatch(setAuthData(user));

        return user;
    } catch (e) {
        console.log(e);
        return rejectWithValue('err');
    }
});

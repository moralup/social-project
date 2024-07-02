import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserI, setAuthData } from 'entities/user';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

export interface loginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<UserI, loginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, { rejectWithValue, dispatch, extra }) => {
        try {
            const response = await extra.api.post('/login', authData);

            const user = response.data;
            if (!user) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
            dispatch(setAuthData(user));

            return user;
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
            return rejectWithValue('err');
        }
    },
);

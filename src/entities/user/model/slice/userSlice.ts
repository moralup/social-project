import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';
import type { UserI, UserSchema } from '../types/user';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<UserI>) => {
            state.authData = action.payload;
        },
        initAuthData: state => {
            state._inited = true;

            const userJson = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

            if (userJson) {
                const user: UserI = JSON.parse(userJson);
                state.authData = user;
            }
        },
        logout: state => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
    },
});

export const { setAuthData, initAuthData, logout } = userSlice.actions;
export const { reducer: userReducer } = userSlice;

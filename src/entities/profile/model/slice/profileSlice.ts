import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

// export const {} = profileSlice.actions;
export const { reducer: profileReducer } = profileSlice;

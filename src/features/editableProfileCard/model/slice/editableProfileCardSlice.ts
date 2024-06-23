import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { ProfileI } from 'shared/types/profile';
import type { ProfileSchema } from '../types/profileSchema';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
    data: undefined,
    form: undefined,
    error: undefined,
    isLoading: false,
    readonly: true,
};
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<ProfileI>) => {
            state.data = action.payload;
        },
        updateProfile: (state, action: PayloadAction<Partial<ProfileI>>) => {
            state.form = { ...state.form, ...action.payload };
        },
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: state => {
            state.form = state.data;
            state.readonly = true;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProfileData.pending, state => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(updateProfileData.pending, state => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.readonly = true;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.readonly = true;
                state.error = action.payload;
            });
    },
});

export const { setProfile, updateProfile, cancelEdit, setReadonly } = profileSlice.actions;
export const { reducer: profileReducer } = profileSlice;

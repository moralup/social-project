import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { ProfileI } from 'shared/types/profile';
import { type ProfileSchema } from '../types/profileSchema';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
    data: undefined,
    form: undefined,
    isLoading: false,
    readonly: true,
    validationErrors: undefined,
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
        editForm: state => {
            state.readonly = false;
        },
        cancelEditForm: state => {
            state.form = state.data;
            state.validationErrors = undefined;
            state.readonly = true;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProfileData.pending, state => {
                state.isLoading = true;
                state.validationErrors = undefined;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validationErrors = action.payload;
            })

            .addCase(updateProfileData.pending, state => {
                state.isLoading = true;
                state.validationErrors = undefined;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.readonly = true;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validationErrors = action.payload;
            });
    },
});

export const {
    setProfile,
    updateProfile,
    cancelEditForm,
    editForm, //
} = profileSlice.actions;

export const { reducer: profileReducer } = profileSlice;

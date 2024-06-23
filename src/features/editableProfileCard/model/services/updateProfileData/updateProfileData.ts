import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProfileI } from 'shared/types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<ProfileI, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, { extra, getState, rejectWithValue }) => {
        const formData = getProfileForm(getState());

        try {
            const response = await extra.api.put('/profile', formData);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('err');
        }
    },
);

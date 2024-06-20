import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProfileI } from '../../types/profileSchema';

export const fetchProfileData = createAsyncThunk<
    ProfileI,
    void,
    ThunkConfig<string>
>('profile/fetchProfileData', async (_, { extra, rejectWithValue }) => {
    try {
        const response = await extra.api.get<ProfileI>('/profile');

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});

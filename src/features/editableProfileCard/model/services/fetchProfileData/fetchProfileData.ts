import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProfileI } from 'shared/types/profile';
import { ValidateProfileError } from '../../types/profileSchema';

export const fetchProfileData = createAsyncThunk<
    ProfileI,
    void,
    ThunkConfig<ValidateProfileError[]>
>('profile/fetchProfileData', async (_, { extra, rejectWithValue }) => {
    try {
        const response = await extra.api.get<ProfileI>('/profile');

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProfileI } from 'shared/types/profile';
import { getProfileForm } from '../../selectors/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { ValidateProfileError } from '../../types/profileSchema';

export const updateProfileData = createAsyncThunk<
    ProfileI,
    void,
    ThunkConfig<ValidateProfileError[]>
>(
    'profile/updateProfileData',
    async (_, { extra, getState, rejectWithValue }) => {
        const formData = getProfileForm(getState());
        const errors = validateProfileData(formData);

        try {
            if (errors.length) {
                return rejectWithValue(errors);
            }

            const response = await extra.api.put(
                `/profile/${formData.id}`,
                formData,
            );

            return response.data;
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);

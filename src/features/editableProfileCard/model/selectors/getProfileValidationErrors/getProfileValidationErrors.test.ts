import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidationErrors } from './getProfileValidationErrors';
import { ValidateProfileError } from '../../types/profileSchema';

describe('getProfileValidationErrors', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
                validationErrors: [
                    ValidateProfileError.INCORRECT_AGE,
                    ValidateProfileError.INCORRECT_CITY,
                    ValidateProfileError.INCORRECT_AVATAR_LINK,
                ],
            },
        };

        expect(getProfileValidationErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY,
            ValidateProfileError.INCORRECT_AVATAR_LINK,
        ]);
    });
});

import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('should return profile', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    age: 15,
                },
                form: {
                    age: 15,
                    username: 'efwefwef12',
                },
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual({
            age: 15,
            username: 'efwefwef12',
        });
    });
    test('should return empty object with empty state', () => {
        expect(getProfileForm({} as StateSchema)).toEqual({});
    });
});

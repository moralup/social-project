import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('should return profile', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    age: 15,
                },
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual({
            age: 15,
        });
    });
    test('should return empty object with empty state', () => {
        expect(getProfileData({} as StateSchema)).toEqual({});
    });
});

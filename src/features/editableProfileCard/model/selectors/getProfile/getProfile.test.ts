import { StateSchema } from 'app/providers/StoreProvider';
import { getProfile } from './getProfile';

describe('getProfile', () => {
    test('should return profile', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {},
            },
        };

        expect(getProfile(state as StateSchema)).toEqual({
            data: {},
        });
    });
});

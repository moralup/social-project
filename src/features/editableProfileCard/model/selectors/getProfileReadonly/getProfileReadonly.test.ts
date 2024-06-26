import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
    test('should return readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
                readonly: true,
            },
        };

        expect(getProfileReadonly(state as StateSchema)).toBe(true);
    });
});

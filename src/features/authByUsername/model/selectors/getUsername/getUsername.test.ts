import { StateSchema } from 'app/providers/StoreProvider';
import { getUsername } from './getUsername';

describe('getUsername', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'VanekKrut',
            },
        };

        expect(getUsername(state as StateSchema)).toBe('VanekKrut');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            login: {},
        };
        expect(getUsername(state as StateSchema)).toBe('');
    });
});

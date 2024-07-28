import { StateSchema } from '@/app/providers/StoreProvider';
import { getPassword } from './getPassword';

describe('getPassword', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                password: 'myPassword',
            },
        };

        expect(getPassword(state as StateSchema)).toBe('myPassword');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getPassword(state as StateSchema)).toBe('');
    });
});

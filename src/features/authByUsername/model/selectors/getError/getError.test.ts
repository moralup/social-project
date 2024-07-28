import { StateSchema } from '@/app/providers/StoreProvider';
import { getError } from './getError';

describe('getError', () => {
    test('should return error ', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                error: 'Error',
            },
        };
        expect(getError(state as StateSchema)).toBe('Error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getError(state as StateSchema)).toBe(undefined);
    });
});

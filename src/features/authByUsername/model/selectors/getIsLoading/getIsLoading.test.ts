import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getIsLoading } from './getIsLoading';

describe('getIsLoading', () => {
    test('should return true ', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: true,
            },
        };
        expect(getIsLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        expect(getIsLoading(undefined)).toBe(false);
    });
});

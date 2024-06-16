import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLogin } from './getLogin';

describe('getLogin', () => {
    test('should return login', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'vanya228',
                password: 'vanekKrutysh227',
            },
        };

        expect(getLogin(state as StateSchema)).toEqual({
            username: 'vanya228',
            password: 'vanekKrutysh227',
        });
    });

    test('should work with empty state', () => {
        expect(getLogin(undefined)).toBe(undefined);
    });
});

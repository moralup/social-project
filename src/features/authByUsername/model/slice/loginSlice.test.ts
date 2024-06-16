import { AnyAction, DeepPartial } from '@reduxjs/toolkit';
import { loginReducer, setPassword, setUsername } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('loginSlice', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'username',
        };

        expect(loginReducer(state as LoginSchema, setUsername('username'))).toEqual({
            username: 'username',
        });
    });

    test('set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: 'password',
        };

        expect(loginReducer(state as LoginSchema, setPassword('password'))).toEqual({
            password: 'password',
        });
    });

    test('sets isLoading true and error undefined when loginByUsername is pending', () => {
        const action: AnyAction = { type: loginByUsername.pending.type };
        const state: DeepPartial<LoginSchema> = {
            isLoading: false,
        };

        expect(loginReducer(state as LoginSchema, action)).toEqual({
            isLoading: true,
        });
    });

    test('sets isLoading false when loginByUsername is fulfilled', () => {
        const action: AnyAction = { type: loginByUsername.fulfilled.type };
        const state: DeepPartial<LoginSchema> = {
            isLoading: true,
        };

        expect(loginReducer(state as LoginSchema, action)).toEqual({
            isLoading: false,
        });
    });

    test('sets isLoading false and set error when loginByUsername rejected', () => {
        const action: AnyAction = {
            type: loginByUsername.rejected.type,
            payload: 'SomeError',
        };
        const state: DeepPartial<LoginSchema> = {
            isLoading: true,
        };

        expect(loginReducer(state as LoginSchema, action)).toEqual({
            isLoading: false,
            error: 'SomeError',
        });
    });
});

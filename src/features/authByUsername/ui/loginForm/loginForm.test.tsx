import { screen, fireEvent, waitFor } from '@testing-library/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import axios from 'axios';
import { componentRender } from 'shared/lib/tests/componentRender';
import { StateSchema } from 'app/providers/StoreProvider';
import { loginReducer } from '../../model/slice/loginSlice';
import LoginForm from './loginForm';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('LoginForm', () => {
    test('render inputs with correct attributes', () => {
        componentRender(<LoginForm />);

        const inputLogin = screen.getByTestId('username');
        expect(inputLogin).toBeInTheDocument();
        expect(inputLogin).toHaveAttribute('type', 'text');
        expect(inputLogin).toHaveAttribute('required', '');

        const inputPassword = screen.getByTestId('password');
        expect(inputPassword).toBeInTheDocument();
        expect(inputPassword).toHaveAttribute('type', 'text');
        expect(inputLogin).toHaveAttribute('required', '');
    });

    test('sets inputs without initial state', () => {
        componentRender(<LoginForm />);

        expect(screen.getByTestId('username')).toHaveValue('');
        expect(screen.getByTestId('password')).toHaveValue('');

        fireEvent.change(screen.getByTestId('username'), { target: { value: 'myLogin' } });
        fireEvent.change(screen.getByTestId('password'), { target: { value: 'myPassword' } });

        expect(screen.getByTestId('username')).toHaveValue('myLogin');
        expect(screen.getByTestId('password')).toHaveValue('myPassword');
    });

    test('sets inputs with initial state', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'myUsername',
                password: 'myPassword',
                isLoading: false,
            },
        };
        const reducer: DeepPartial<ReducersMapObject<StateSchema>> = {
            login: loginReducer,
        };

        componentRender(<LoginForm />, {
            initialState: state,
            asyncReducers: reducer,
        });

        expect(screen.getByTestId('username')).toHaveValue('myUsername');
        expect(screen.getByTestId('password')).toHaveValue('myPassword');

        fireEvent.change(screen.getByTestId('username'), { target: { value: 'anotherUsername' } });
        fireEvent.change(screen.getByTestId('password'), { target: { value: 'anotherPassword' } });

        expect(screen.getByTestId('username')).toHaveValue('anotherUsername');
        expect(screen.getByTestId('password')).toHaveValue('anotherPassword');
    });

    test('should handle successful login on button click', async () => {
        const onSuccess = jest.fn();
        componentRender(<LoginForm onSuccess={onSuccess} />);

        const user = { id: '1', username: 'Ivan' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: user }));

        fireEvent.click(screen.getByTestId('login-btn'));

        await waitFor(() => {
            expect(screen.queryByTestId('error')).toBeNull();
        });
    });

    test('should handle failed login on button click', async () => {
        componentRender(<LoginForm />);
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 200 }));

        fireEvent.click(screen.getByTestId('login-btn'));

        const errorBlock = await screen.findByTestId('error');
        expect(errorBlock).toBeInTheDocument();
    });
});

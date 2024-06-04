import { componentRender } from 'shared/lib/tests/componentRender';
import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/test';
import { LoginForm } from './loginForm';

describe('LoginForm', () => {
    test('render', () => {
        componentRender(<LoginForm />);
    });

    test('render login and password inputs', () => {
        componentRender(<LoginForm />);

        const inputLogin = screen.getByTestId('login');
        expect(inputLogin).toBeInTheDocument();
        expect(inputLogin).toHaveAttribute('type', 'text');

        const inputPassword = screen.getByTestId('password');
        expect(inputPassword).toBeInTheDocument();
        expect(inputPassword).toHaveAttribute('type', 'text');
    });

    test('save value', () => {
        componentRender(<LoginForm />);

        // userEvent.type(screen.getByTestId('login'), 'some login');
        // expect(screen.getByTestId('login')).toHaveValue('some login');

        // userEvent.type(screen.getByTestId('password'), 'some password');
        // expect(screen.getByTestId('password')).toHaveValue('some password');
    });
});

import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { storeDecorator } from 'shared/config/storybook/storeDecorator';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { LoginForm } from './loginForm';

const store: DeepPartial<StateSchema> = {
    login: {
        isLoading: false,
        username: 'Robert',
        password: 'Muxa337',
    },
};

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [storeDecorator(store)],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
    decorators: [themeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

export const Pending: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
        storeDecorator({
            login: {
                isLoading: true,
                password: '',
                username: '',
            },
        }),
    ],
};

export const Error: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
        storeDecorator({
            login: {
                isLoading: false,
                error: 'error',
                password: 'hello',
                username: 'world',
            },
        }),
    ],
};

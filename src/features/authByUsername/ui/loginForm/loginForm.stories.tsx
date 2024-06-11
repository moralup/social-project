import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { storeDecorator } from 'shared/config/storybook/storeDecorator';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/authByUsername/model/slice/loginSlice';
import LoginForm from './loginForm';

const baseStore: DeepPartial<StateSchema> = {
    login: {
        isLoading: false,
        username: 'Robert',
        password: 'Muxa337',
    },
};

const reducer: DeepPartial<ReducersMapObject<StateSchema>> = { login: loginReducer };

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [storeDecorator(baseStore, reducer)],
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
        storeDecorator(
            {
                login: {
                    isLoading: true,
                    username: 'Robert',
                    password: 'Muxa337',
                },
            },
            reducer,
        ),
    ],
};

export const Error: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
        storeDecorator(
            {
                login: {
                    isLoading: false,
                    username: 'Robert',
                    password: 'Muxa337',
                    error: 'Something wrong',
                },
            },
            reducer,
        ),
    ],
};

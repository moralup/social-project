import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './loginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
    decorators: [themeDecorator(Theme.LIGHT)],
};
export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

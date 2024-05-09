import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

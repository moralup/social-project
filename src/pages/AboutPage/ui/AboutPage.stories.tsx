import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

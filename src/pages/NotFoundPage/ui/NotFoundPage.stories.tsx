import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

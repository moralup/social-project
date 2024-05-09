import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageLoader } from './PageLoader';

const meta: Meta<typeof PageLoader> = {
    title: 'widgets/PageLoader',
    component: PageLoader,
};

export default meta;

type Story = StoryObj<typeof PageLoader>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

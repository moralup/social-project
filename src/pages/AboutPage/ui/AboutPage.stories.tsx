import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/entities/theme';
import AboutPage from './AboutPage';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { routerDecorator } from '@/shared/config/storybook/routerDecorator';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    decorators: [storeDecorator(), routerDecorator],
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

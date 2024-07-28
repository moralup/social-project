import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/entities/theme';
import MainPage from './MainPage';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { routerDecorator } from '@/shared/config/storybook/routerDecorator';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    decorators: [storeDecorator(), routerDecorator],
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

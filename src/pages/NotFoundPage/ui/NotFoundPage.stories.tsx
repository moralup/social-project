import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/entities/theme';
import { NotFoundPage } from './NotFoundPage';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { routerDecorator } from '@/shared/config/storybook/routerDecorator';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    decorators: [storeDecorator(), routerDecorator],
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

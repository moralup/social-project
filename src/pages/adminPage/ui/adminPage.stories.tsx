import type { Meta, StoryObj } from '@storybook/react';
import AdminPage from './adminPage';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { routerDecorator } from '@/shared/config/storybook/routerDecorator';

const meta: Meta<typeof AdminPage> = {
    title: 'pages/AdminPage',
    component: AdminPage,
    args: {},
    decorators: [storeDecorator(), routerDecorator],
};

export default meta;

type Story = StoryObj<typeof AdminPage>;

export const Primary: Story = {};

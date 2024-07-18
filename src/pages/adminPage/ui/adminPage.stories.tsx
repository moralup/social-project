import type { Meta, StoryObj } from '@storybook/react';
import AdminPage from './adminPage';

const meta: Meta<typeof AdminPage> = {
    title: 'pages/AdminPage',
    component: AdminPage,
    args: {},
};

export default meta;

type Story = StoryObj<typeof AdminPage>;

export const Primary: Story = {};

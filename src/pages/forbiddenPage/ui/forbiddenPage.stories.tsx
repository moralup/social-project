import type { Meta, StoryObj } from '@storybook/react';
import ForbiddenPage from './forbiddenPage';

const meta: Meta<typeof ForbiddenPage> = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    args: {},
};

export default meta;

type Story = StoryObj<typeof ForbiddenPage>;

export const Primary: Story = {};

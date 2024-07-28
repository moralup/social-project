import type { Meta, StoryObj } from '@storybook/react';
import ForbiddenPage from './forbiddenPage';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';

const meta: Meta<typeof ForbiddenPage> = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    decorators: [storeDecorator()],
};

export default meta;

type Story = StoryObj<typeof ForbiddenPage>;

export const Primary: Story = {};

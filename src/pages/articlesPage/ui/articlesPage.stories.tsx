import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPage from './articlesPage';

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    args: {},
};

export default meta;

type Story = StoryObj<typeof ArticlesPage>;

export const Primary: Story = {};

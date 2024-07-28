import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCreatePage } from './articleCreatePage';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { routerDecorator } from '@/shared/config/storybook/routerDecorator';

const meta: Meta<typeof ArticleCreatePage> = {
    title: 'pages/ArticleCreatePage',
    component: ArticleCreatePage,
    decorators: [storeDecorator(), routerDecorator],
};

export default meta;

type Story = StoryObj<typeof ArticleCreatePage>;

export const Primary: Story = {};

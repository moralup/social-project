import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCreatePage } from './articleCreatePage';

const meta: Meta<typeof ArticleCreatePage> = {
    title: 'DIRECTORY/ArticleCreatePage',
    component: ArticleCreatePage,
    args: {

    },
};

export default meta;

type Story = StoryObj<typeof ArticleCreatePage>;

export const Primary: Story = {

};

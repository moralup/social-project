import type { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from './articleList';

const meta: Meta<typeof ArticleList> = {
    title: 'DIRECTORY/ArticleList',
    component: ArticleList,
    args: {

    },
};

export default meta;

type Story = StoryObj<typeof ArticleList>;

export const Primary: Story = {

};

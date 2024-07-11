import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItem } from './articleListItem';

const meta: Meta<typeof ArticleListItem> = {
    title: 'DIRECTORY/ArticleListItem',
    component: ArticleListItem,
    args: {

    },
};

export default meta;

type Story = StoryObj<typeof ArticleListItem>;

export const Primary: Story = {

};

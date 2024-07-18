import type { Meta, StoryObj } from '@storybook/react';
import { ArticleEditPage } from './articleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'DIRECTORY/ArticleEditPage',
    component: ArticleEditPage,
    args: {

    },
};

export default meta;

type Story = StoryObj<typeof ArticleEditPage>;

export const Primary: Story = {

};

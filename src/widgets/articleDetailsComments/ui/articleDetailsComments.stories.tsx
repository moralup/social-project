import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsComments } from './articleDetailsComments';

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'DIRECTORY/ArticleDetailsComments',
    component: ArticleDetailsComments,
    args: {

    },
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsComments>;

export const Primary: Story = {

};

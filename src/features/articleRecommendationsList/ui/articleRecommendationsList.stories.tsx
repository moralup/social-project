import type { Meta, StoryObj } from '@storybook/react';
import { ArticleRecommendationsList } from './articleRecommendationsList';

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'DIRECTORY/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    args: {

    },
};

export default meta;

type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Primary: Story = {

};

/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleRating } from './articleRating';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { RatingI } from '@/entities/rating';

const getMockDataItem = (response?: RatingI) => ({
    url: 'http://localhost:8000/article-rating?articleId=1&userId=1',
    method: 'GET',
    status: 200,
    response: [response],
    // param:
});

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    args: {
        articleId: '1',
    },
    decorators: [storeDecorator({ user: { authData: { id: '1' } } })],
};

export default meta;

type Story = StoryObj<typeof ArticleRating>;

export const RateAndFeedback: Story = {
    parameters: {
        mockData: [
            getMockDataItem({
                rate: 5,
                feedback: 'nice article. do more pls!',
            }),
        ],
    },
};

export const RateAndBigFeedback: Story = {
    parameters: {
        mockData: [
            getMockDataItem({
                rate: 3,
                feedback:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quaerat sit ducimus sapiente est fugit architecto consequuntur ab corporis iste, iure, cumque quisquam molestiae voluptate in quasi officiis. Ab, cumque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quaerat sit ducimus sapiente est fugit architecto consequuntur ab corporis iste, iure, cumque quisquam molestiae voluptate in quasi officiis. Ab, cumque.',
            }),
        ],
    },
};

export const RateWithoutFeedback: Story = {
    parameters: {
        mockData: [
            getMockDataItem({
                rate: 1,
            }),
        ],
    },
};

export const NotRated: Story = {
    parameters: {
        mockData: [getMockDataItem()],
    },
};

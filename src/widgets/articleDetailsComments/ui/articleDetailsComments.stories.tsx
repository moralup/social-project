import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsComments } from './articleDetailsComments';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';

const comments = [
    {
        id: '1',
        text: 'some comment',
        articleId: '1',
        userId: '1',
        user: {
            id: '1',
            username: 'user',
            password: '123',
            roles: ['USER', 'LAWYER'],
            avatar: 'https://i.pinimg.com/736x/7a/8e/b7/7a8eb7cf77bbc04a7a20f315d4630d6c.jpg',
        },
    },
    {
        id: '2',
        text: 'some comment 2',
        articleId: '1',
        userId: '1',
        user: {
            id: '1',
            username: 'user',
            password: '123',
            roles: ['USER', 'LAWYER'],
            avatar: 'https://i.pinimg.com/736x/7a/8e/b7/7a8eb7cf77bbc04a7a20f315d4630d6c.jpg',
        },
    },
    {
        id: '3',
        text: 'some comment 3',
        articleId: '1',
        userId: '1',
        user: {
            id: '1',
            username: 'user',
            password: '123',
            roles: ['USER', 'LAWYER'],
            avatar: 'https://i.pinimg.com/736x/7a/8e/b7/7a8eb7cf77bbc04a7a20f315d4630d6c.jpg',
        },
    },
];

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'widgets/ArticleDetailsComments',
    component: ArticleDetailsComments,
    decorators: [
        storeDecorator({
            api: { queries: {} },
            user: { authData: { id: '1' } },
        }),
    ],
    parameters: {
        mockData: [
            {
                url: 'http://localhost:8000/comments?articleId=1&_expand=user',
                method: 'GET',
                status: 200,
                response: comments,
                delay: 2000,
            },
            {
                url: 'http://localhost:8000/comments',
                method: 'POST',
                status: 200,
                response: {
                    data: 'Hello storybook-addon-mock!',
                },
                delay: 2000,
                ignoreQueryParams: true,
            },
        ],
    },
    args: {
        articleId: '1',
    },
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsComments>;

export const Primary: Story = {};

import type { Meta, StoryObj } from '@storybook/react';
import { AddCommentForm } from './addCommentForm';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    parameters: {
        mockData: [
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
    decorators: [storeDecorator({ user: { authData: { id: '1' } } })],
};

export default meta;

type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {};

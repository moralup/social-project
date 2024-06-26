import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { storeDecorator } from 'shared/config/storybook/storeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './profilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [storeDecorator()],
    parameters: {
        mockData: [
            {
                url: 'http://localhost:8000/profile',
                method: 'GET',
                status: 200,
                response: {
                    data: 'Hello storybook-addon-mock!',
                },
            },
            {
                url: 'http://localhost:8000/profile',
                method: 'PUT',
                status: 200,
                response: {
                    data: 'Hello storybook-addon-mock!',
                },
            },
        ],
    },
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { Theme } from '@/entities/theme';
import ProfilePage from './profilePage';
import {
    reactRouterParameters,
    withRouter,
} from 'storybook-addon-react-router-v6';
import { styleDecorator } from '@/shared/config/storybook/wrapDecorator';
import { profileReducer } from '@/features/editableProfileCard';
import { ReducersList } from '@/shared/lib/components/dynamicModuleLoader';

const reducers: ReducersList = {
    profile: profileReducer,
};

const data = {
    id: '1',
    firstName: 'FirstCurrent',
    lastName: 'Nema',
    username: 'moraldown12',
    age: 14,
    country: 'Russia',
    city: 'Moscow',
    avatar: 'https://i.pinimg.com/736x/7a/8e/b7/7a8eb7cf77bbc04a7a20f315d4630d6c.jpg',
};

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [
        storeDecorator(
            { profile: { readonly: true }, user: { authData: { id: '1' } } },
            reducers,
        ),
        withRouter,
        styleDecorator({ display: 'flex', width: '100%' }),
    ],
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                pathParams: { id: '1' },
            },
            routing: { path: '/profile/:id' },
        }),
        mockData: [
            {
                url: 'http://localhost:8000/profile/1',
                method: 'GET',
                status: 200,
                response: data,
            },
            {
                url: 'http://localhost:8000/profile/1',
                method: 'PUT',
                status: 200,
                response: data,
            },
        ],
    },
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const MyProfile: Story = {};

export const AnotherProfile: Story = {
    decorators: [storeDecorator({ profile: { readonly: true } }, reducers)],
};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

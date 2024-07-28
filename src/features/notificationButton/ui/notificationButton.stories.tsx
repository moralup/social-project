import type { Meta, StoryObj } from '@storybook/react';
import { NotificationButton } from './notificationButton';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { styleDecorator } from '@/shared/config/storybook/wrapDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/entities/theme';
import { routerDecorator } from '@/shared/config/storybook/routerDecorator';

const notifications = [
    {
        id: '1',
        userId: '1',
        title: 'New notification 1',
        description: 'u gets new message',
        href: 'string',
    },
    {
        id: '2',
        userId: '2',
        title: 'New notification 2',
        description: 'u gets new message',
        href: 'string',
    },
];

const meta: Meta<typeof NotificationButton> = {
    title: 'features/NotificationButton',
    component: NotificationButton,
    parameters: {
        mockData: [
            {
                url: 'http://localhost:8000/notifications?',
                method: 'GET',
                status: 200,
                response: notifications,
            },
        ],
    },
    decorators: [storeDecorator()],
};

export default meta;

type Story = StoryObj<typeof NotificationButton>;

export const Primary: Story = {
    decorators: [
        styleDecorator({
            width: 20,
            marginLeft: 'auto',
        }),
        routerDecorator,
    ],
};
export const Dark: Story = {
    decorators: [
        styleDecorator({
            width: 20,
            marginLeft: 'auto',
        }),
        themeDecorator(Theme.DARK),
    ],
};

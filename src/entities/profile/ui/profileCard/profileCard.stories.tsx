import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfileCard } from './profileCard';
import Avatar from './storybook.jpg';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    args: {
        readonly: true,
        currentAvatar: Avatar,
        data: {
            age: 12,
            avatar: Avatar,
            city: 'Moscow',
            country: 'Russia',
            firstName: 'Lambert',
            lastName: 'Oligafren',
            username: 'BaBadoOk777',
        },
    },
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Light: Story = {
    args: {},
    decorators: [themeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {},
    decorators: [themeDecorator(Theme.DARK)],
};

export const Edit: Story = {
    args: {
        readonly: false,
    },
    decorators: [themeDecorator(Theme.DARK)],
};

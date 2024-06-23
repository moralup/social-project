import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarSize } from './avatar';
import Image from './storybook.jpg';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    args: {
        alt: 'avatar',
        src: Image,
    },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const NoSrc: Story = {
    args: {
        src: '',
    },
};
export const SizeM: Story = {
    args: {
        size: AvatarSize.M,
    },
};
export const SizeL: Story = {
    args: {
        size: AvatarSize.L,
    },
};
export const SizeXL: Story = {
    args: {
        size: AvatarSize.XL,
    },
};

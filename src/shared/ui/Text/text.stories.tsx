import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/entities/theme';
import { Text, TextSize, TextTheme } from './text';

const meta: Meta = {
    title: 'shared/Text',
    component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Light: Story = {
    args: {
        title: 'Title',
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, earum!',
    },
    decorators: [themeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {
        title: 'Title',
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, earum!',
    },
    decorators: [themeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const OnlyText: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, earum!',
    },
};

export const Error: Story = {
    args: {
        theme: TextTheme.ERROR,
        title: 'Error',
        children: 'Oops... Something went wrong!',
    },
    decorators: [themeDecorator(Theme.DARK)],
};

export const SizeL: Story = {
    args: {
        title: 'Title',
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
        size: TextSize.L,
    },
};

export const SizeXL: Story = {
    args: {
        title: 'Title',
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
        size: TextSize.XL,
    },
};

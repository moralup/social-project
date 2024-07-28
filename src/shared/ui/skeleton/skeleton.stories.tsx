import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './skeleton';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/entities/theme';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    args: {},
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
    args: {
        height: 100,
        width: '80%',
    },
};

export const NormalCircle: Story = {
    args: {
        height: 100,
        isCircle: true,
    },
};

export const NormalDark: Story = {
    args: {
        height: 100,
        width: '80%',
    },
    decorators: [themeDecorator(Theme.DARK)],
};

export const NormalCircleDark: Story = {
    args: {
        height: 100,
        isCircle: true,
    },
    decorators: [themeDecorator(Theme.DARK)],
};

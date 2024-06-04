import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input, InputTheme } from './input';

const meta: Meta = {
    title: 'shared/Input',
    component: Input,
    args: {
        caption: 'text',
    },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Light: Story = {
    decorators: [themeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

export const Clear: Story = {
    args: {
        theme: InputTheme.CLEAR,
    },
};
export const Outline: Story = {
    args: {
        theme: InputTheme.OUTLINE,
    },
};
export const BottomLine: Story = {
    args: {
        theme: InputTheme.BOTTOM_LINE,
    },
};

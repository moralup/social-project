import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    args: { onClick: fn(), children: 'click me' },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearDark: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
    },
    decorators: [themeDecorator(Theme.DARK)],
};

export const ClearInverted: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const ClearInvertedDark: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
    },
    decorators: [themeDecorator(Theme.DARK)],
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [themeDecorator(Theme.DARK)],
};

export const OutlineInverted: Story = {
    args: {
        theme: ButtonTheme.OUTLINE_INVERTED,
    },
};

export const OutlineInvertedDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE_INVERTED,
    },
    decorators: [themeDecorator(Theme.DARK)],
};

export const Background: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
    },
    decorators: [themeDecorator(Theme.DARK)],
};

export const BackgroundInverted: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const BackgroundInvertedDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
    decorators: [themeDecorator(Theme.DARK)],
};

export const Square: Story = {
    args: {
        square: true,
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareL: Story = {
    args: {
        square: true,
        size: ButtonSize.L,
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareXL: Story = {
    args: {
        square: true,
        size: ButtonSize.XL,
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SizeM: Story = {
    args: {
        size: ButtonSize.M,
    },
    decorators: [themeDecorator(Theme.DARK)],
};
export const SizeL: Story = {
    args: {
        size: ButtonSize.L,
    },
    decorators: [themeDecorator(Theme.DARK)],
};
export const SizeXL: Story = {
    args: {
        size: ButtonSize.XL,
    },
    decorators: [themeDecorator(Theme.DARK)],
};

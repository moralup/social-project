/* eslint-disable no-multiple-empty-lines */
import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'click me',
    },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [themeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
};

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [themeDecorator(Theme.DARK)],
};

export const Red: Story = {
    args: {
        theme: AppLinkTheme.RED,
    },
};

export const RedDark: Story = {
    args: {
        theme: AppLinkTheme.RED,
    },
    decorators: [themeDecorator(Theme.DARK)],
};

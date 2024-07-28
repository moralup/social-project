import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/entities/theme';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

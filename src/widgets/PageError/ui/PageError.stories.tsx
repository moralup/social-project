import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/entities/theme';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
};

export default meta;

type Story = StoryObj<typeof PageError>;

export const Light: Story = {};

export const Dart: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

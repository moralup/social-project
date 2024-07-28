import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/entities/theme';

const options = [
    {
        label: 'option 1',
        value: 'value 1',
    },
    {
        label: 'option 2',
        value: 'value 2',
    },
    {
        label: 'option 3',
        value: 'value 3',
    },
    {
        label: 'option 4',
        value: 'value 4',
    },
];

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Light: Story = {
    args: {
        options,
        label: 'options:',
    },
};

export const Dark: Story = {
    args: {
        options,
        label: 'options:',
    },
    decorators: [themeDecorator(Theme.DARK)],
};

export const WithoutLabel: Story = {
    args: {
        options,
    },
};

export const DefaultSelected: Story = {
    args: {
        options,
        label: 'options:',
        selectedOptionValue: 'value 3',
    },
};

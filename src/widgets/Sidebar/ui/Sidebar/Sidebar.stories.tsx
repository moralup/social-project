import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';
import { storeDecorator } from 'shared/config/storybook/storeDecorator';
import { StateSchema } from 'app/providers/StoreProvider';

const state: DeepPartial<StateSchema> = {
    user: {
        _inited: true,
    },
};

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    decorators: [storeDecorator(state)],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

import type { Meta, StoryObj } from '@storybook/react';
import { AvatarDropdown as AvatarDropdownWithoutWrapper } from './avatarDropdown';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/entities/theme';
import { routerDecorator } from '@/shared/config/storybook/routerDecorator';

const AvatarDropdown = () => (
    <div style={{ width: 40, marginLeft: 'auto' }}>
        <AvatarDropdownWithoutWrapper />
    </div>
);

const meta: Meta<typeof AvatarDropdown> = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    decorators: [storeDecorator({ user: { authData: {} } }), routerDecorator],
    args: {
        style: {
            width: 100,
        },
    },
};

export default meta;

type Story = StoryObj<typeof AvatarDropdown>;

export const User: Story = {};
export const Admin: Story = {
    decorators: [storeDecorator({ user: { authData: { roles: ['ADMIN'] } } })],
};
export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

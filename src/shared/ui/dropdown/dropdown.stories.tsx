/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './dropdown';
import { Button } from '../Button/Button';
import { styleDecorator } from '@/shared/config/storybook/wrapDecorator';

const args = {
    items: [
        { content: 'first', id: '1', href: '' },
        { content: 'second', id: '21', href: '' },
        { content: 'thirst', id: '13', href: '' },
        { content: 'chetvertyy', id: '121', href: '' },
    ],
    trigger: <Button>Helllo</Button>,
};

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
    args,
    decorators: [styleDecorator({ width: 'min-content', margin: 'auto' })],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Right: Story = {};
export const Left: Story = {
    args: {
        ...args,
        left: true,
    },
};

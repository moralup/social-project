/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './dropdown';
import { Button } from '../Button/Button';

const meta: Meta<typeof Dropdown> = {
    title: 'DIRECTORY/Dropdown',
    component: Dropdown,
    args: {
        items: [
            { content: 'first', id: '1', href: '' },
            { content: 'second', id: '21', href: '' },
            { content: 'thirst', id: '13', href: '' },
            { content: 'chetvertyy', id: '121', href: '' },
        ],
        trigger: <Button>Helllo</Button>,
    },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {};

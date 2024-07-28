/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './drawer';

const SomeComponent = () => {
    return (
        <div style={{ background: 'red', padding: 20 }}>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
        </div>
    );
};

const meta: Meta<typeof Drawer> = {
    title: 'shared/Drawer',
    component: Drawer,
    args: {
        children: <SomeComponent />,
        isOpen: true,
        onClose: () => {},
    },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {};

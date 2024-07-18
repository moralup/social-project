/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './flex';
import { FC } from 'react';

const FlexContent: FC = () => (
    <>
        <div style={{ background: 'red', height: 100, width: 100 }}>hello1</div>
        <div style={{ background: 'red', height: 40, width: 40 }}>hello2</div>
        <div style={{ background: 'red', height: 50, width: 50 }}>hefllo3</div>
        <div style={{ background: 'red', height: 60, width: 60 }}>hello4</div>
        <div style={{ background: 'red', height: 80, width: 80 }}>hello5</div>
        <div style={{ background: 'red', height: 30, width: 30 }}>hello6</div>
    </>
);

const meta: Meta<typeof Flex> = {
    title: 'shared/stack/Flex',
    component: Flex,
    args: {
        children: <FlexContent />,
        // @ts-ignore
        style: { background: 'blue' },
    },
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const OptionDown: Story = {};

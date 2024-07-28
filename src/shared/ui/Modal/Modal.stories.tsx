import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/entities/theme';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    args: {
        isOpen: true,
        children: `Lorem ipsum dolor sit amet consectetur
adipisicing elit. Voluptatibus iusto eius unde rem maiores
sed tenetur repellat aut beatae corporis numquam quisquam voluptas
error fugit, expedita natus doloribus nesciunt suscipit!`,
    },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    decorators: [themeDecorator(Theme.LIGHT)],
};
export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};

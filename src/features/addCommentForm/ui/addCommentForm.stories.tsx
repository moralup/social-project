import type { Meta, StoryObj } from '@storybook/react';
import { AddCommentForm } from './addCommentForm';

const meta: Meta<typeof AddCommentForm> = {
    title: 'DIRECTORY/AddCommentForm',
    component: AddCommentForm,
    args: {

    },
};

export default meta;

type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {

};

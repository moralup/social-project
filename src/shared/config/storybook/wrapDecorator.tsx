import { StoryFn } from '@storybook/react';
import { CSSProperties } from 'react';

export const styleDecorator = (style: CSSProperties) => (Story: StoryFn) => (
    <div style={style}>
        <Story />
    </div>
);

import { Theme } from 'app/providers/ThemeProvider';
import { StoryFn } from '@storybook/react';

// prettier-ignore
export const themeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);

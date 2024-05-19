import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { StoryFn } from '@storybook/react';

// prettier-ignore
export const themeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <body>
        <ThemeProvider>
            <div className={`app ${theme}`}>
                <Story />
            </div>
        </ThemeProvider>
    </body>
);

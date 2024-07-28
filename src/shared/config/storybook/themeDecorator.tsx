import { Theme, ThemeProvider } from '@/entities/theme';
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

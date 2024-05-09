import type { Preview } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from '../../src/shared/config/storybook/themeDecorator';
import '../../src/app/styles/index.scss';
import { routerDecorator } from '../../src/shared/config/storybook/routerDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [themeDecorator(Theme.LIGHT), routerDecorator],
};

export default preview;

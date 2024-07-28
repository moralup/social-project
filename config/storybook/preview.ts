import type { Preview } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
// import { routerDecorator } from '@/shared/config/storybook/routerDecorator';
import { Theme } from '@/entities/theme';
import '../../src/app/styles/index.scss';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [themeDecorator(Theme.LIGHT)],
    // decorators: [themeDecorator(Theme.LIGHT)],
};

export default preview;

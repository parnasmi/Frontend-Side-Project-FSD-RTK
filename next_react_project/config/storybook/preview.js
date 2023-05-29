import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { Theme } from '../../src/shared/contexts/theme-context';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: 'white' },
            { name: 'dark', class: Theme.DARK, color: 'black' },
            { name: 'orange', class: Theme.ORANGE, color: 'orange' },
        ],
    },
};

export const decorators = [StyleDecorator, RouterDecorator, ThemeDecorator(Theme.LIGHT), SuspenseDecorator];

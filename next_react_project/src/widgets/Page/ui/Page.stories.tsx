// template-folder-name -> Page.stories.tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page } from './Page';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'widget/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};

Normal.decorators = [StoreDecorator({
    ui: {
        scroll: {
            '/articles': 1006,
        },
    },
})];

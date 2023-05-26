// template-folder-name -> AddCommentForm.stories.tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AddCommentForm from './AddCommentForm';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/addCommentForm/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Normal = Template.bind({});

Normal.decorators = [StoreDecorator({
    addCommentForm: {
        error: undefined,
        text: '',
    },
})];

Normal.args = {

};

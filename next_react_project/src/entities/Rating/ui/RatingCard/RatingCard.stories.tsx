import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RatingCard } from './RatingCard';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme-context';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    title: 'Please, rate the entity',
};

export const Dark = Template.bind({});
Dark.args = {
    feedbackTitle: 'Write something, please',
    hasFeedback: true,
    title: 'Please, rate the entity',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

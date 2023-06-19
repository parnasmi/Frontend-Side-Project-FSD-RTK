import { StoryFn } from '@storybook/react';

import ProfileRating from './ProfileRating';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template: StoryFn<typeof ProfileRating> = (args) => (
    // @ts-nocheck
    <ProfileRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    // @ts-nocheck
    profileId: '1',
};

Normal.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
            },
        },
    }),
];

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 3,
                },
            ],
        },
    ],
};

export const WithoutRating = Template.bind({});
WithoutRating.args = {
    // @ts-nocheck
    profileId: '1',
};

WithoutRating.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
            },
        },
    }),
];

WithoutRating.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};

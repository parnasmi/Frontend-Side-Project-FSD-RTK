import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';

import { UserRole } from '@/entities/User';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ display: 'flex', justifyContent: 'end', width: '300px' }}><Story /></div>,
    ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};

Normal.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            avatar: 'https://thumbs.dreamstime.com/b/muslim-avatar-illustration-people-flat-icon-167640569.jpg',
            roles: ['ADMIN'] as UserRole[],
        },
    },
})];

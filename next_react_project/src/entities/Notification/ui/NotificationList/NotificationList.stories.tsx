import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Notification } from '../../model/types/notification.types';

import { NotificationList } from './NotificationList';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationList>;

const notificationEntityItem: Notification = {
    id: '1',
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие',
    href: 'http://yandex.ru',
};

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                { ...notificationEntityItem, id: '1' },
                { ...notificationEntityItem, id: '2' },
                { ...notificationEntityItem, id: '3' },
            ],
        },
    ],
};

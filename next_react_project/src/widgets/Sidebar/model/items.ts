import { routesPath } from 'app/providers/router';
import i18n from 'shared/config/i18n/i18n';
import React from 'react';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticlesIcon from 'shared/assets/icons/article-20-20.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: routesPath.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: routesPath.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: routesPath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
    },
    {
        path: routesPath.articles,
        Icon: ArticlesIcon,
        text: 'Статьи',
        authOnly: true,
    },
];

import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/user';
import { NavLinkI } from '../../types/sidebar';

import HomeIcon from '@/shared/assets/icons/navigation-home-icon.svg';
import AboutIcon from '@/shared/assets/icons/navigation-about-icon.svg';
import ProfileIcon from '@/shared/assets/icons/navigation-profile-icon.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/consts/router';

export const getNavLinkList = createSelector(getUserAuthData, userData => {
    const navLinkList: NavLinkI[] = [
        {
            Icon: HomeIcon,
            text: 'Главная',
            path: getRouteMain(),
        },
        {
            Icon: AboutIcon,
            text: 'О сайте',
            path: getRouteAbout(),
        },
    ];

    if (userData) {
        navLinkList.push(
            {
                Icon: ProfileIcon,
                text: 'Профиль',
                path: getRouteProfile(userData.id),
                authOnly: true,
            },
            {
                Icon: ArticlesIcon,
                text: 'Статьи',
                path: getRouteArticles(),
                authOnly: true,
            },
        );
    }

    return navLinkList;
});

import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/user';
import { NavLinkI } from '../../types/sidebar';

import HomeIcon from 'shared/assets/icons/navigation-home-icon.svg';
import AboutIcon from 'shared/assets/icons/navigation-about-icon.svg';
import ProfileIcon from 'shared/assets/icons/navigation-profile-icon.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const getNavLinkList = createSelector(getUserAuthData, userData => {
    const navLinkList: NavLinkI[] = [
        {
            Icon: HomeIcon,
            text: 'Главная',
            path: RoutePath.main,
        },
        {
            Icon: AboutIcon,
            text: 'О сайте',
            path: RoutePath.about,
        },
    ];

    if (userData) {
        navLinkList.push(
            {
                Icon: ProfileIcon,
                text: 'Профиль',
                path: `${RoutePath.profile}/${userData.id}`,
                authOnly: true,
            },
            {
                Icon: ArticlesIcon,
                text: 'Статьи',
                path: RoutePath.articles,
                authOnly: true,
            },
        );
    }

    return navLinkList;
});

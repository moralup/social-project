import { VFC, SVGProps } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import HomeIcon from 'shared/assets/icons/navigation-home-icon.svg';
import AboutIcon from 'shared/assets/icons/navigation-about-icon.svg';
import ProfileIcon from 'shared/assets/icons/navigation-profile-icon.svg';

export interface NavLinkI {
    Icon: VFC<SVGProps<SVGSVGElement>>;
    text: string;
    path: string;
    authOnly?: boolean;
}

export const navLinkList: NavLinkI[] = [
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
    {
        Icon: ProfileIcon,
        text: 'Профиль',
        path: RoutePath.profile,
        authOnly: true,
    },
];

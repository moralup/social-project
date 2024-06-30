import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/articlesPage';
import { ArticleDetailsPage } from 'pages/articleDetailsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { VFC, SVGProps } from 'react';

import HomeIcon from 'shared/assets/icons/navigation-home-icon.svg';
import AboutIcon from 'shared/assets/icons/navigation-about-icon.svg';
import ProfileIcon from 'shared/assets/icons/navigation-profile-icon.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';

export interface AppRouteProps extends RouteProps {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'articles_details',
    // *last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles', // :id

    // *last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: AppRouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    {
        authOnly: true,
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
    {
        authOnly: true,
        path: RoutePath.articles,
        element: <ArticlesPage />,
    },
    {
        authOnly: true,
        path: `${RoutePath.articles_details}/:id`,
        element: <ArticleDetailsPage />,
    },

    // *last
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];

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
    {
        Icon: ArticlesIcon,
        text: 'Статьи',
        path: RoutePath.articles,
        authOnly: true,
    },
];

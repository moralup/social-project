import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/articlesPage';
import { ArticleDetailsPage } from 'pages/articleDetailsPage';
import { NotFoundPage } from 'pages/NotFoundPage';

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
    [AppRoutes.PROFILE]: '/profile', // :id
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
        path: `${RoutePath.profile}/:id`,
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

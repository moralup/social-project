import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/articlesPage';
import { ArticleDetailsPage } from 'pages/articleDetailsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ArticleEditPage } from 'pages/articleEditPage';
import { ArticleCreatePage } from 'pages/articleCreatePage';
import { ForbiddenPage } from 'pages/forbiddenPage';
import { UserRoleI } from 'entities/user/model/types/user';
import AdminPage from 'pages/adminPage/ui/adminPage';

export interface AppRouteProps extends RouteProps {
    authOnly?: boolean;
    roles?: UserRoleI[];
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'articles_details',
    ARTICLE_EDIT = 'articles_edit',
    ARTICLE_CREATE = 'articles_create',
    FORBIDDEN = 'forbidden',
    ADMIN = 'admin',

    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile', // :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles',
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ADMIN]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',

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
    {
        authOnly: true,
        path: `${RoutePath.articles_edit}`,
        element: <ArticleEditPage />,
    },
    {
        authOnly: true,
        path: `${RoutePath.articles_create}`,
        element: <ArticleCreatePage />,
    },
    {
        authOnly: true,
        path: `${RoutePath.admin}`,
        element: <AdminPage />,
        roles: ['ADMIN', 'MANAGER'],
    },
    {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage />,
    },

    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];

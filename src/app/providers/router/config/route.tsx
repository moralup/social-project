import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AdminPage } from '@/pages/adminPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/articlesPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ForbiddenPage } from '@/pages/forbiddenPage';
import { ArticleEditPage } from '@/pages/articleEditPage';
import { ArticleCreatePage } from '@/pages/articleCreatePage';
import { ArticleDetailsPage } from '@/pages/articleDetailsPage';
import { UserRoleI } from '@/entities/user';
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteNotFound,
    getRouteProfile,
} from '@/shared/consts/router';

// export interface AppRouteProps extends RouteProps {
//     authOnly?: boolean;
//     roles?: UserRoleI[];
// }
export type AppRouteProps = {
    authOnly?: boolean;
    roles?: UserRoleI[];
} & RouteProps;

export const routeConfig: AppRouteProps[] = [
    {
        path: getRouteMain(),
        element: <MainPage />,
    },
    {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    {
        authOnly: true,
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
    },
    {
        authOnly: true,
        path: getRouteArticles(),
        element: <ArticlesPage />,
    },
    {
        authOnly: true,
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailsPage />,
    },
    {
        authOnly: true,
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
    },
    {
        authOnly: true,
        path: getRouteArticleCreate(),
        element: <ArticleCreatePage />,
    },
    {
        authOnly: true,
        path: getRouteAdmin(),
        element: <AdminPage />,
        roles: ['ADMIN', 'MANAGER'],
    },
    {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },

    {
        path: getRouteNotFound(),
        element: <NotFoundPage />,
    },
];

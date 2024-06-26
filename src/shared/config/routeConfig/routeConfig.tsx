import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

export interface AppRouteProps extends RouteProps {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    // *last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',

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

    // *last
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];

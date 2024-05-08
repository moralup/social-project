import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
<<<<<<< HEAD
import { NotFoundPage } from 'pages/NotFoundPage';
=======
import { NotFound } from 'pages/NotFound';
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
<<<<<<< HEAD
    // последний
=======
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
<<<<<<< HEAD
        path: RoutePath.not_found,
        element: <NotFoundPage />,
=======
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFound />,
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
    },
};


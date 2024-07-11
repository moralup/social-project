import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    AppRouteProps,
    routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './requireAuth';

const renderWithWrapper = (route: AppRouteProps) => {
    const element = (
        <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );

    return (
        <Route
            key={route.path}
            path={route.path}
            element={
                route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
            }
        />
    );
};

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{routeConfig.map(renderWithWrapper)}</Routes>
        </Suspense>
    );
};

export default AppRouter;

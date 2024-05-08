import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
<<<<<<< HEAD
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
=======
import { PageLoader } from 'widgets/PageLoader';
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
<<<<<<< HEAD
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                )}
=======
                element={
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">{element}</div>
                    </Suspense>
                }
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
            />
        ))}
    </Routes>
);

export default AppRouter;


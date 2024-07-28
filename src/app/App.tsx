import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Theme, useTheme } from '@/entities/theme';
import { AppRouter } from '@/app/providers/router';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

import { initAuthData } from '@/entities/user';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getInited } from '@/entities/user/model/selectors/getInited';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    useEffect(() => {
        document.body.className = theme || Theme.DARK;
    }, [theme]);

    if (!inited) {
        return null;
    }

    return (
        <div className="app">
            <ErrorBoundary>
                <Suspense fallback="">
                    <Navbar />
                    <div className="content-page">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}

export default App;

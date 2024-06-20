import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

import { initAuthData } from 'entities/user';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    useEffect(() => {
        document.body.className = theme || Theme.DARK;
    }, [theme]);

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

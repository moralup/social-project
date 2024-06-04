import { Suspense, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { ErrorBoundary } from './providers/ErrorBoundary';

function App() {
    const { theme } = useTheme();

    useEffect(() => {
        document.body.className = theme;
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

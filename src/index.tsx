import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';

import App from './app/App';
import './shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

render(
    <BrowserRouter>
<<<<<<< HEAD
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
=======
        <ThemeProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </ThemeProvider>
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
    </BrowserRouter>,
    document.getElementById('root'),
);


import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/entities/theme';
import { StoreProvider } from '@/app/providers/StoreProvider';

import App from './app/App';

import './shared/config/i18n/i18n';
import './app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Container is not found!');
}

const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>,
);

import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise(res => {
    // @ts-ignore
    setTimeout(() => res(import('./articleDetailsPage')), 1000);
}));

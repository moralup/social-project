import { lazy } from 'react';

export const LoginFormAsync = lazy(() => new Promise(res => {
    // @ts-ignore
    setTimeout(() => res(import('./loginForm')), 1500);
}));

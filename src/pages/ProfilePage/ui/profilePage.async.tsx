import { lazy } from 'react';

const ProfilePageAsync = lazy(() => new Promise(res => {
    // @ts-ignore
    // setTimeout(() => res(import('./profilePage')), 1500);
    setTimeout(() => res(import('./profilePage')), 0);
}));

export { ProfilePageAsync as ProfilePage };

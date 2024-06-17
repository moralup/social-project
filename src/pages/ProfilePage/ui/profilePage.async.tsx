import { lazy } from 'react';

const ProfilePageAsync = lazy(() => new Promise(res => {
    // @ts-ignore
    setTimeout(() => res(import('./profilePage')), 1500);
}));

export { ProfilePageAsync as ProfilePage };

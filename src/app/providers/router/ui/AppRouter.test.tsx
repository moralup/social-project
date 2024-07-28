import { componentRender } from '@/shared/lib/tests/componentRender';
import AppRouter from './AppRouter';
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteProfile,
} from '@/shared/consts/router';
import { screen } from '@testing-library/react';
import { expect } from '@storybook/test';

describe('AppRouter', () => {
    test('page must be render', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('with incorrect router path, NotFoundPage must be render', async () => {
        componentRender(<AppRouter />, {
            route: '/incorrectPathAboasfoapsfopasf',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('with right user role, AdminPage must be render', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    authData: {
                        roles: ['ADMIN'],
                    },
                },
            },
        });

        const page = await screen.findByTestId('AdminPage');
        expect(page).toBeInTheDocument();
    });

    test('without right user role, when try to open AdminPage, must thrown over on ForbiddenPage', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    authData: {
                        roles: ['USER'],
                    },
                },
            },
        });

        const forbiddenPage = await screen.findByTestId('ForbiddenPage');
        expect(forbiddenPage).toBeInTheDocument();
    });

    test('when non-login user try to open ProfilePage, must thrown over on MainPage', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });
});

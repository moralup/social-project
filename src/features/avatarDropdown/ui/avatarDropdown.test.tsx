/* eslint-disable i18next/no-literal-string */
import { fireEvent, screen } from '@testing-library/react';

import { AvatarDropdown } from './avatarDropdown';
import { componentRender } from '@/shared/lib/tests/componentRender';

describe('AvatarDropdown', () => {
    test('when login admin, menu item should be 3: Admin panel, Profile, Log out', () => {
        componentRender(<AvatarDropdown />, {
            initialState: {
                user: {
                    authData: {
                        roles: ['ADMIN'],
                    },
                },
            },
        });
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getAllByRole('menuitem').length).toBe(3);
    });

    test('when login user, menu item should be 2: Profile, Log out', () => {
        componentRender(<AvatarDropdown />, {
            initialState: {
                user: {
                    authData: {
                        roles: ['USER'],
                    },
                },
            },
        });
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getAllByRole('menuitem').length).toBe(2);
    });

    test('when non-login user, menu must dont render', () => {
        componentRender(<AvatarDropdown />, {
            initialState: {
                user: {
                    authData: {
                        roles: ['USER'],
                    },
                },
            },
        });
        expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
});

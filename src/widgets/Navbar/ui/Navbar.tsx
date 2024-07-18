import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { LoginModal } from 'features/authByUsername';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import {
    getUserAuthData,
    getIsAdmin,
    logout,
    getIsManager,
} from 'entities/user';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';
import { Dropdown, DropDownItemI } from 'shared/ui/dropdown/dropdown';
import { Avatar } from 'shared/ui/avatar/avatar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(getIsAdmin);
    const isManager = useSelector(getIsManager);

    const onCloseModal = useCallback(() => setIsAuthModal(false), []);
    const onLogin = useCallback(() => setIsAuthModal(true), []);
    const onLogout = useCallback(() => dispatch(logout()), [dispatch]);

    if (authData) {
        const isAdminPanelAvailable = isAdmin && isManager;

        const dropdownItems: DropDownItemI[] = [
            isAdminPanelAvailable && {
                id: '3',
                content: t('Админ'),
                href: `${RoutePath.admin}`,
            },
            {
                id: '1',
                content: t('Выйти'),
                onClick: onLogout,
            },
            {
                id: '2',
                content: t('Профиль'),
                href: `${RoutePath.profile}/${authData.id}`,
            },
        ].filter(Boolean) as DropDownItemI[];

        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Dropdown
                    left
                    className={cls.dropdown}
                    // prettier-ignore
                    trigger={<Avatar alt="user avatar" src={authData.avatar} />}
                    items={dropdownItems}
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onLogin}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
};

/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { LoginModal } from '@/features/authByUsername';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Hstack } from '@/shared/ui/stack';

import { getUserAuthData } from '@/entities/user';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => setIsAuthModal(false), []);
    const onLogin = useCallback(() => setIsAuthModal(true), []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Hstack
                    gap="16"
                    className={cls.actions}
                >
                    <NotificationButton />
                    <AvatarDropdown />
                </Hstack>
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

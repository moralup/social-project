import { useCallback, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
    withoutPortal?: boolean;
}

export const Navbar = ({ className, withoutPortal }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => setIsAuthModal(prev => !prev), []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal
                withoutPortal={withoutPortal}
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                {t('lorem')}
            </Modal>
        </div>
    );
};

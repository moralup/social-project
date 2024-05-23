import { useState } from 'react';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

import { classNames } from 'shared/lib/classNames/classNames';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import HomeIcon from 'shared/assets/icons/navigation-home-icon.svg';
import AboutIcon from 'shared/assets/icons/navigation-about-icon.svg';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <nav className={cls.navigation}>
                <AppLink
                    to={RoutePath.main}
                    className={cls.link}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <HomeIcon className={cls.icon} />
                    <span className={cls.text}>{t('Главная')}</span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    className={cls.link}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.text}>{t('О сайте')}</span>
                </AppLink>
            </nav>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
};

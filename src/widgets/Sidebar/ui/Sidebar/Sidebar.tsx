import { useState } from 'react';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { Button } from 'shared/ui/Button/Button';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
<<<<<<< HEAD
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button data-testid="sidebar-toggle" onClick={onToggle}>
                TOGGLE
=======
        <div
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar,
                {
                    [cls.collapsed]: collapsed,
                },
                [className],
            )}
        >
            <Button data-testid="sidebar-toggle" onClick={onToggle}>
                toggle
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};


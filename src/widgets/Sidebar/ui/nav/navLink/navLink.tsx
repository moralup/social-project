import { useTranslation } from 'react-i18next';
import { FC, memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavLinkI } from '../../../model/links';
import cls from './navLink.module.scss';

interface NavLinkProps {
    collapsed: boolean;
    item: NavLinkI;
}
export const NavLink: FC<NavLinkProps> = memo(({ item, collapsed }: NavLinkProps) => {
    const { Icon, path, text } = item;
    const { t } = useTranslation();

    return (
        <AppLink
            to={path}
            className={classNames(cls.link, { [cls.collapsed]: collapsed })}
            theme={AppLinkTheme.SECONDARY}
        >
            <Icon className={cls.icon} />
            <span className={cls.text}>{t(text)}</span>
        </AppLink>
    );
});

import { FC, memo } from 'react';
import { navLinkList } from '../../../model/links';
import { NavLink } from '../navLink/navLink';
import cls from './nav.module.scss';

interface NavProps {
    collapsed: boolean;
}

export const Nav: FC<NavProps> = memo(({ collapsed }: NavProps) => {
    return (
        <nav className={cls.navigation}>
            {navLinkList.map(link => (
                <NavLink
                    key={link.path}
                    item={link}
                    collapsed={collapsed}
                />
            ))}
        </nav>
    );
});

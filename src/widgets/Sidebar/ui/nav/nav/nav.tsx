import { FC, memo } from 'react';
import { NavLink } from '../navLink/navLink';
import cls from './nav.module.scss';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/user';
import { NavLinkI } from 'widgets/Sidebar/model/types/sidebar';
import { getNavLinkList } from 'widgets/Sidebar/model/selectors/getNavLinkList';
import { Vstack } from 'shared/ui/stack/Vstack/Vstack';
// import { navLinkList, NavLinkI } from 'shared/config/routeConfig/routeConfig';

interface NavProps {
    collapsed: boolean;
}

export const Nav: FC<NavProps> = memo(({ collapsed }: NavProps) => {
    const auth = useSelector(getUserAuthData);
    const navLinkList = useSelector(getNavLinkList);

    const renderLinks = ({ authOnly, ...link }: NavLinkI) => {
        if (authOnly && !auth) {
            return null;
        }

        return (
            <NavLink
                key={link.path}
                item={link}
                collapsed={collapsed}
            />
        );
    };

    return (
        <nav className={cls.navigation}>
            <Vstack>{navLinkList.map(renderLinks)}</Vstack>
        </nav>
    );
});

import { FC, useCallback } from 'react';
import { Dropdown, DropDownItemI } from '@/shared/ui/dropdown';
import { Avatar } from '@/shared/ui/avatar';
import { useDispatch, useSelector } from 'react-redux';
import {
    getIsAdmin,
    getIsManager,
    getUserAuthData,
    logout,
} from '@/entities/user';
import { useTranslation } from 'react-i18next';
import { getRouteAdmin, getRouteProfile } from '@/shared/consts/router';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = ({ className }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(getIsAdmin);
    const isManager = useSelector(getIsManager);

    const onLogout = useCallback(() => dispatch(logout()), [dispatch]);

    if (!authData) return null;

    const isAdminPanelAvailable = isAdmin || isManager;
    const dropdownItems: DropDownItemI[] = [
        isAdminPanelAvailable && {
            id: '3',
            content: t('Админ'),
            href: getRouteAdmin(),
        },
        {
            id: '1',
            content: t('Выйти'),
            onClick: onLogout,
        },
        {
            id: '2',
            content: t('Профиль'),
            href: getRouteProfile(authData.id),
        },
    ].filter(Boolean) as DropDownItemI[];

    return (
        <Dropdown
            left
            items={dropdownItems}
            className={className}
            // prettier-ignore
            trigger={<Avatar alt="user avatar" src={authData.avatar} inverted />}
        />
    );
};

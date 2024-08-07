import { getUserAuthData } from '@/entities/user';
import { UserRoleI } from '@/entities/user/model/types/user';
import { getRouteForbidden, getRouteMain } from '@/shared/consts/router';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth = ({
    children,
    requireRole,
}: {
    children: JSX.Element;
    requireRole?: UserRoleI[];
}) => {
    const user = useSelector(getUserAuthData);
    const location = useLocation();
    const hasRequireRole = useMemo(() => {
        if (!requireRole) return true;

        return requireRole.some(role => {
            return user?.roles?.includes(role);
        });
    }, [requireRole, user?.roles]);

    if (!user) {
        return (
            <Navigate
                to={getRouteMain()}
                state={{ from: location }}
                replace
            />
        );
    }

    if (!hasRequireRole) {
        return (
            <Navigate
                to={getRouteForbidden()}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
};

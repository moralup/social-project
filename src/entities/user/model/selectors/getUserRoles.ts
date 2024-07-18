import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from './getUserAuthData';

const getUserRoles = createSelector(getUserAuthData, user => user?.roles);

export const getIsAdmin = createSelector(getUserRoles, roles => {
    return Boolean(roles?.includes('ADMIN'));
});

export const getIsManager = createSelector(getUserRoles, roles => {
    return Boolean(roles?.includes('MANAGER'));
});

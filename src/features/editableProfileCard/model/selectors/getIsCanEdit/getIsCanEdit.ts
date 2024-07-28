import { createSelector } from '@reduxjs/toolkit';
import { getProfileData } from '../getProfileData';
import { getUserAuthData } from '@/entities/user';

export const getIsCanEdit = createSelector(
    getUserAuthData,
    getProfileData,
    (user, profile) => user?.id === profile.id,
);

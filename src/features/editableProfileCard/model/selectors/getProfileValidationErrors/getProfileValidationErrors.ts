import { createSelector } from '@reduxjs/toolkit';
import { getProfile } from '../getProfile/getProfile';

export const getProfileValidationErrors = createSelector(
    getProfile,
    state => state?.validationErrors,
);

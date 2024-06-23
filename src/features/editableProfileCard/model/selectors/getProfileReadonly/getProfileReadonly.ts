import { createSelector } from '@reduxjs/toolkit';
import { getProfile } from '../getProfile/getProfile';

export const getProfileReadonly = createSelector(getProfile, state => state?.readonly || false);

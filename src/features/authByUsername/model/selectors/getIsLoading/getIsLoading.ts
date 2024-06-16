import { createSelector } from '@reduxjs/toolkit';
import { getLogin } from '../getLogin';

export const getIsLoading = createSelector(getLogin, state => state?.isLoading || false);

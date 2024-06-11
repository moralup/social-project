import { createSelector } from '@reduxjs/toolkit';
import { getLogin } from './getLogin';

export const getError = createSelector(getLogin, state => state?.error);

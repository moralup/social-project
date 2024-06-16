import { createSelector } from '@reduxjs/toolkit';
import { getLogin } from '../getLogin';

export const getUsername = createSelector(getLogin, state => state?.username || '');

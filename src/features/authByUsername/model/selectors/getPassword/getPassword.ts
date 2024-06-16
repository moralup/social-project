import { createSelector } from '@reduxjs/toolkit';
import { getLogin } from '../getLogin';

export const getPassword = createSelector(getLogin, state => state?.password || '');

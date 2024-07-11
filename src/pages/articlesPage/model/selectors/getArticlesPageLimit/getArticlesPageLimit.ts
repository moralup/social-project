import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPage } from '../getArticlesPage';

export const getArticlesPageLimit = createSelector(
    getArticlesPage,
    state => state?.limit,
);

import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPage } from '../getArticlesPage/getArticlesPage';

export const getArticlesPageError = createSelector(
    getArticlesPage,
    state => state?.error,
);

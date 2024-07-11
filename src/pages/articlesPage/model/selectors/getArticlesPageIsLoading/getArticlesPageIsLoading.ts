import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPage } from '../getArticlesPage/getArticlesPage';

export const getArticlesPageIsLoading = createSelector(
    getArticlesPage,
    state => state?.isLoading,
);

import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPage } from '../getArticlesPage';

export const getGetArticlesPagePaginationPage = createSelector(
    getArticlesPage,
    state => state?.page || 1,
);

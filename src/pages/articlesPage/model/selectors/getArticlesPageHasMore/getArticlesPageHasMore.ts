import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPage } from '../getArticlesPage';

export const getArticlesPageHasMore = createSelector(
    getArticlesPage,
    state => state?.hasMore,
);

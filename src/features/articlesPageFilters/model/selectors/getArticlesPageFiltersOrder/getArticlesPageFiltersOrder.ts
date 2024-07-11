import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPageFilters } from '../getArticlesPageFilters/getArticlesPageFilters';

export const getArticlesPageFiltersOrder = createSelector(
    getArticlesPageFilters,
    state => state?.order || 'asc',
);

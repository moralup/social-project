import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPageFilters } from '../getArticlesPageFilters/getArticlesPageFilters';

export const getArticlesPageFiltersSearch = createSelector(
    getArticlesPageFilters,
    state => state?.search,
);

import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPageFilters } from '../getArticlesPageFilters/getArticlesPageFilters';
import { ArticleSortFiled } from '../../types/articlesPageFiltersSchema';

export const getArticlesPageFiltersSort = createSelector(
    getArticlesPageFilters,
    state => state?.sort || ArticleSortFiled.CREATED,
);

import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPageFilters } from '../getArticlesPageFilters/getArticlesPageFilters';
import { ArticleType } from '@/entities/article/model/types/article';

export const getArticlesPageFiltersType = createSelector(
    getArticlesPageFilters,
    state => state?.type || ArticleType.ALL,
);

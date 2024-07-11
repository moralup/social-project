import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPageFilters } from '../getArticlesPageFilters/getArticlesPageFilters';
import { ArticleView } from 'entities/article';

export const getArticlesPageFiltersView = createSelector(
    getArticlesPageFilters,
    state => state?.view || ArticleView.COMPACT,
);

import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPageFiltersOrder } from '../getArticlesPageFiltersOrder';
import { getArticlesPageFiltersSearch } from '../getArticlesPageFiltersSearch';
import { getArticlesPageFiltersSort } from '../getArticlesPageFiltersSort';
import { getArticlesPageFiltersType } from '../getArticlesPageFiltersType';
import { ArticleType } from '@/entities/article/model/types/article';

export const getArticlesPageFiltersUrl = createSelector(
    getArticlesPageFiltersOrder,
    getArticlesPageFiltersSearch,
    getArticlesPageFiltersSort,
    getArticlesPageFiltersType,
    (order, search, sort, type) => ({
        _sort: sort,
        _order: order,
        q: search,
        type: type === ArticleType.ALL ? undefined : type,
    }),
);

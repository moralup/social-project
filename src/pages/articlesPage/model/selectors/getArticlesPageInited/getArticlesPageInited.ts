import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPage } from '../getArticlesPage';

export const getArticlesPageInited = createSelector(
    getArticlesPage,
    state => state?._inited,
);

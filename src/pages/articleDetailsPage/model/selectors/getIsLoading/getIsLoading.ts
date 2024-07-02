import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsComments } from '../getArticleDetailsComments';

export const getIsLoading = createSelector(
    getArticleDetailsComments,
    state => state?.isLoading,
);

import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsComments } from '../getArticleDetailsComments';

export const getError = createSelector(getArticleDetailsComments, state => state?.error);

import { ArticleDetailsPageSchema } from '../types';
import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import {
    //
    articleDetailsPageRecommendationReducer,
} from './articleDetailsPageRecommendationSlice/articleDetailsPageRecommendationSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsPageRecommendationReducer,
});

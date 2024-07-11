import { EntityState } from '@reduxjs/toolkit';
import { ArticleI } from 'entities/article';

export interface ArticleDetailsRecommendationSchema
    extends EntityState<ArticleI> {
    error?: string;
    isLoading: boolean;
}

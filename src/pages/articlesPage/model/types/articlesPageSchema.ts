import { EntityState } from '@reduxjs/toolkit';
import { ArticleI } from 'entities/article';

export interface ArticlesPageSchema extends EntityState<ArticleI> {
    isLoading: boolean;
    error?: string;

    page: number;
    limit: number;
    hasMore: boolean;
    _inited: boolean;
}

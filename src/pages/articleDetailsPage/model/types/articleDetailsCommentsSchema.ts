import { EntityState } from '@reduxjs/toolkit';
import { CommentI } from 'entities/comment';

export interface ArticleDetailsCommentsSchema extends EntityState<CommentI>{
    data?: CommentI[];
    isLoading?: boolean;
    error?: string;
}

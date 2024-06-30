import { ArticleI } from './article';

export interface ArticleDetailsSchema {
    isLoading: boolean;
    data?: ArticleI;
    error?: string;
}

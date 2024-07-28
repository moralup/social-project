import { ArticleView } from '@/entities/article';
import { ArticleType } from '@/entities/article/model/types/article';

export enum ArticleSortFiled {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

export type SortOrderType = 'asc' | 'desc';

export interface ArticlesPageFiltersSchema {
    order: SortOrderType;
    sort: ArticleSortFiled;
    search: string;
    view: ArticleView;
    type?: ArticleType;
}

import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch';

import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';

import { getArticles } from '../../model/slices/articlesPageSlice';
import { getArticlesPageIsLoading } from '../../model/selectors/getArticlesPageIsLoading';
import { getArticlesPageFiltersView } from 'features/articlesPageFilters';

import { ArticleList } from 'entities/article';

export const InfiniteArticleList: FC = () => {
    const dispatch = useTypedDispatch();

    const articleView = useSelector(getArticlesPageFiltersView);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const articles = useSelector(getArticles.selectAll);

    useEffect(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <ArticleList
            isLoading={isLoading}
            articles={articles}
            view={articleView}
            target="_blank"
        />
    );
};

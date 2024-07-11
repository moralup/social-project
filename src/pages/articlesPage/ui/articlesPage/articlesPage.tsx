import { FC, memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import {
    articlesPageReducer,
    getArticles,
} from '../../model/slices/articlesPageSlice';
import { ArticleList } from 'entities/article';
import {
    ReducersList,
    DynamicModuleLoader,
} from 'shared/lib/components/dynamicModuleLoader';

import cls from './articlesPage.module.scss';
import { useSelector } from 'react-redux';
import { getArticlesPageIsLoading } from '../../model/selectors/getArticlesPageIsLoading';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch';
import { Page } from 'widgets/page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from 'features/articlesPageFilters';
import { getArticlesPageFiltersView } from 'features/articlesPageFilters/model/selectors/getArticlesPageFiltersView';
import { useSearchParams } from 'react-router-dom';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    const dispatch = useTypedDispatch();
    const articleView = useSelector(getArticlesPageFiltersView);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const articles = useSelector(getArticles.selectAll);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useEffect(() => {
        dispatch(initArticlesPage(searchParams));
    }, [dispatch, searchParams]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            saveAfterUnmount
        >
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.articlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleList
                    isLoading={isLoading}
                    articles={articles}
                    view={articleView}
                    target="_blank"
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);

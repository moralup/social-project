import { FC, memo, useCallback } from 'react';

import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import {
    ReducersList,
    DynamicModuleLoader,
} from '@/shared/lib/components/dynamicModuleLoader';

import { useTypedDispatch } from '@/shared/lib/hooks/useTypedDispatch';
import { Page } from '@/widgets/page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticlesPageFilters } from '@/features/articlesPageFilters';
import { InfiniteArticleList } from '../infiniteArticleList/infiniteArticleList';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = () => {
    const dispatch = useTypedDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            saveAfterUnmount
        >
            <Page
                data-testid="ArticlesPage"
                onScrollEnd={onLoadNextPart}
            >
                <ArticlesPageFilters />
                <InfiniteArticleList />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);

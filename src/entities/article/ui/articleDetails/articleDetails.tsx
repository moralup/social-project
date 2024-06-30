import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch';
import { DynamicModuleLoader } from 'shared/lib/components/dynamicModuleLoader';

import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';

import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData';

import { Text, TextTheme } from 'shared/ui/Text';
import { ArticleSkeleton } from '../articleSkeleton/articleSkeleton';
import { ArticleDetailsContent } from '../articleDetailsContent/articleDetailsContent';

interface ArticleDetailsProps {
    articleId?: string;
}

const reducers = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo(
    ({ articleId }: ArticleDetailsProps) => {
        const dispatch = useTypedDispatch();

        const data = useSelector(getArticleDetailsData);
        const isLoading = useSelector(getArticleDetailsIsLoading);
        const error = useSelector(getArticleDetailsError);

        let content;

        switch (true) {
        case isLoading:
            content = <ArticleSkeleton />;
            break;

        case Boolean(error):
            content = <Text title="Error" theme={TextTheme.ERROR} />;
            break;

        case Boolean(data):
            content = <ArticleDetailsContent data={data!} />;
            break;

        default:
            content = null;
        }

        useEffect(() => {
            if (articleId) {
                dispatch(fetchArticleById(articleId));
            }
        }, [dispatch, articleId]);

        return (
            <DynamicModuleLoader reducers={reducers}>
                <div>
                    {content}
                </div>
            </DynamicModuleLoader>
        );
    },
);

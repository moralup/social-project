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
import {
    //
    ArticleDetailsSkeleton,
} from '../articleSkeletons/articleDetailsSkeleton/articleDetailsSkeleton';
import { ArticleDetailsContent } from './articleDetailsContent';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';

interface ArticleDetailsProps {
    articleId?: string;
}

const reducers = {
    articleDetails: articleDetailsReducer,
};

const useArticleDetailsContent = () => {
    const data = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    // prettier-ignore
    switch (true) {
    case isLoading:
        return <ArticleDetailsSkeleton />;
    case Boolean(error):
        return (
            <Text
                title="Error"
                theme={TextTheme.ERROR}
            />
        );
    case Boolean(data):
        return <ArticleDetailsContent data={data!} />;
    default:
        return null;
    }
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo(
    ({ articleId }: ArticleDetailsProps) => {
        const dispatch = useTypedDispatch();
        const content = useArticleDetailsContent();
        const { t } = useTranslation();
        const navigate = useNavigate();
        const onGoBack = () => {
            navigate(-1);
        };

        useEffect(() => {
            if (articleId) {
                dispatch(fetchArticleById(articleId));
            }
        }, [dispatch, articleId]);

        return (
            <DynamicModuleLoader
                reducers={reducers}
            >
                <>
                    <Button onClick={onGoBack}>{t('Вернуться назад')}</Button>
                    <div>{content}</div>
                </>
            </DynamicModuleLoader>
        );
    },
);

import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTypedDispatch } from '@/shared/lib/hooks/useTypedDispatch';
import { DynamicModuleLoader } from '@/shared/lib/components/dynamicModuleLoader';

import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';

import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData';

import { Text, TextTheme } from '@/shared/ui/Text';
import {
    //
    ArticleDetailsSkeleton,
} from '../articleSkeletons/articleDetailsSkeleton/articleDetailsSkeleton';
import { ArticleDetailsContent } from './articleDetailsContent';
import { useTranslation } from 'react-i18next';
import { ArticleI } from '../../model/types/article';
import cls from './articleDetails.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import { getUserAuthData } from '@/entities/user';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/consts/router';

interface ArticleDetailsProps {
    articleId?: string;
}

const reducers = {
    articleDetails: articleDetailsReducer,
};

const getContent = (data?: ArticleI, isLoading?: boolean, error?: string) => {
    if (isLoading) {
        return <ArticleDetailsSkeleton />;
    }

    if (error || !data) {
        return (
            <Text
                data-testid="error"
                title="Error"
                theme={TextTheme.ERROR}
            />
        );
    }
    return <ArticleDetailsContent data={data} />;
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo(
    ({ articleId }: ArticleDetailsProps) => {
        const dispatch = useTypedDispatch();
        const { t } = useTranslation();

        const data = useSelector(getArticleDetailsData);
        const isLoading = useSelector(getArticleDetailsIsLoading);
        const error = useSelector(getArticleDetailsError);
        const user = useSelector(getUserAuthData);
        const isCanEdit = user?.id === data?.userId;

        useEffect(() => {
            if (articleId) {
                dispatch(fetchArticleById(articleId));
            }
        }, [dispatch, articleId]);

        return (
            <DynamicModuleLoader reducers={reducers}>
                <>
                    <div className={cls.header}>
                        <AppLink
                            className={cls.allArticlesLink}
                            to={getRouteArticles()}
                        >
                            {t('Все статьи')}
                        </AppLink>
                        {isCanEdit && (
                            <AppLink
                                data-testid="edit-link"
                                to={getRouteArticleEdit(articleId!)}
                            >
                                {t('Редактировать')}
                            </AppLink>
                        )}
                    </div>
                    {getContent(data, isLoading, error)}
                </>
            </DynamicModuleLoader>
        );
    },
);

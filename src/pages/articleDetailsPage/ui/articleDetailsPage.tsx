import { FC, memo, useCallback, useEffect } from 'react';
import { ArticleDetails, ArticleList, ArticleView } from 'entities/article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/comment';
import { Text } from 'shared/ui/Text';
import { Page } from 'widgets/page';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/dynamicModuleLoader';
import { getArticleComments } from '../model/slice/articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../model/selectors/getIsLoading';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/addCommentForm';

import cls from './articleDetailsPage.module.scss';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { getText } from 'features/addCommentForm/model/selectors/getText';
import {
    //
    getArticleRecommendation,
} from '../model/slice/articleDetailsPageRecommendationSlice/articleDetailsPageRecommendationSlice';
import { getRecommendationIsLoading } from '../model/selectors/recommendation/getRecommendationIsLoading';
import {
    //
    fetchArticlesRecommendations,
} from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../model/slice';

interface ArticleDetailsPageProps {}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = () => {
    const { id: articleId } = useParams<{ id: string }>();
    const dispatch = useTypedDispatch();
    const text = useSelector(getText);
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendation.selectAll);
    const commentsIsLoading = useSelector(getIsLoading);
    const recommendationsIsLoading = useSelector(getRecommendationIsLoading);

    const onSendComment = useCallback(() => {
        if (articleId && text) {
            dispatch(addCommentForArticle({ articleId, text }));
        }
    }, [dispatch, articleId, text]);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
        dispatch(fetchArticlesRecommendations());
    }, [dispatch, articleId]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page>
                <ArticleDetails articleId={articleId} />
                <Text title="Комментарии" />
                <AddCommentForm
                    className={cls.commentForm}
                    onSendComment={onSendComment}
                />
                <Text title="Рекоммендуем" />
                <ArticleList
                    articles={recommendations}
                    view={ArticleView.COMPACT}
                    isLoading={recommendationsIsLoading}
                    target="_blank"
                />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);

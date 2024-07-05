import { FC, memo, useCallback, useEffect } from 'react';
import { ArticleDetails } from 'entities/article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/comment';
import { Text } from 'shared/ui/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/dynamicModuleLoader';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../model/slice/articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../model/selectors/getIsLoading';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/addCommentForm';

import cls from './articleDetailsPage.module.scss';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
// import { addCommentForArticle } from 'features/addCommentForm/model/services/addCommentForArticle/addCommentForArticle';
import { getText } from 'features/addCommentForm/model/selectors/getText';

interface ArticleDetailsPageProps {}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = () => {
    const { id: articleId } = useParams<{ id: string }>();
    const dispatch = useTypedDispatch();
    const text = useSelector(getText);
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getIsLoading);

    const onSendComment = useCallback(() => {
        if (articleId && text) {
            dispatch(addCommentForArticle({ articleId, text }));
        }
    }, [dispatch, articleId, text]);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    }, [dispatch, articleId]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>
                <ArticleDetails articleId={articleId} />
                <Text title="Комментарии" />
                <AddCommentForm
                    className={cls.commentForm}
                    onSendComment={onSendComment}
                />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);

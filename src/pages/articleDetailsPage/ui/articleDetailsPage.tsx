import { FC, memo, useEffect } from 'react';
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

interface ArticleDetailsPageProps {}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useTypedDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>
                <ArticleDetails articleId={id} />
                <Text title="Комментарии" />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);

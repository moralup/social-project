import { Text } from '@/shared/ui/Text';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/comment';
import { useArticleComments } from '../api/articleCommentsApi';
import { Loader } from '@/shared/ui/Loader';
import { Vstack } from '@/shared/ui/stack';

interface ArticleDetailsCommentsProps {
    articleId: string;
}

export const ArticleDetailsComments = (props: ArticleDetailsCommentsProps) => {
    const { articleId } = props;

    const {
        isError,
        isLoading,
        isFetching,
        data: comments,
    } = useArticleComments(articleId);

    if (isError) {
        return null;
    }
    return (
        <Vstack gap="16" max>
            <Text title="Комментарии" />
            <AddCommentForm articleId={articleId} />
            {isFetching && <Loader />}
            <CommentList
                isLoading={isLoading}
                comments={comments}
            />
        </Vstack>
    );
};

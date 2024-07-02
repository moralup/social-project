import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './commentList.module.scss';
import { CommentI } from 'entities/comment/model/types/comment';
import { CommentCard } from '../commentCard/commentCard';
import { Text } from 'shared/ui/Text';

interface CommentListProps {
    className?: string;
    comments?: CommentI[];
    isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = props => {
    const { className, comments, isLoading } = props;

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {comments?.length ? (
                comments.map(comment => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        comment={comment}
                    />
                ))
            ) : (
                <Text
                    data-testid="no-comments"
                    title="Комментарии отсутствуют"
                />
            )}
        </div>
    );
};

import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { CommentI } from '../../model/types/comment';

import { Avatar } from 'shared/ui/avatar/avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/skeleton/skeleton';

import cls from './commentCard.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface CommentCardProps {
    className?: string;
    comment: CommentI;
    isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = props => {
    const { className, comment, isLoading } = props;
    const { text, user } = comment;
    const { username, avatar, id } = user;

    if (isLoading) {
        return (
            <div
                className={cls.commentCard}
                data-testid="skeleton-wrapper"
            >
                <div className={cls.user}>
                    <Skeleton
                        data-testid="skeleton-avatar"
                        width={40}
                        isCircle
                    />
                    <Skeleton
                        data-testid="skeleton-user"
                        width={80}
                        height={30}
                    />
                </div>
                <Skeleton
                    data-testid="skeleton-comment"
                    width="90%"
                    height={25}
                />
            </div>
        );
    }

    return (
        <div
            data-testid="commentCard"
            className={classNames(cls.commentCard, {}, [className])}
        >
            <AppLink
                to={`${RoutePath.profile}/${id}`}
                className={cls.user}
            >
                {avatar && (
                    <Avatar
                        data-testid="avatar"
                        src={avatar}
                        alt={`${username} avatar`}
                    />
                )}
                <Text title={username} />
            </AppLink>
            <Text>{text}</Text>
        </div>
    );
};

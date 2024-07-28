import { FC } from 'react';

import { CommentI } from '../../model/types/comment';

import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/skeleton';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './commentCard.module.scss';
import { getRouteProfile } from '@/shared/consts/router';

interface CommentCardProps {
    className?: string;
    comment: CommentI;
    isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = props => {
    const { className, comment, isLoading } = props;
    const { text, user } = comment;
    const { username, avatar, id } = user;
    console.log('avatar', avatar);
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
                to={getRouteProfile(id)}
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

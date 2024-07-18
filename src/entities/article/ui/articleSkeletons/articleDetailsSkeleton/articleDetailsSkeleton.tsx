import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/skeleton/skeleton';
import cls from './articleDetailsSkeleton.module.scss';

export const ArticleDetailsSkeleton: FC = () => {
    return (
        <div data-testid="articleDetailsSkeleton">
            <Skeleton
                className={classNames(cls.skeleton, {}, [cls.skeletonAvatar])}
                width={130}
                isCircle
            />
            <Skeleton
                className={cls.skeleton}
                height={40}
                width="60%"
            />
            <Skeleton
                className={cls.skeleton}
                height={24}
                width="40%"
            />
            <Skeleton
                className={cls.skeleton}
                height={150}
                width="80%"
            />
            <Skeleton
                className={cls.skeleton}
                height={150}
                width="80%"
            />
        </div>
    );
};

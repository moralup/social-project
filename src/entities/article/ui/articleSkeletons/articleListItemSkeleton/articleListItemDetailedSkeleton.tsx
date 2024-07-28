import { FC } from 'react';
import { Skeleton } from '@/shared/ui/skeleton';
import cls from './articleListItemDetailedSkeleton.module.scss';

export const ArticleListItemDetailedSkeleton: FC = () => {
    return (
        <div
            data-testid="articleListItemDetailedSkeleton"
            className={cls.articleListItemSkeleton}
        >
            <div className={cls.header}>
                <Skeleton
                    width={40}
                    isCircle
                />
                <Skeleton
                    className={cls.username}
                    width={100}
                    height={30}
                />
                <Skeleton
                    width={100}
                    height={20}
                />
            </div>
            <Skeleton
                className={cls.title}
                width={400}
                height={24}
            />
            <Skeleton
                className={cls.types}
                width={140}
                height={16}
            />
            <Skeleton
                height={430}
                className={cls.text}
            />
            <div className={cls.footer}>
                <Skeleton
                    className={cls.readMoreBtn}
                    width={130}
                    height={30}
                />
                <Skeleton
                    width={80}
                    height={16}
                />
            </div>
        </div>
    );
};

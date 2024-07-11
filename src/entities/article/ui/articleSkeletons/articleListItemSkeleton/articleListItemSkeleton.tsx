import { FC } from 'react';
import { ArticleView } from '../../../model/types/article';
import { Skeleton } from 'shared/ui/skeleton/skeleton';
import { ArticleListItemDetailedSkeleton } from './articleListItemDetailedSkeleton';

interface ArticleListItemProps {
    view: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemProps> = props => {
    const { view } = props;

    if (view === ArticleView.DETAILED) {
        return <ArticleListItemDetailedSkeleton />;
    }

    return (
        <Skeleton
            height={280}
            width={220}
            radius={12}
        />
    );
};

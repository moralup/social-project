import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleI, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../articleListItem/articleListItem';
import { ArticleListItemSkeleton } from '../articleSkeletons/articleListItemSkeleton/articleListItemSkeleton';
import cls from './articleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: ArticleI[];
    isLoading?: boolean;
    view: ArticleView;
    target?: '_blank';
}

const getSkeletons = (view: ArticleView) => {
    // prettier-ignore
    const mockArticles = view === ArticleView.COMPACT
        ? Array(12).fill(0)
        : Array(6).fill(0);

    return mockArticles.map((_: any, i) => (
        <ArticleListItemSkeleton
            key={i}
            view={view}
        />
    ));
};

export const ArticleList: FC<ArticleListProps> = props => {
    const { className, articles, isLoading, view, target } = props;

    return (
        <div className={classNames(cls.articleList, {}, [className])}>
            {articles.map(article => (
                <ArticleListItem
                    key={article.id}
                    article={article}
                    view={view}
                    target={target}
                />
            ))}
            {isLoading && getSkeletons(view)}
        </div>
    );
};

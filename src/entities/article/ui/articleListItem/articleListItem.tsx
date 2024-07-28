import { FC } from 'react';

import { ArticleView, type ArticleI } from '../../model/types/article';

import { ArticleListItemDetailed } from './articleListItemDetailed';
import { ArticleListItemCompact } from './articleListItemCompact';
import { getRouteArticleDetails } from '@/shared/consts/router';

interface ArticleListItemProps {
    article: ArticleI;
    view: ArticleView;
    target?: '_blank';
}

export const ArticleListItem: FC<ArticleListItemProps> = props => {
    const { article, view, target } = props;
    const { id } = article;

    if (view === ArticleView.DETAILED) {
        return (
            <ArticleListItemDetailed
                article={article}
                articleDetailsPath={getRouteArticleDetails(id)}
                target={target}
            />
        );
    }

    return (
        <ArticleListItemCompact
            article={article}
            articleDetailsPath={getRouteArticleDetails(id)}
            target={target}
        />
    );
};

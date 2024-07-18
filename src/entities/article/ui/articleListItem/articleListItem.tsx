import { FC } from 'react';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ArticleView, type ArticleI } from '../../model/types/article';

import { ArticleListItemDetailed } from './articleListItemDetailed';
import { ArticleListItemCompact } from './articleListItemCompact';

interface ArticleListItemProps {
    article: ArticleI;
    view: ArticleView;
    target?: '_blank';
}

export const ArticleListItem: FC<ArticleListItemProps> = props => {
    const { article, view, target } = props;
    const { id } = article;
    const articleDetailsPath = `${RoutePath.articles_details}/${id}`;

    if (view === ArticleView.DETAILED) {
        return (
            <ArticleListItemDetailed
                article={article}
                articleDetailsPath={articleDetailsPath}
                target={target}
            />
        );
    }

    return (
        <ArticleListItemCompact
            article={article}
            articleDetailsPath={articleDetailsPath}
            target={target}
        />
    );
};

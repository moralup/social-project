import { FC } from 'react';

import { ArticleI } from '../../model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Text } from 'shared/ui/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';

import cls from './articleListItem.module.scss';

interface ArticleListItemProps {
    article: ArticleI;
    articleDetailsPath: string;
    target?: '_blank';
}

export const ArticleListItemCompact: FC<ArticleListItemProps> = props => {
    const { article, articleDetailsPath, target } = props;
    const { title, type, img, createdAt, views } = article;

    return (
        <AppLink
            to={articleDetailsPath}
            target={target}
        >
            <div
                data-testid="articleListItemCompact"
                className={classNames(cls.articleListItem, {}, [cls.compact])}
            >
                <div className={cls.imageWrapper}>
                    <img
                        src={img}
                        alt=""
                        className={cls.image}
                    />
                    <Text className={cls.date}>{createdAt}</Text>
                </div>
                <div className={cls.infoWrapper}>
                    <Text className={cls.types}>{type.join(', ')}</Text>
                    <Text className={cls.views}>{String(views)}</Text>
                    <EyeIcon className={cls.viewsIcon} />
                </div>
                <Text
                    className={cls.title}
                    title={title}
                    isInlineTitle
                />
            </div>
        </AppLink>
    );
};

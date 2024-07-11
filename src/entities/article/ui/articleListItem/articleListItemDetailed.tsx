import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import {
    ArticleBlockType,
    ArticleTextBlockI,
} from 'entities/article/model/types/article';
import { ArticleI } from '../../model/types/article';

import { ArticleTextBlock } from '../articleBlocks/articleTextBlock/articleTextBlock';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Text } from 'shared/ui/Text';
import { Avatar } from 'shared/ui/avatar/avatar';
import { Button } from 'shared/ui/Button/Button';
import EyeIcon from 'shared/assets/icons/eye.svg';

import cls from './articleListItem.module.scss';

interface ArticleListItemProps {
    article: ArticleI;
    articleDetailsPath: string;
    target?: '_blank';
}

export const ArticleListItemDetailed: FC<ArticleListItemProps> = props => {
    const { article, articleDetailsPath, target } = props;
    const { user, createdAt, img, title, type, views, blocks } = article;
    const { t } = useTranslation();

    const textBlock = blocks.find(
        block => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlockI | undefined;

    return (
        <div className={classNames(cls.articleListItem, {}, [cls.detailed])}>
            <div className={cls.header}>
                {user.avatar && (
                    <Avatar
                        src={user.avatar}
                        className={cls.avatar}
                        alt=""
                    />
                )}
                <Text className={cls.username}>{user.username}</Text>
                <Text className={cls.date}>{createdAt}</Text>
            </div>
            <Text
                className={cls.title}
                title={title}
            />
            <Text className={cls.types}>{type.join(', ')}</Text>
            <img
                src={img}
                alt=""
                className={cls.image}
            />
            {textBlock && (
                <ArticleTextBlock
                    block={textBlock}
                    className={cls.textBlock}
                />
            )}
            <div className={cls.footer}>
                <AppLink
                    className={cls.readMoreBtn}
                    to={articleDetailsPath}
                    target={target}
                >
                    <Button>{t('Читать далее...')}</Button>
                </AppLink>
                <Text className={cls.views}>{String(views)}</Text>
                <EyeIcon className={cls.viewsIcon} />
            </div>
        </div>
    );
};

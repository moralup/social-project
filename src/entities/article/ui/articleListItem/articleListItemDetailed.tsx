import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import {
    ArticleBlockType,
    ArticleTextBlockI,
} from '@/entities/article/model/types/article';
import { ArticleI } from '../../model/types/article';

import { ArticleTextBlock } from '../articleBlocks/articleTextBlock/articleTextBlock';
import { AppLink } from '@/shared/ui/AppLink';
import { Text } from '@/shared/ui/Text';
import { Avatar } from '@/shared/ui/avatar';
import { Button } from '@/shared/ui/Button';
import EyeIcon from '@/shared/assets/icons/eye.svg';

import cls from './articleListItem.module.scss';
import { AppImage } from '@/shared/ui/appImage/appImage';
import { Skeleton } from '@/shared/ui/skeleton';

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
        <div
            data-testid="articleListItemDetailed"
            className={classNames(cls.articleListItem, {}, [cls.detailed])}
        >
            <div className={cls.header}>
                {user?.avatar && (
                    <Avatar
                        data-testid="articleListItemDetailedUserAvatar"
                        src={user.avatar}
                        className={cls.avatar}
                        alt=""
                    />
                )}
                <Text className={cls.username}>{user?.username}</Text>
                <Text className={cls.date}>{createdAt}</Text>
            </div>
            <Text
                className={cls.title}
                title={title}
            />
            <Text className={cls.types}>{type.join(', ')}</Text>
            <AppImage
                src={img}
                alt=""
                className={cls.image}
                fallback={(
                    <Skeleton
                        width="100%"
                        height={200}
                        inverted
                    />
                )}
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
                    data-testid="articleListItemAppLink"
                >
                    <Button>{t('Читать далее...')}</Button>
                </AppLink>
                <Text className={cls.views}>{String(views)}</Text>
                <EyeIcon className={cls.viewsIcon} />
            </div>
        </div>
    );
};

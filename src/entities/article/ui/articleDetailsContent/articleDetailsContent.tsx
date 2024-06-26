import { FC } from 'react';
import {
    type ArticleBlockI,
    type ArticleI,
    ArticleBlockType,
} from '../../model/types/article';

import { Avatar, AvatarSize } from 'shared/ui/avatar/avatar';
import { Text, TextSize } from 'shared/ui/Text';

import { ArticleCodeBlock } from '../blocks/articleCodeBlock/articleCodeBlock';
import { ArticleImageBlock } from '../blocks/articleImageBlock/articleImageBlock';
import { ArticleTextBlock } from '../blocks/articleTextBlock/articleTextBlock';

import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';

import cls from './articleDetailsContent.module.scss';

interface ArticleContentProps {
    data: ArticleI;
}

export const ArticleDetailsContent: FC<ArticleContentProps> = ({ data }) => {
    const renderBlocks = (block: ArticleBlockI) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlock
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlock
                    block={block}
                    key={block.id}
                    className={cls.block}
                />
            );

        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlock
                    block={block}
                    key={block.id}
                    className={cls.block}
                />
            );

        default:
            return null;
        }
    };

    return (
        <>
            <Avatar
                src={data.img}
                alt={data.img}
                size={AvatarSize.XL}
                className={cls.avatar}
            />
            <Text
                title={data.title}
                size={TextSize.XL}
            />
            <Text size={TextSize.L}>{data.subtitle}</Text>
            <div className={cls.articleDetailsInfo}>
                <EyeIcon />
                <Text>{String(data.views)}</Text>
            </div>
            <div className={cls.articleDetailsInfo}>
                <CalendarIcon />
                <Text>{data.createdAt}</Text>
            </div>
            {data.blocks.map(renderBlocks)}
        </>
    );
};

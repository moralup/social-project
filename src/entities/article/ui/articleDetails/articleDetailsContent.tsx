import { FC } from 'react';
import {
    type ArticleBlockI,
    type ArticleI,
    ArticleBlockType,
} from '../../model/types/article';

import { Hstack } from '@/shared/ui/stack';
import { Avatar, AvatarSize } from '@/shared/ui/avatar';
import { Text, TextSize } from '@/shared/ui/Text';

import { ArticleCodeBlock } from '../articleBlocks/articleCodeBlock/articleCodeBlock';
import { ArticleImageBlock } from '../articleBlocks/articleImageBlock/articleImageBlock';
import { ArticleTextBlock } from '../articleBlocks/articleTextBlock/articleTextBlock';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';

import cls from './articleDetails.module.scss';

interface ArticleContentProps {
    data: ArticleI;
}
// prettier-ignore
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

export const ArticleDetailsContent: FC<ArticleContentProps> = ({ data }) => {
    return (
        <div>
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
            <Hstack
                gap="8"
                justify="start"
                className={cls.articleDetailsInfo}
            >
                <EyeIcon />
                <Text>{String(data.views)}</Text>
            </Hstack>
            <Hstack
                gap="8"
                justify="start"
                className={cls.articleDetailsInfo}
            >
                <CalendarIcon />
                <Text>{data.createdAt}</Text>
            </Hstack>
            {data.blocks.map(renderBlocks)}
        </div>
    );
};

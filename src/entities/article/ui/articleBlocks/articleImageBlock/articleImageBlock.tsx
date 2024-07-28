import { FC } from 'react';
import { ArticleImageBlockI } from '../../../model/types/article';

import { Text } from '@/shared/ui/Text';

import cls from './articleImageBlock.module.scss';

interface ArticleImageBlockProps {
    block: ArticleImageBlockI;
    className?: string;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = props => {
    const { block, className } = props;
    const { src, title } = block;

    return (
        <div
            data-testid="articleImageBlock"
            className={className}
        >
            <img
                src={src}
                alt={title}
                className={cls.image}
            />
            {title && <Text data-testid="articleImageBlockTitle">{title}</Text>}
        </div>
    );
};

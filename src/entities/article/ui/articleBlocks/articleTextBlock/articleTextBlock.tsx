import { FC } from 'react';
import { ArticleTextBlockI } from '../../../model/types/article';

import { Text } from 'shared/ui/Text';

import cls from './articleTextBlock.module.scss';

interface ArticleTextBlockProps {
    block: ArticleTextBlockI;
    className?: string;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = props => {
    const { block, className } = props;
    const { title, paragraphs } = block;

    return (
        <div
            data-testid="articleTextBlock"
            className={className}
        >
            {title && (
                <Text
                    data-testid="articleTextBlockTitle"
                    title={title}
                    className={cls.title}
                />
            )}
            {paragraphs.map(text => (
                <p
                    key={text}
                    className={cls.paragraph}
                >
                    {text}
                </p>
            ))}
        </div>
    );
};

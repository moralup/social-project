import { FC, useCallback } from 'react';
import { ArticleCodeBlockI } from '../../../model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';

import cls from './articleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
    block: ArticleCodeBlockI;
    className?: string;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = props => {
    const { block, className } = props;
    const { code } = block;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(code);
    }, [code]);

    return (
        <pre
            data-testid="articleCodeBlock"
            className={classNames(cls.articleCodeBlock, {}, [className])}
        >
            <Button
                onClick={onCopy}
                theme={ButtonTheme.CLEAR}
                className={cls.copyBtn}
            >
                <CopyIcon />
            </Button>
            <code>{code}</code>
        </pre>
    );
};

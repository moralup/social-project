import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './articleCreatePage.module.scss';

interface ArticleCreatePageProps {
    className?: string;
}

export const ArticleCreatePage: FC<ArticleCreatePageProps> = ({
    className,
}) => {
    return (
        <div
            data-testid="ArticleCreatePage"
            className={classNames(cls.articleCreatePage, {}, [className])}
        // eslint-disable-next-line i18next/no-literal-string
        >
            ARTICLE CREATE PAGE
        </div>
    );
};

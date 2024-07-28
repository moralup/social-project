import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './articleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

export const ArticleEditPage: FC<ArticleEditPageProps> = ({ className }) => {
    return (
        <div
            data-testid="ArticleEditPage"
            className={classNames(cls.articleEditPage, {}, [className])}
        // eslint-disable-next-line i18next/no-literal-string
        >
            ARTICLE EDIT PAGE
        </div>
    );
};

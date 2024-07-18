import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './articleCreatePage.module.scss';

interface ArticleCreatePageProps {
    className?: string;
}

export const ArticleCreatePage: FC<ArticleCreatePageProps> = ({ className }) => {
    return (
        <div className={classNames(cls.articleCreatePage, {}, [className])}>
            ARTICLE CREATE PAGE
        </div>
    );
};

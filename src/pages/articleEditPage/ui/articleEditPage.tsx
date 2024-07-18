import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './articleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

export const ArticleEditPage: FC<ArticleEditPageProps> = ({ className }) => {
    return (
        <div className={classNames(cls.articleEditPage, {}, [className])}>
            ARTICLE EDIT PAGE
        </div>
    );
};

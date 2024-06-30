import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './articlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articlesPage, {}, [className])}>
            ArticlesPage
        </div>
    );
};

export default memo(ArticlesPage);

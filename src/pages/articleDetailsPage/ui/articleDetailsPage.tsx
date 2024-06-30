import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './articleDetailsPage.module.scss';
import { ArticleDetails } from 'entities/article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    if (!id) {
        return (
            <div
                className={classNames(cls.articleDetailsPage, {}, [className])}
            >
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            <ArticleDetails articleId={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);

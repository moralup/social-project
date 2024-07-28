import { RatingCard } from '@/entities/rating';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useRateArticle, useGetArticleRating } from '../api/articleRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/user';
import { Text } from '@/shared/ui/Text';

interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

export const ArticleRating: FC<ArticleRatingProps> = props => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const { id: userId } = useSelector(getUserAuthData)!;
    const [rateArticle] = useRateArticle();
    const { data, isLoading, isError } = useGetArticleRating({
        articleId,
        userId,
    });

    const onAcceptHandler = useCallback(
        (rate: number, feedback: string) => {
            rateArticle({
                articleId,
                userId,
                rate,
                feedback,
            });
        },
        [articleId, rateArticle, userId],
    );

    const onCancelHandler = useCallback(
        (rate: number) => {
            rateArticle({
                articleId,
                userId,
                rate,
            });
        },
        [articleId, rateArticle, userId],
    );

    if (isLoading) {
        return null;
    }

    if (isError) {
        return (
            <Text title={t('Что-то пошло не так, повторите попытку позже')} />
        );
    }
    const rate = data?.[0];
    const ratingCardTitle = rate ? rate.feedback : t('оцените статью');

    return (
        <RatingCard
            className={className}
            title={ratingCardTitle}
            feedbackTitle={t('оставьте отзыв')}
            hasFeedback
            onAccept={onAcceptHandler}
            onCancel={onCancelHandler}
            rate={rate?.rate}
        />
    );
};

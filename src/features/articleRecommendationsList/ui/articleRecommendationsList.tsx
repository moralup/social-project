import { FC } from 'react';
import { Text } from '@/shared/ui/Text';
import { ArticleList, ArticleView } from '@/entities/article';
import { Vstack } from '@/shared/ui/stack';
import { useArticleRecommendationsList } from '../api/articleRecommendationsApi';

interface ArticleRecListProps {
    className?: string;
}

export const ArticleRecommendationsList: FC<ArticleRecListProps> = () => {
    const {
        isLoading,
        isError,
        data: articleRecommendations,
    } = useArticleRecommendationsList(4);

    if (isError) {
        return null;
    }

    if (isLoading) {
        return null;
    }

    return (
        <Vstack gap="16">
            <Text title="Рекоммендуем" />
            <ArticleList
                articles={articleRecommendations}
                view={ArticleView.COMPACT}
                isLoading={isLoading}
                target="_blank"
            />
        </Vstack>
    );
};

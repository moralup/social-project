import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/page';

import { ArticleDetails } from '@/entities/article';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '@/widgets/articleDetailsComments';
import { ArticleRating } from '@/features/articleRating';

const ArticleDetailsPage: FC = () => {
    const { id: articleId } = useParams<{ id: string }>();

    return (
        <Page data-testid="ArticleDetailsPage">
            <ArticleDetails articleId={articleId} />
            <ArticleRating articleId={articleId!} />
            <ArticleRecommendationsList />
            <ArticleDetailsComments articleId={articleId!} />
        </Page>
    );
};

export default memo(ArticleDetailsPage);

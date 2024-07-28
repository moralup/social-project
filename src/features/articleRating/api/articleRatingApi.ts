import { RatingI } from '@/entities/rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface RateArticleArgsI extends RatingI {
    userId: string;
    articleId: string;
}
interface GetArticleRatingOptionsI {
    userId: string;
    articleId: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        getArticleRating: build.query<RatingI[], GetArticleRatingOptionsI>({
            query: options => ({
                url: '/article-rating',
                params: options,
            }),
            providesTags: ['ArticleRating'],
        }),
        rateArticle: build.mutation<void, RateArticleArgsI>({
            query: options => ({
                method: 'POST',
                url: '/article-rating',
                body: options,
            }),
            invalidatesTags: ['ArticleRating'],
        }),
    }),
});

export const useRateArticle = articleRatingApi.useRateArticleMutation;
export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;

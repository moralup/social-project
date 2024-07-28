import { rtkApi } from '@/shared/api/rtkApi';

const recommendationApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        articleRecommendations: build.query({
            query: (limit: number) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const useArticleRecommendationsList = recommendationApi.useArticleRecommendationsQuery;

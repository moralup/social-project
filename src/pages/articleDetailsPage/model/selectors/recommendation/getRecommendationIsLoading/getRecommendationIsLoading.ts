import { StateSchema } from 'app/providers/StoreProvider';

export const getRecommendationIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations.isLoading;
};

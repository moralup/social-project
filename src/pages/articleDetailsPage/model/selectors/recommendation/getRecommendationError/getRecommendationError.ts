import { StateSchema } from 'app/providers/StoreProvider';

export const getRecommendationError = (state: StateSchema) => state.articleDetailsPage?.recommendations.error;

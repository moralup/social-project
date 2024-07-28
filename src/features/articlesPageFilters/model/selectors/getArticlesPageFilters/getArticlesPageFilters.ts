import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlesPageFilters = (state: StateSchema) => {
    return state?.articlesPageFilters;
};

import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailsIsLoading } from './getArticleDetailsIsLoading';

describe('getArticleDetailsIsLoading', () => {
    test('should return articleDetailsIsLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
    });
});

import { StateSchema } from 'app/providers/StoreProvider';
import { getArticlesPageIsLoading } from './getArticlesPageIsLoading';

describe('getArticlesPageIsLoading', () => {
    test('should return articlesPageIsLoading', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual({});
    });
});

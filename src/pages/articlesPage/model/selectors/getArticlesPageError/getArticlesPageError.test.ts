import { StateSchema } from 'app/providers/StoreProvider';
import { getArticlesPageError } from './getArticlesPageError';

describe('getArticlesPageError', () => {
    test('should return articlesPageError', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticlesPageError(state as StateSchema)).toEqual({});
    });
});

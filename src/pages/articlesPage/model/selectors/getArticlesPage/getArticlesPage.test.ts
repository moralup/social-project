import { StateSchema } from 'app/providers/StoreProvider';
import { getArticlesPage } from './getArticlesPage';

describe('getArticlesPage', () => {
    test('should return articlesPage', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticlesPage(state as StateSchema)).toEqual(undefined);
    });
});

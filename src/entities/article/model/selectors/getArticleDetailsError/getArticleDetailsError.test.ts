import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsError } from './getArticleDetailsError';

describe('getArticleDetailsError', () => {
    test('should return articleDetailsError', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'some error',
            },
        };

        expect(getArticleDetailsError(state as StateSchema)).toBe('some error');
    });
});

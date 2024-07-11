import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsComments } from './getArticleDetailsComments';

describe('getArticleDetailsComments', () => {
    test('with full state should return articleDetailsComments', () => {
        const comments = {
            error: 'some error',
            isLoading: false,
            entities: {},
            ids: [],
        };

        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments,
            },
        };

        expect(getArticleDetailsComments(state as StateSchema)).toEqual({
            ...comments,
        });
    });

    test('with undefined state should return undefined', () => {
        expect(getArticleDetailsComments({} as StateSchema)).toEqual(undefined);
    });
});

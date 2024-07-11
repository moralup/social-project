import { StateSchema } from 'app/providers/StoreProvider';
import { getError } from './getError';

describe('getError', () => {
    test('with full state should return error', () => {
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

        expect(getError(state as StateSchema)).toBe('some error');
    });

    test('with undefined state should return undefined', () => {
        expect(getError({} as StateSchema)).toEqual(undefined);
    });
});

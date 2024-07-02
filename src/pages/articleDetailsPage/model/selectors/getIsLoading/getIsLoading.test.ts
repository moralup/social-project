import { StateSchema } from 'app/providers/StoreProvider';
import { getIsLoading } from './getIsLoading';

describe('getIsLoading', () => {
    test('with full state should return error', () => {
        const articleDetailsComments = {
            error: 'some error',
            isLoading: false,
            entities: {},
            ids: [],
        };

        const state: DeepPartial<StateSchema> = {
            articleDetailsComments,
        };

        expect(getIsLoading(state as StateSchema)).toBe(false);
    });

    test('with undefined state should return undefined', () => {
        expect(getIsLoading({} as StateSchema)).toEqual(undefined);
    });
});

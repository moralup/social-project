import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetails } from './getArticleDetails';

describe('getArticleDetails', () => {
    test('should return articleDetails', () => {
        const articleDetails = {
            data: {
                id: '12',
                blocks: [
                    {
                        paragraphs: [
                            'lorem lorem lorem lorem lorem lorem lorem lorem',
                            'lorem lorem lorem lorem lorem lorem lorem lorem',
                            'lorem lorem lorem lorem lorem lorem lorem lorem',
                        ],
                    },
                ],
            },
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails,
        };

        expect(getArticleDetails(state as StateSchema)).toEqual({
            ...articleDetails,
        });
    });
});

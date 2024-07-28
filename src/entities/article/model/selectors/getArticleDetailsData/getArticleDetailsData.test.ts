import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from './getArticleDetailsData';

describe('getArticleDetailsData', () => {
    test('should return articleDetailsData', () => {
        const data = {
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
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual({
            ...data,
        });
    });
});

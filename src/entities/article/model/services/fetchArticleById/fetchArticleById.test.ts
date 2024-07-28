import { $api } from '@/shared/api/api';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk';
import { fetchArticleById } from './fetchArticleById';
import { ArticleBlockType, ArticleI } from '../../types/article';

jest.mock('shared/api/api');
const mockedAxios = jest.mocked($api, true);

describe('fetchArticleById', () => {
    test('success login', async () => {
        const article: DeepPartial<ArticleI> = {
            id: '1',
            blocks: [
                {
                    id: '1',
                    type: ArticleBlockType.CODE,
                    code: 'console.log("hello world")',
                },
            ],
            title: 'title',
        };
        const thunk = new TestAsyncThunk(fetchArticleById);

        mockedAxios.get.mockResolvedValue({ data: article });

        const result = await thunk.callThunk('1', { api: $api });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(article);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);

        mockedAxios.get.mockRejectedValue({ status: 200 });

        const result = await thunk.callThunk('12');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('err');
    });
});

import { $api } from 'shared/api/api';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';
import { CommentI } from 'entities/comment';

jest.mock('shared/api/api');
const mockedAxios = jest.mocked($api, true);

describe('fetchCommentsByArticleId', () => {
    test('success fetch', async () => {
        const comments: CommentI[] = [
            {
                id: '1',
                text: 'some comment',
                user: {
                    id: '1',
                    username: 'user1',
                },
            },
            {
                id: '2',
                text: 'some comment',
                user: {
                    id: '2',
                    username: 'user2',
                },
            },
            {
                id: '3',
                text: 'some comment',
                user: {
                    id: '3',
                    username: 'user3',
                },
            },
        ];
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

        mockedAxios.get.mockResolvedValue({ data: comments });

        const result = await thunk.callThunk('1', { api: $api });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(comments);
    });

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        mockedAxios.get.mockReturnValue(Promise.resolve({ status: 200 }));

        const result = await thunk.callThunk('1', { api: $api });

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('err');
    });
});

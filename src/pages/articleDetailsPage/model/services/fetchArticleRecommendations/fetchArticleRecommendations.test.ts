// import { $api } from 'shared/api/api';
// import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk';
// import { fetchArticleRecommendations } from './fetchArticleRecommendations';

// jest.mock('shared/api/api');
// const mockedAxios = jest.mocked($api, true);

// describe('fetch article recommendations', () => {
//     test('success', async () => {
//         const RETURNED = undefined;
//         const thunk = new TestAsyncThunk(fetchArticleRecommendations);

//         mockedAxios.METHOD.mockResolvedValue({ data: RETURNED });

//         const result = await thunk.callThunk(ARGUMENTS, { api: $api });

//         expect(thunk.dispatch).toHaveBeenCalledTimes(2);
//         expect(mockedAxios.METHOD).toHaveBeenCalled();
//         expect(result.meta.requestStatus).toBe('fulfilled');
//         expect(result.payload).toEqual(RETURNED);
//     });

//     test('error login', async () => {
//         const thunk = new TestAsyncThunk(fetchArticleRecommendations);

//         mockedAxios.SOMEMETHOD.mockRejectedValue({ status: 400 });

//         const result = await thunk.callThunk(ARGUMENTS, { api: $api });

//         expect(thunk.dispatch).toHaveBeenCalledTimes(2);
//         expect(mockedAxios.SOME0METHOD).toHaveBeenCalled();
//         expect(result.meta.requestStatus).toBe('rejected');
//         expect(result.payload).toBe('err');
//     });
// });

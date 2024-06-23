import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk';
import { $api } from 'shared/api/api';
import { ProfileI } from 'shared/types/profile';
import { fetchProfileData } from './fetchProfileData';

jest.mock('shared/api/api');
const mockedAxios = jest.mocked($api, true);

describe('fetchProfileData', () => {
    test('success login', async () => {
        const profile: DeepPartial<ProfileI> = {
            age: 12,
            firstName: 'Ivan',
            lastName: 'Ivanov',
            username: 'vanya228',
        };

        const thunk = new TestAsyncThunk(fetchProfileData);

        mockedAxios.get.mockResolvedValue({ data: profile });

        const result = await thunk.callThunk(undefined, { api: $api });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profile);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 200 }));
        const result = await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});

import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk';
import { $api } from '@/shared/api/api';
import { ProfileI } from '@/shared/types/profile';
import { fetchProfileData } from './fetchProfileData';
import { ValidateProfileError } from '../../consts/consts';

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

        const result = await thunk.callThunk('1', { api: $api });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profile);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
});

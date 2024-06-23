import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk';
import { ProfileI } from 'shared/types/profile';
import { $api } from 'shared/api/api';
import { updateProfileData } from './updateProfileData';

jest.mock('shared/api/api');
const mockedAxios = jest.mocked($api, true);

describe('updateProfileData', () => {
    test('success', async () => {
        const profile: DeepPartial<ProfileI> = {
            age: 12,
            firstName: 'Ivan',
            lastName: 'Ivanov',
            username: 'vanya228',
        };

        const thunk = new TestAsyncThunk(updateProfileData);

        mockedAxios.put.mockResolvedValue({ data: profile });

        const result = await thunk.callThunk(undefined, { api: mockedAxios });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profile);
    });

    test('rejected', async () => {
        const thunk = new TestAsyncThunk(updateProfileData);

        mockedAxios.put.mockRejectedValue({ status: 400 });

        const result = await thunk.callThunk(undefined, { api: mockedAxios });

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(mockedAxios.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('err');
    });
});

import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk';
import { ProfileI } from '@/shared/types/profile';
import { $api } from '@/shared/api/api';
import { updateProfileData } from './updateProfileData';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../consts/consts';

jest.mock('shared/api/api');
const mockedAxios = jest.mocked($api, true);

describe('updateProfileData', () => {
    const state: DeepPartial<StateSchema> = {
        profile: {
            form: {
                age: 16,
                avatar: 'http://avatal.com',
                city: 'Moscow',
                country: 'Russia',
                firstName: 'Ivan',
                lastName: 'Ivanov',
                username: 'vanya163',
            },
        },
    };

    test('success', async () => {
        const profile: DeepPartial<ProfileI> = {
            age: 12,
            firstName: 'Ivan',
            lastName: 'Ivanov',
            username: 'vanya228',
        };

        const thunk = new TestAsyncThunk(updateProfileData, state);

        mockedAxios.put.mockResolvedValue({ data: profile });

        const result = await thunk.callThunk(undefined, { api: mockedAxios });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profile);
    });

    test('server error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, state);

        mockedAxios.put.mockRejectedValue({ status: 400 });

        const result = await thunk.callThunk(undefined, { api: mockedAxios });

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(mockedAxios.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {
                    ...state.profile!.form,
                    firstName: '',
                },
            },
        });

        mockedAxios.put.mockRejectedValue({ status: 400 });

        const result = await thunk.callThunk(undefined, { api: mockedAxios });

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.NO_EMPTY]);
    });
});

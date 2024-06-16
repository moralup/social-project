import axios from 'axios';
import { setAuthData } from 'entities/user';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
    test('success login', async () => {
        const user = { id: '1', username: 'Ivan' };
        const thunk = new TestAsyncThunk(loginByUsername);
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: user }));

        const result = await thunk.callThunk({ password: '123', username: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(setAuthData(user));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(user);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 200 }));

        const result = await thunk.callThunk({ password: '', username: '' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('err');
    });
});

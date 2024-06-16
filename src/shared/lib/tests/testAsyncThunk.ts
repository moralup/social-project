import type { AsyncThunk, Dispatch } from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Returned, Arg, RejectValue> = AsyncThunk<
    Returned,
    Arg,
    { rejectValue: RejectValue }
>;

export class TestAsyncThunk<Returned, Arg, RejectValue> {
    dispatch: Dispatch;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Returned, Arg, RejectValue>;

    constructor(actionCreator: ActionCreatorType<Returned, Arg, RejectValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);
        return result;
    }
}

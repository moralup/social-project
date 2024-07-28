import type { AsyncThunk, Dispatch } from '@reduxjs/toolkit';
import type { StateSchema } from '@/app/providers/StoreProvider';
import { ThunkExtraArg } from '@/app/providers/StoreProvider/config/stateSchema';

type ActionCreatorType<Returned, Arg, RejectValue> = AsyncThunk<
    Returned,
    Arg,
    { rejectValue: RejectValue }
>;

export class TestAsyncThunk<Returned, Arg, RejectValue> {
    dispatch: Dispatch;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Returned, Arg, RejectValue>;

    constructor(
        actionCreator: ActionCreatorType<Returned, Arg, RejectValue>,
        state?: DeepPartial<StateSchema>,
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
    }

    async callThunk(arg: Arg, extra?: DeepPartial<ThunkExtraArg>) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, extra);
        return result;
    }
}

import { FC } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createStore } from '../config/store';
import { StateSchema } from '../config/stateSchema';

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}
export const StoreProvider: FC<StoreProviderProps> = props => {
    const {
        //
        children,
        initialState,
        asyncReducers,
    } = props;

    const store = createStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    );

    return <Provider store={store}>{children}</Provider>;
};

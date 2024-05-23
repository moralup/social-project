import { FC } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createStore } from '../config/store';
import { StateSchema } from '../config/stateSchema';

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema> | undefined;
}
export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
    const store = createStore(initialState as StateSchema);
    return <Provider store={store}>{children}</Provider>;
};

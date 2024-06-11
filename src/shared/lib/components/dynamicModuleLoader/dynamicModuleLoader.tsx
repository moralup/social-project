import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';
import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = Partial<Record<StateSchemaKey, Reducer>>

export interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    saveAfterUnmount?: boolean;
    children: ReactElement<any, any>;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = props => {
    const { reducers, children, saveAfterUnmount } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: [StateSchemaKey, Reducer]) => {
            store.reduceManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (!saveAfterUnmount) {
                Object.keys(reducers).forEach((name: StateSchemaKey) => {
                    store.reduceManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return children;
};

import {
    ReduxStoreWithManager,
    StateSchema,
    StateSchemaKey,
} from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';
import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

// export type ReducersList = Partial<Record<StateSchemaKey, Reducer>>;
export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

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
        Object.entries(reducers).forEach(value => {
            const [name, reducer] = value as [StateSchemaKey, Reducer];
            const isMounted = store.reducerManager.add(name, reducer);
            if (isMounted) {
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (!saveAfterUnmount) {
                Object.keys(reducers).forEach(name => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return children;
};

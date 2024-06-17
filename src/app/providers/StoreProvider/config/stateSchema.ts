import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    ReducersMapObject,
    Reducer,
} from '@reduxjs/toolkit';

import { CounterSchema } from 'entities/counter';
import { ProfileSchema } from 'entities/profile';
import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/authByUsername';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // *Async reducers
    login?: LoginSchema;
    profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManagerI {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (S: StateSchema, A: AnyAction) => CombinedState<StateSchema>;
    add: (K: StateSchemaKey, R: Reducer) => void;
    remove: (K: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reduceManager: ReducerManagerI;
}

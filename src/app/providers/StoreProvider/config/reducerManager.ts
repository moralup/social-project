import {
    AnyAction,
    combineReducers,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from './stateSchema';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<StateSchemaKey> = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach(key => {
                    delete state[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return false;
            }
            reducers[key] = reducer;

            combinedReducer = combineReducers(reducers);
            return true;
        },
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}

// import { AnyAction, ReducersMapObject, combineReducers, Reducer } from '@reduxjs/toolkit';
// import { ReducerManagerI, StateSchema, StateSchemaKey } from './stateSchema';

// export function createReducerManager(
//     initialReducers: ReducersMapObject<StateSchema>,
// ): ReducerManagerI {
//     const reducers = { ...initialReducers };

//     let combinedReducer = combineReducers(reducers);

//     let keysToRemove: StateSchemaKey[] = [];

//     return {
//         getReducerMap: () => reducers,

//         // reduce: (state: StateSchema | undefined, action: AnyAction) => {
//         reduce: (state: StateSchema, action: AnyAction) => {
//             if (keysToRemove.length > 0) {
//                 if (state !== undefined) {
//                     state = { ...state };
//                 }

//                 keysToRemove.forEach(key => {
//                     if (state !== undefined) {
//                         delete state[key];
//                     }
//                 });

//                 keysToRemove = [];
//             }
//             const result = combinedReducer(state, action) as StateSchema;
//             return result;
//         },

//         add: (key: StateSchemaKey, reducer: Reducer) => {
//             if (!key || reducers[key]) {
//                 return;
//             }

//             reducers[key] = reducer;

//             combinedReducer = combineReducers(reducers);
//         },

//         remove: (key: StateSchemaKey) => {
//             if (!key || !reducers[key]) {
//                 return;
//             }

//             delete reducers[key];

//             keysToRemove.push(key);

//             combinedReducer = combineReducers(reducers);
//         },
//     };
// }

import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';
import { $api } from 'shared/api/api';
import { CombinedState, Reducer } from 'redux';
import { StateSchema, ThunkExtraArg } from './stateSchema';
import { createReducerManager } from './reducerManager';
import { pageReducer } from 'widgets/page';
import { rtkApi } from 'shared/api/rtkApi';

export function createStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        page: pageReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        // prettier-ignore
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch'];

// import { NavigateFunction } from 'react-router-dom';
// import { Action, AnyAction, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
// import { $api } from 'shared/api/api';
// import { counterReducer } from 'entities/counter';
// import { userReducer } from 'entities/user';
// import { StateSchema, ThunkExtraArg } from './stateSchema';
// import { createReducerManager } from './reducerManager';
// import { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

// export const createStore = (
//     initialState?: StateSchema,
//     asyncReducers?: ReducersMapObject<StateSchema>,
//     navigate?: NavigateFunction,
// ) => {
//     const rootReducers: ReducersMapObject<StateSchema> = {
//         ...asyncReducers,
//         counter: counterReducer,
//         user: userReducer,
//     };

//     const reducerManager = createReducerManager(rootReducers);

//     const extraArgs: ThunkExtraArg = {
//         api: $api,
//         navigate,
//     };

//     const store = configureStore<StateSchema, AnyAction>({
//         reducer: reducerManager.reduce,
//         // reducer: rootReducers as ReducersMapObject<StateSchema>,
//         devTools: __IS_DEV__,
//         preloadedState: initialState,
//         // prettier-ignore
//         middleware: getDefaultMiddleware => getDefaultMiddleware({
//             thunk: {
//                 extraArgument: extraArgs,
//             },
//         }),
//     });
//     // @ts-ignore
//     store.reduceManager = reducerManager;

//     return store;
// };

// export type AppDispatch = ReturnType<typeof createStore>['dispatch'];

import {
    AnyAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';

// *State Schemas
import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/authByUsername';
import { ProfileSchema } from 'features/editableProfileCard/model/types/profileSchema';
import { ArticleDetailsSchema } from 'entities/article';
import { ArticleDetailsPageSchema } from 'pages/articleDetailsPage';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/articlesPage';
import { PageSchema } from 'widgets/page';
import { ArticlesPageFiltersSchema } from 'features/articlesPageFilters';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    page: PageSchema;

    // *Async reducers
    login?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
    articlesPageFilters?: ArticlesPageFiltersSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => boolean;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}

// import {
//     CombinedState,
//     EnhancedStore,
//     ReducersMapObject,
//     Reducer,
//     Action,
//     AnyAction,
//     CombinedState,
// } from '@reduxjs/toolkit';
// import { AxiosInstance } from 'axios';
// import type { NavigateFunction } from 'react-router-dom';

// import { CounterSchema } from 'entities/counter';
// import { ProfileSchema } from 'entities/profile';
// import { UserSchema } from 'entities/user';
// import { LoginSchema } from 'features/authByUsername';

// export interface StateSchema {
//     counter: CounterSchema;
//     user: UserSchema;

//     // *Async reducers
//     login?: LoginSchema;
//     profile?: ProfileSchema;
// }

// export type StateSchemaKey = keyof StateSchema;

// export interface ReducerManagerI {
//     getReducerMap: () => ReducersMapObject<StateSchema>;
//     reduce: Reducer<StateSchema, Action<any>> | ReducersMapObject<StateSchema, Action<any>>;
//     // reduce: (S: StateSchema, A: AnyAction) => CombinedState<StateSchema>;

//     add: (K: StateSchemaKey, R: Reducer) => void;
//     remove: (K: StateSchemaKey) => void;
// }

// export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
//     reduceManager: ReducerManagerI;
// }

// export interface ThunkExtraArg {
//     api: AxiosInstance;
//     navigate?: NavigateFunction;
// }

// export interface ThunkConfig<S> {
//     rejectValue: S;
//     extra: ThunkExtraArg;
// }

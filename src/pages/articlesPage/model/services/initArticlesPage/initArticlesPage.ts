import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchNextArticlesPage } from '../fetchNextArticlesPage/fetchNextArticlesPage';
import { initState } from '../../slices/articlesPageSlice';
import { getArticlesPageInited } from '../../selectors/getArticlesPageInited';
import {
    setOrder,
    setSearch,
    setSort,
    setType,
} from 'features/articlesPageFilters/model/slices/articlesPageFiltersSlice';
import { ArticleSortFiled } from 'features/articlesPageFilters/model/types/articlesPageFiltersSchema';
import { ArticleType } from 'entities/article/model/types/article';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState());
    try {
        if (!inited) {
            const order = searchParams.get('_order') as 'asc' | 'desc';
            const sort = searchParams.get('_sort') as ArticleSortFiled;
            const type = searchParams.get('type') as ArticleType;
            const search = searchParams.get('q');

            if (order) {
                dispatch(setOrder(order));
            }

            if (sort) {
                dispatch(setSort(sort));
            }

            if (search) {
                dispatch(setSearch(search));
            }

            if (type) {
                dispatch(setType(type));
            }

            dispatch(initState());
            dispatch(fetchNextArticlesPage());
        }
    } catch (e) {
        console.log(e);
        return rejectWithValue('err');
    }
});

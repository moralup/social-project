import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    setOrder,
    setSearch,
    setSort,
    setType,
} from '../../../model/slices/articlesPageFiltersSlice';
import { ArticleSortFiled } from '../../../model/types/articlesPageFiltersSchema';
import { ArticleType } from 'entities/article/model/types/article';

export const initArticlesPageFilters = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPageFilters/initArticlesPageFilters', async (searchParams, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    const order = searchParams.get('_order') as 'asc' | 'desc';
    const sort = searchParams.get('_sort') as ArticleSortFiled;
    const type = searchParams.get('type') as ArticleType;
    const search = searchParams.get('q');

    try {
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
    } catch (e) {
        console.log(e);
        return rejectWithValue('err');
    }
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleI } from 'entities/article';
import { getArticlesPageLimit } from '../../selectors/getArticlesPageLimit';
import { getGetArticlesPagePaginationPage } from '../../selectors/getGetArticlesPagePaginationPage';
import { getArticlesPageFiltersUrl } from 'features/articlesPageFilters';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

export interface fetchArticlesListOptions {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    ArticleI[],
    fetchArticlesListOptions,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (args, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const limit = getArticlesPageLimit(getState());
    const page = getGetArticlesPagePaginationPage(getState());
    const filtersParams = getArticlesPageFiltersUrl(getState());
    const { type, ...filtersParamsWithoutType } = filtersParams;
    addQueryParams(filtersParams);

    try {
        const response = await extra.api.get<ArticleI[]>('articles', {
            params: {
                _expand: 'user',
                _page: page,
                _limit: limit,
                type_like: type,
                ...filtersParamsWithoutType,
            },
        });

        const articles = response.data;

        if (!articles) {
            throw new Error();
        }

        return articles;
    } catch (e) {
        console.log(e);
        return rejectWithValue('err');
    }
});

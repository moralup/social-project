import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getGetArticlesPagePaginationPage } from '../../selectors/getGetArticlesPagePaginationPage';
import { setPage } from '../../slices/articlesPageSlice';
import { getArticlesPageIsLoading } from '../../selectors/getArticlesPageIsLoading';
import { getArticlesPageHasMore } from '../../selectors/getArticlesPageHasMore/getArticlesPageHasMore';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (args, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
    const page = getGetArticlesPagePaginationPage(getState());
    const isLoading = getArticlesPageIsLoading(getState());
    const hasMore = getArticlesPageHasMore(getState());

    try {
        if (hasMore && !isLoading) {
            dispatch(fetchArticlesList({ replace: false }));
            dispatch(setPage(page + 1));
        }
    } catch (e) {
        return rejectWithValue('err');
    }
});

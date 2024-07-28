import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleI } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    ArticleI,
    string,
    ThunkConfig<string>
>('articleDetails/fetchArticleById', async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<ArticleI>(
            `/articles/${articleId}`,
        );

        const article = response.data;
        if (!article) {
            throw new Error();
        }

        return article;
    } catch (e) {
        return rejectWithValue('err');
    }
});

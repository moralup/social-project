import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleI } from 'entities/article';

export const fetchArticlesRecommendations = createAsyncThunk<
    ArticleI[],
    void,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<ArticleI[]>('articles', {
            params: {
                _limit: 4,
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

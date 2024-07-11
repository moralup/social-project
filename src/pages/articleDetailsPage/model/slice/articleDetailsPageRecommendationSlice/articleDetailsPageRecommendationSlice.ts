import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsRecommendationSchema } from '../../types/articleDetailsRecommendationSchema';
import { ArticleI } from 'entities/article';
import { fetchArticlesRecommendations } from '../../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationAdapter = createEntityAdapter({
    selectId: (article: ArticleI) => article.id,
});
// prettier-ignore
export const getArticleRecommendation = recommendationAdapter.getSelectors<StateSchema>(
    state => state.articleDetailsPage?.recommendations || recommendationAdapter.getInitialState(),
);

const articleDetailsPageRecommendationSlice = createSlice({
    name: 'articleDetailsPageRecommendationSlice',
    initialState:
        recommendationAdapter.getInitialState<ArticleDetailsRecommendationSchema>(
            {
                error: undefined,
                isLoading: false,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: build => {
        build
            .addCase(fetchArticlesRecommendations.pending, state => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticlesRecommendations.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    recommendationAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

// prettier-ignore
export const {
    reducer: articleDetailsPageRecommendationReducer,
} = articleDetailsPageRecommendationSlice;

// export const {} = articleDetailsPageRecommendationSlice.actions;

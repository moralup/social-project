import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { ArticleI, ArticleView } from 'entities/article';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';

const articlesAdapter = createEntityAdapter<ArticleI>({
    selectId: article => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    state => state.articlesPage || articlesAdapter.getInitialState(),
);

let initView = localStorage.getItem(
    ARTICLE_VIEW_LOCAL_STORAGE_KEY,
) as ArticleView;

if (initView) {
    initView = JSON.parse(initView);
} else {
    initView = ArticleView.COMPACT;
}

const initLimit = initView === ArticleView.COMPACT ? 12 : 4;

const articlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
        limit: initLimit,
        hasMore: true,
        page: 1,
        _inited: false,
    }),
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        resetPage: state => {
            state.page = 1;
        },
        initState: state => {
            state._inited = true;
        },
    },
    extraReducers: build => {
        build
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
                state.hasMore = action.payload.length >= state.limit;
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { setPage, resetPage, initState } = articlesPageSlice.actions;

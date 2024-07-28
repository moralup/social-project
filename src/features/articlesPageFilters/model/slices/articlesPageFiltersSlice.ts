import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    ArticleSortFiled,
    ArticlesPageFiltersSchema,
    SortOrderType,
} from '../types/articlesPageFiltersSchema';
import { ArticleView } from '@/entities/article';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorage';
import { ArticleType } from '@/entities/article/model/types/article';

const viewFromLocalStorage = localStorage.getItem(
    ARTICLE_VIEW_LOCAL_STORAGE_KEY,
);
let initView: ArticleView;

if (viewFromLocalStorage) {
    initView = JSON.parse(viewFromLocalStorage);
} else {
    initView = ArticleView.COMPACT;
}

const initialState: ArticlesPageFiltersSchema = {
    order: 'asc',
    search: '',
    sort: ArticleSortFiled.VIEWS,
    view: initView,
};

const articlesPageFiltersSlice = createSlice({
    name: 'articlesPage',
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(
                ARTICLE_VIEW_LOCAL_STORAGE_KEY,
                JSON.stringify(action.payload),
            );
        },
        setOrder: (state, action: PayloadAction<SortOrderType>) => {
            state.order = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortFiled>) => {
            state.sort = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
    },
});

export const { reducer: articlesPageFiltersReducer } = articlesPageFiltersSlice;
export const {
    //
    setOrder,
    setSearch,
    setSort,
    setView,
    setType,
} = articlesPageFiltersSlice.actions;

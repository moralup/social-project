import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CommentI } from 'entities/comment';
import { ArticleDetailsCommentsSchema } from '../../types/articleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter({
    selectId: (comment: CommentI) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    state => state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
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
            .addCase(fetchCommentsByArticleId.pending, state => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// prettier-ignore
export const {
    reducer: articleDetailsCommentsReducer,
} = articleDetailsCommentsSlice;

// export const {} = articleDetailsCommentsSlice.actions;

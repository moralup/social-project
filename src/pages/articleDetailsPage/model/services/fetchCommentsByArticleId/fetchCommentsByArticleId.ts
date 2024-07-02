import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { CommentI } from 'entities/comment';

const nameAsyncThunk = 'articleDetails/fetchCommentsByArticleId';

export const fetchCommentsByArticleId = createAsyncThunk<
    CommentI[],
    string | undefined,
    ThunkConfig<string>
>(nameAsyncThunk, async (articleId, { rejectWithValue, extra }) => {
    try {
        if (!articleId) {
            throw new Error();
        }

        const response = await extra.api.get<CommentI[]>('comments', {
            params: {
                articleId,
                _expand: 'user',
            },
        });
        const comments = response.data;

        if (!comments) {
            throw new Error();
        }

        return comments;
    } catch (e) {
        console.log(e);
        return rejectWithValue('err');
    }
});

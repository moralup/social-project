import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/user';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId';

interface CommentPostI {
    text: string;
    articleId: string;
}

interface CommentReturnedI extends CommentPostI {
    id: string;
}

export const addCommentForArticle = createAsyncThunk<
    CommentReturnedI,
    CommentPostI,
    ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (comment, thunkApi) => {
    const { extra, rejectWithValue, dispatch, getState } = thunkApi;
    const { articleId, text } = comment;

    const userData = getUserAuthData(getState());

    if (!userData) {
        throw new Error();
    }

    try {
        const response = await extra.api.post('comments', {
            userId: userData.id,
            articleId,
            text,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByArticleId(articleId));

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('err');
    }
});

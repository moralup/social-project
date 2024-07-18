import { rtkApi } from 'shared/api/rtkApi';

export interface AddedCommentI {
    articleId: string;
    userId: string;
    text: string;
}

const addCommentApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        addComment: build.mutation({
            query: (comment: AddedCommentI) => ({
                url: '/comments',
                body: comment,
                method: 'POST',
            }),
            invalidatesTags: ['Comments'],
        }),
    }),
});

export const useAddComment = addCommentApi.useAddCommentMutation;

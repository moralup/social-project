import { CommentI } from '@/entities/comment';
import { rtkApi } from '@/shared/api/rtkApi';

const articleCommentsApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        articleComments: build.query<CommentI[], string>({
            query: articleId => ({
                url: '/comments',
                params: {
                    articleId,
                    _expand: 'user',
                },
            }),
            providesTags: ['Comments'],
        }),
    }),
    overrideExisting: false,
});

export const useArticleComments = articleCommentsApi.useArticleCommentsQuery;

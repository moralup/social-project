import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorage';

export const rtkApi = createApi({
    reducerPath: 'api',
    tagTypes: ['Comments', 'ArticleRating'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
        prepareHeaders: headers => {
            const token = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

            if (token) {
                headers.set('Authorization', token);
            }

            return headers;
        },
    }),
    endpoints: () => ({}),
});

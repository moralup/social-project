import { AnyAction } from '@reduxjs/toolkit';
import { articleDetailsReducer } from './articleDetailsSlice';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleBlockType } from '../types/article';

describe('articleDetailsSlice', () => {
    test('fetchArticleById pending', () => {
        const stateBefore: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: 'someError',
        };

        const action: AnyAction = {
            type: fetchArticleById.pending.type,
        };

        expect(
            articleDetailsReducer(stateBefore as ArticleDetailsSchema, action),
        ).toEqual({ isLoading: true });
    });

    test('fetchArticleById rejected', () => {
        const stateBefore: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        const stateAfter: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: 'error',
        };

        const action: AnyAction = {
            type: fetchArticleById.rejected.type,
            payload: 'error',
        };

        expect(
            articleDetailsReducer(stateBefore as ArticleDetailsSchema, action),
        ).toEqual(stateAfter);
    });

    test('fetchArticleById fulfilled', () => {
        const data: DeepPartial<ArticleDetailsSchema['data']> = {
            id: '1',
            title: 'Some title',
            subtitle: 'Some subtitle',
            blocks: [
                {
                    id: '1',
                    type: ArticleBlockType.TEXT,
                    title: 'Title!',
                    paragraphs: ['lorem', 'lorem', 'lorem'],
                },
                {
                    id: '2',
                    type: ArticleBlockType.CODE,
                    code: 'console.log("hello world!")',
                },
            ],
        };

        const stateBefore: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        const stateAfter: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            data,
        };

        const action: AnyAction = {
            type: fetchArticleById.fulfilled.type,
            payload: { ...data },
        };

        expect(
            articleDetailsReducer(stateBefore as ArticleDetailsSchema, action),
        ).toEqual(stateAfter);
    });
});

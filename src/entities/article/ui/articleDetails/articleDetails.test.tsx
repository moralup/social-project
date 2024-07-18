/* eslint-disable max-len */
import { componentRender } from 'shared/lib/tests/componentRender';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleDetails } from './articleDetails';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    ArticleBlockType,
    ArticleType,
} from 'entities/article/model/types/article';
import { UserI } from 'entities/user';
import { screen } from '@testing-library/react';

type InitialStateType = Pick<StateSchema, 'articleDetails' | 'user'>;

const reducers = {
    articleDetails: articleDetailsReducer,
};

const userAuthData: UserI = {
    id: '2',
    username: 'Ivan231',
    avatar: 'https://avatar.Ivana.png',
};

const initialState: InitialStateType = {
    articleDetails: {
        data: {
            id: '1',
            userId: '2',
            user: userAuthData,
            blocks: [
                {
                    id: '1',
                    type: ArticleBlockType.CODE,
                    code: 'console.log("Hello world!")',
                },
                {
                    id: '2',
                    type: ArticleBlockType.IMAGE,
                    src: 'https://www.some.image.png',
                },
                {
                    id: '3',
                    type: ArticleBlockType.TEXT,
                    title: 'Title',
                    paragraphs: [
                        'Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.',
                        'Constructs a type consisting of all properties of Type set to required. The opposite of Partial.',
                        'Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.',
                    ],
                },
                {
                    id: '4',
                    type: ArticleBlockType.IMAGE,
                    src: 'https://www.some.image.png',
                },
                {
                    id: '5',
                    type: ArticleBlockType.TEXT,
                    title: 'Title',
                    paragraphs: [
                        'Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.',
                        'Constructs a type consisting of all properties of Type set to required. The opposite of Partial.',
                        'Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.',
                    ],
                },
                {
                    id: '6',
                    type: ArticleBlockType.TEXT,
                    title: 'Title',
                    paragraphs: [
                        'Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.',
                        'Constructs a type consisting of all properties of Type set to required. The opposite of Partial.',
                        'Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.',
                    ],
                },
            ],
            createdAt: '12.10.2002',
            img: 'https://image.for.article',
            subtitle: 'Subtitle',
            title: 'Title',
            type: [ArticleType.ECONOMICS, ArticleType.IT],
            views: 3041,
        },
        isLoading: false,
    },
    user: {
        authData: userAuthData,
        _inited: true,
    },
};

describe('ArticleDetails', () => {
    test('user auth data ID and author of article ID are equal, AppLink edit-article should be render', () => {
        componentRender(<ArticleDetails />, {
            asyncReducers: reducers,
            initialState,
        });

        expect(screen.getByTestId('edit-link')).toBeInTheDocument();
    });

    test('user auth data ID and author of article ID arent equal, AppLint should not be render', () => {
        const customInitialState: InitialStateType = {
            ...initialState,
            user: {
                authData: {
                    id: '1',
                    username: 'Gargamel',
                },
                _inited: true,
            },
        };
        componentRender(<ArticleDetails />, {
            asyncReducers: reducers,
            initialState: customInitialState,
        });

        expect(screen.queryByTestId('edit-link')).toBeNull();
    });

    test('with isLoading, ArticleDetailsSkeleton should be render', () => {
        const customInitialState: InitialStateType = {
            ...initialState,
            articleDetails: {
                isLoading: true,
            },
        };
        componentRender(<ArticleDetails />, {
            asyncReducers: reducers,
            initialState: customInitialState,
        });

        expect(
            screen.getByTestId('articleDetailsSkeleton'),
        ).toBeInTheDocument();
    });

    test('with error, error block should be render', () => {
        const customInitialState: InitialStateType = {
            ...initialState,
            articleDetails: {
                ...initialState.articleDetails!,
                error: 'error',
            },
        };
        componentRender(<ArticleDetails />, {
            asyncReducers: reducers,
            initialState: customInitialState,
        });

        expect(screen.getByTestId('error')).toBeInTheDocument();
    });

    test('article blocks should be render correctly', () => {
        componentRender(<ArticleDetails />, {
            asyncReducers: reducers,
            initialState,
        });

        expect(screen.getAllByTestId('articleTextBlock').length).toBe(3);
        expect(screen.getAllByTestId('articleCodeBlock').length).toBe(1);
        expect(screen.getAllByTestId('articleImageBlock').length).toBe(2);
    });
});

/* eslint-disable max-len */
import { screen } from '@testing-library/react';
import { ArticleList } from './articleList';
import {
    ArticleBlockType,
    ArticleI,
    ArticleType,
    ArticleView,
} from '@/entities/article/model/types/article';
import { componentRender } from '@/shared/lib/tests/componentRender';

const articles: ArticleI[] = [
    {
        id: '1',
        user: {
            id: '1',
            username: 'User1',
            avatar: 'https://user.avatar.png',
        },
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
];

describe('ArticleList', () => {
    // Compact
    test('with view compact, ArticleListItemCompact should be render', () => {
        componentRender(
            <ArticleList
                articles={articles}
                view={ArticleView.COMPACT}
                target="_blank"
            />,
        );

        expect(
            screen.getByTestId('articleListItemCompact'),
        ).toBeInTheDocument();
    });

    test('with view compact and isLoading, there should be 12 ArticleListItemCompactSkeletons', () => {
        componentRender(
            <ArticleList
                articles={articles}
                view={ArticleView.COMPACT}
                isLoading
                target="_blank"
            />,
        );

        expect(
            screen.getAllByTestId('articleListItemCompactSkeleton').length,
        ).toBe(12);
    });

    // Detailed
    test('with view detailed, ArticleListItemDetailed should be render', () => {
        componentRender(
            <ArticleList
                articles={articles}
                view={ArticleView.DETAILED}
                target="_blank"
            />,
        );

        expect(
            screen.getByTestId('articleListItemDetailed'),
        ).toBeInTheDocument();
    });

    test('with view detailed and isLoading, there should be 6 ArticleListItemDetailedSkeletons', () => {
        componentRender(
            <ArticleList
                articles={articles}
                view={ArticleView.DETAILED}
                isLoading
                target="_blank"
            />,
        );

        expect(
            screen.getAllByTestId('articleListItemDetailedSkeleton').length,
        ).toBe(6);
    });

    test('with user avatar, Avatar in ArticleListItemDetailed should be render', () => {
        componentRender(
            <ArticleList
                articles={articles}
                view={ArticleView.DETAILED}
                target="_blank"
            />,
        );

        expect(
            screen.getByTestId('articleListItemDetailedUserAvatar'),
        ).toBeInTheDocument();
    });

    test('without user avatar, Avatar in ArticleListItemDetailed should be not render', () => {
        const customArticles: ArticleI[] = [
            {
                ...articles[0],
                user: {
                    id: '1',
                    username: 'User1',
                },
            },
        ];

        componentRender(
            <ArticleList
                articles={customArticles}
                view={ArticleView.DETAILED}
                target="_blank"
            />,
        );

        expect(
            screen.queryByTestId('articleListItemDetailedUserAvatar'),
        ).toBeNull();
    });
});

/* eslint-disable max-len */
import { render, screen } from '@testing-library/react';
import { ArticleTextBlock } from './articleTextBlock';
import {
    ArticleBlockType,
    ArticleTextBlockI,
} from 'entities/article/model/types/article';

const blockWithoutTitle: ArticleTextBlockI = {
    id: '3',
    type: ArticleBlockType.TEXT,
    paragraphs: [
        'Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.',
        'Constructs a type consisting of all properties of Type set to required. The opposite of Partial.',
        'Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.',
    ],
};
const blockWithTitle: ArticleTextBlockI = {
    ...blockWithoutTitle,
    title: 'Title',
};

describe('ArticleDetails', () => {
    test('with block title, Text title should be render', () => {
        render(<ArticleTextBlock block={blockWithTitle} />);

        expect(screen.getByTestId('articleTextBlockTitle')).toBeInTheDocument();
    });

    test('without block title, Text title should be not render', () => {
        render(<ArticleTextBlock block={blockWithTitle} />);

        expect(screen.queryByTestId('articleTextBlockTitle')).toBeNull();
    });
});

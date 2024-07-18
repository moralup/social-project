/* eslint-disable max-len */
import { render, screen } from '@testing-library/react';
import { ArticleImageBlock } from './articleImageBlock';
import {
    ArticleBlockType,
    ArticleImageBlockI,
} from 'entities/article/model/types/article';

const blockWithoutTitle: ArticleImageBlockI = {
    id: '2',
    type: ArticleBlockType.IMAGE,
    src: 'https://www.some.image.png',
};

const blockWithTitle: ArticleImageBlockI = {
    ...blockWithoutTitle,
    title: 'Image title',
};

describe('ArticleDetails', () => {
    test('with block title, Text title should be render', () => {
        render(<ArticleImageBlock block={blockWithTitle} />);

        expect(
            screen.getByTestId('articleImageBlockTitle'),
        ).toBeInTheDocument();
    });

    test('without block title, Text title should be not render', () => {
        render(<ArticleImageBlock block={blockWithTitle} />);

        expect(screen.queryByTestId('articleImageBlockTitle')).toBeNull();
    });
});

import { screen } from '@testing-library/react';
import { CommentList } from './commentList';
import { componentRender } from '@/shared/lib/tests/componentRender';

describe('Component CommentList', () => {
    test('with invalid comments should render text "No comments"', () => {
        componentRender(<CommentList />);

        expect(screen.getByTestId('no-comments')).toBeInTheDocument();
    });

    test('with valid comments should render CommentCard', () => {
        componentRender(
            <CommentList
                comments={[
                    {
                        id: '1',
                        text: 'some comment',
                        user: { id: '1', username: 'user1' },
                    },
                    {
                        id: '2',
                        text: 'some comment2',
                        user: { id: '2', username: 'user2' },
                    },
                    {
                        id: '3',
                        text: 'some comment3',
                        user: { id: '3', username: 'user3' },
                    },
                ]}
            />,
        );

        expect(screen.getAllByTestId('commentCard').length).toBe(3);
    });
});

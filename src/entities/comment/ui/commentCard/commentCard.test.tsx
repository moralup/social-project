import { screen } from '@testing-library/react';
import { CommentCard } from './commentCard';
import { componentRender } from '@/shared/lib/tests/componentRender';

describe('Component CommentCard', () => {
    test('without avatar, tag img should do not render', () => {
        componentRender(
            <CommentCard
                comment={{
                    id: '1',
                    text: 'some comment',
                    user: { id: '1', username: 'user1' },
                }}
            />,
        );

        expect(screen.queryByTestId('avatar')).toBeNull();
    });

    test('with avatar, tag img should do render', async () => {
        componentRender(
            <CommentCard
                comment={{
                    id: '1',
                    text: 'some comment',
                    user: {
                        id: '1',
                        username: 'user1',
                        avatar: 'https://avatar',
                    },
                }}
            />,
        );
        expect(screen.getByTestId('avatar')).toBeInTheDocument();
    });

    test('with isLoading true, should render skeleton, and skeleton should have a true size', () => {
        componentRender(
            <CommentCard
                isLoading
                comment={{ id: 'f', text: '', user: { id: '', username: '' } }}
            />,
        );

        expect(screen.getByTestId('skeleton-wrapper')).toBeInTheDocument();

        expect(screen.getByTestId('skeleton-avatar')).toHaveStyle({
            width: '40px',
            height: '40px',
            borderRadius: '50%',
        });
        expect(screen.getByTestId('skeleton-user')).toHaveStyle({
            width: '80px',
            height: '30px',
        });
        expect(screen.getByTestId('skeleton-comment')).toHaveStyle({
            width: '90%',
            height: '25px',
        });
    });
});

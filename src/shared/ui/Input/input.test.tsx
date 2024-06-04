import { componentRender } from 'shared/lib/tests/componentRender';
import { screen } from '@testing-library/react';
import { Input, InputTheme } from './input';

describe('Input', () => {
    test('render', () => {
        componentRender(<Input />);
    });

    test('add theme', () => {
        componentRender(<Input theme={InputTheme.CLEAR} />);
        expect(screen.getByTestId('input')).toHaveClass('clear');
    });

    test('has caption', () => {
        componentRender(<Input caption="some text" />);
        expect(screen.getByTestId('caption')).toBeInTheDocument();
    });

    test('render without caption', () => {
        componentRender(<Input />);
        expect(screen.queryByTestId('caption')).toBeNull();
    });
});

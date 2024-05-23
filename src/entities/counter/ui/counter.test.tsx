import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { Counter } from './counter';

describe('Counter', () => {
    test('render', () => {
        componentRender(<Counter />);
        expect(screen.getByTestId('counter')).toBeInTheDocument();
    });

    test('initial state', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('title')).toHaveTextContent('value: 10');
    });

    test('increment', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        fireEvent.click(screen.getByTestId('btn-increment'));
        expect(screen.getByTestId('title')).toHaveTextContent('value: 11');
    });

    test('decrement', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        fireEvent.click(screen.getByTestId('btn-decrement'));
        expect(screen.getByTestId('title')).toHaveTextContent('value: 9');
    });
});

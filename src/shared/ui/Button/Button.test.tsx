/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByTestId('button')).not.toBeInTheDocument();
    });

    test('Test theme class', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByTestId('button')).toHaveClass('clear');
    });

    test('Test some class', () => {
        render(<Button className="some-class">Test</Button>);
        expect(screen.getByTestId('button')).toHaveClass('some-class');
    });
});

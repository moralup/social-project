<<<<<<< HEAD
/* eslint-disable i18next/no-literal-string */
=======
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
import { render, screen } from '@testing-library/react';

import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('Test render', () => {
<<<<<<< HEAD
        render(<Button>Test</Button>);
        expect(screen.getByTestId('button')).toBeInTheDocument();
    });

    test('Test theme class', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByTestId('button')).toHaveClass('clear');
    });

    test('Test some class', () => {
        render(<Button className="some-class">Test</Button>);
        expect(screen.getByTestId('button')).toHaveClass('some-class');
=======
        render(<Button>TEST</Button>);
        expect(screen.getByText(/test/i)).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText(/test/i)).toHaveClass('clear');
        screen.debug();
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
    });
});

import { render, screen } from '@testing-library/react';

import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText(/test/i)).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText(/test/i)).toHaveClass('clear');
        screen.debug();
    });
});

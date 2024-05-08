<<<<<<< HEAD
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Test render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        const sidebar = screen.getByTestId('sidebar');
        fireEvent.click(toggleBtn);
        expect(sidebar).toHaveClass('collapsed');
        fireEvent.click(toggleBtn);
        expect(sidebar).not.toHaveClass('collapsed');
=======
import { fireEvent, render, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe('Sidebar', () => {
    test('Test render', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle', () => {
        render(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        screen.debug();
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
    });
});

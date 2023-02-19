import { fireEvent, screen } from '@testing-library/react';
import renderWithTranslation from 'shared/libs/tests/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('test Sidebar to be correctly rendered', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test Sidebar to be correctly collapsed', () => {
        renderWithTranslation(<Sidebar />);
        const button = screen.getByTestId('toggle-sidebar');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(button);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});

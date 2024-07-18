/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';

import { ArticleEditPage } from './articleEditPage';

describe(ArticleEditPage, () => {
    test('Test render', () => {
        render(<ArticleEditPage />);
        expect(screen.getByTestId('articleEditPage')).toBeInTheDocument();
    });
});

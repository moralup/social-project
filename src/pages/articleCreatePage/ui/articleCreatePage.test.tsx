/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';

import { ArticleCreatePage } from './articleCreatePage';

describe(ArticleCreatePage, () => {
    test('Test render', () => {
        render(<ArticleCreatePage />);
        expect(screen.getByTestId('articleCreatePage')).toBeInTheDocument();
    });
});

import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

interface ComponentRenderOptions {
    route?: 'string';
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const componentRender = (component: ReactNode, options?: ComponentRenderOptions) => {
    const { initialState, route, asyncReducers } = options || {};

    return render(
        <StoreProvider
            asyncReducers={asyncReducers}
            initialState={initialState}
        >
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
};

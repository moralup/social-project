import { StoryFn } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

// prettier-ignore
export const storeDecorator = (
    state?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (Story: StoryFn) => (
    <StoreProvider initialState={state || {}} asyncReducers={asyncReducers}>
        <Story />
    </StoreProvider>
);

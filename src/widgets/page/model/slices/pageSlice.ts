import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageSchema } from '../types/pageSchema';

export const initialState: PageSchema = {
    scroll: {},
};

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { reducer: pageReducer } = pageSlice;
export const { setScrollPosition } = pageSlice.actions;

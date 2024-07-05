import { createSlice } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/AddCommentFormSchema';

export const initialState: AddCommentFormSchema = {
    text: '',
};

const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
    },
    // extraReducers: builder => {
    //     builder
    //         .addCase(someAsyncThunk.pending, state => {
    //         })
    //         .addCase(someAsyncThunk.fulfilled, (state, action) => {
    //         })
    //         .addCase(someAsyncThunk.rejected, (state, action) => {
    //         });
    // },
});

export const { reducer: addCommentFormReducer } = addCommentFormSlice;
export const { setText } = addCommentFormSlice.actions;

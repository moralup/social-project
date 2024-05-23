import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value++;
        },
        decrement: state => {
            state.value--;
        },
    },
});

export const { decrement, increment } = counterSlice.actions;
export const { reducer: counterReducer } = counterSlice;

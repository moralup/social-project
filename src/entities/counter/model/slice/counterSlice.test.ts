import { counterReducer, decrement, increment } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('CounterSlice', () => {
    test('test decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, decrement())).toEqual({ value: 9 });
    });

    test('test increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, increment())).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, increment())).toEqual({ value: 1 });
    });
});

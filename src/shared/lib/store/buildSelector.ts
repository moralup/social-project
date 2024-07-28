import { StateSchema } from '@/app/providers/StoreProvider';
import { useSelector } from 'react-redux';

type SelectorType<T> = (state: StateSchema) => T;
type ResultType<T> = [() => T, SelectorType<T>];

export function buildSelector<T>(selector: SelectorType<T>): ResultType<T> {
    const useSelectorHook = () => {
        return useSelector(selector);
    };

    return [useSelectorHook, selector];
}

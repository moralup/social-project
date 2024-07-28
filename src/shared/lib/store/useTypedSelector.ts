import { StateSchema } from '@/app/providers/StoreProvider';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<StateSchema> = useSelector;

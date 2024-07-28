import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/app/providers/StoreProvider/config/store';

export const useTypedDispatch = () => useDispatch<AppDispatch>();

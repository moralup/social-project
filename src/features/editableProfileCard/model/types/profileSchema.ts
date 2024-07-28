import type { ProfileI } from '@/shared/types/profile';
import { ValidateProfileError } from '../consts/consts';

export interface ProfileSchema {
    data?: ProfileI;
    form?: ProfileI;
    isLoading: boolean;
    readonly?: boolean;
    validationErrors?: ValidateProfileError[];
}

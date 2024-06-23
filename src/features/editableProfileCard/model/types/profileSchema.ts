import { ProfileI } from 'shared/types/profile';

export interface ProfileSchema {
    data?: ProfileI;
    form?: ProfileI;
    isLoading: boolean;
    error?: string;
    readonly?: boolean;
}

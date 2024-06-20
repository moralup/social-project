export enum CountryI {
    RUSSIA = 'Russia',
    POLAND = 'Poland',
    UKRAINE = 'Ukraine',
}

export interface ProfileI {
    firstName: string;
    lastName: string;
    age: number;
    country: CountryI;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: ProfileI;
    isLoading: boolean;
    error?: string;
    readonly?: boolean;
}

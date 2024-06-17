export enum CountryI {
    RUSSIA = 'Russia',
    POLAND = 'Poland',
    UKRAINE = 'Ukraine',
}

export interface Profile {
    firstName: string;
    lastName: string;
    age: number;
    country: CountryI;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly?: boolean;
}

import { ProfileI } from 'shared/types/profile';

export enum ValidateProfileError {
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_FIRST_NAME = 'INCORRECT_FIRST_NAME',
    INCORRECT_LAST_NAME = 'INCORRECT_LAST_NAME',
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_AVATAR_LINK = 'INCORRECT_AVATAR_LINK',
    NO_EMPTY = 'NO_EMPTY',
    SERVER_ERROR = 'SERVER_ERROR',
    NO_DATA = 'NO_DATA',
}

export const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_AGE]: 'некорректный возраст',
    [ValidateProfileError.INCORRECT_FIRST_NAME]: 'некорректное имя',
    [ValidateProfileError.INCORRECT_LAST_NAME]: 'некорректная фамилия',
    [ValidateProfileError.INCORRECT_COUNTRY]: 'некорректная страна',
    [ValidateProfileError.INCORRECT_CITY]: 'некорректный город',
    [ValidateProfileError.INCORRECT_USERNAME]: 'некорректный ник',
    [ValidateProfileError.INCORRECT_AVATAR_LINK]: 'некорректная ссылка на аватар',
    [ValidateProfileError.NO_EMPTY]: 'поле не может быть пустым',
    [ValidateProfileError.SERVER_ERROR]: 'серверная ошибка',
    [ValidateProfileError.NO_DATA]: 'данные не указаны',
};
export interface ProfileSchema {
    data?: ProfileI;
    form?: ProfileI;
    isLoading: boolean;
    readonly?: boolean;
    validationErrors?: ValidateProfileError[];
}

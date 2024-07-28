import { ProfileI } from '@/shared/types/profile';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData', () => {
    const mainProfile: ProfileI = {
        avatar: 'https://link.com',
        age: 15,
        city: 'Moscow',
        country: 'Russia',
        firstName: 'Ivan',
        lastName: 'Ivanov',
        username: 'vanya',
    };

    test('with empty arguments should return [NO_DATA]', () => {
        expect(validateProfileData()).toEqual([ValidateProfileError.NO_DATA]);
    });

    test('correct data should give an empty array', () => {
        expect(
            validateProfileData({
                ...mainProfile,
                avatar: 'http://link.com',
            }),
        ).toEqual([]);

        expect(
            validateProfileData({
                ...mainProfile,
                avatar: 'https://link.com',
            }),
        ).toEqual([]);
    });

    test('without firstName, lastName, username, city, age, country should return [NO_EMPTY]', () => {
        expect(
            validateProfileData({
                ...mainProfile,
                firstName: undefined,
            }),
        ).toEqual([ValidateProfileError.NO_EMPTY]);

        expect(
            validateProfileData({
                ...mainProfile,
                lastName: undefined,
            }),
        ).toEqual([ValidateProfileError.NO_EMPTY]);

        expect(
            validateProfileData({
                ...mainProfile,
                username: undefined,
            }),
        ).toEqual([ValidateProfileError.NO_EMPTY]);

        expect(
            validateProfileData({
                ...mainProfile,
                city: undefined,
            }),
        ).toEqual([ValidateProfileError.NO_EMPTY]);

        expect(
            validateProfileData({
                ...mainProfile,
                age: undefined,
            }),
        ).toEqual([ValidateProfileError.NO_EMPTY]);

        expect(
            validateProfileData({
                ...mainProfile,
                country: undefined,
            }),
        ).toEqual([ValidateProfileError.NO_EMPTY]);

        expect(validateProfileData({})).toEqual([
            ValidateProfileError.NO_EMPTY,
        ]);
    });

    test(`firstName containing numbers or in a non-Latin alphabet 
        should give an [INCORRECT_FIRST_NAME]`, () => {
        const expected = [ValidateProfileError.INCORRECT_FIRST_NAME];

        expect(
            validateProfileData({
                ...mainProfile,
                firstName: 'Ivan348',
            }),
        ).toEqual(expected);

        expect(
            validateProfileData({
                ...mainProfile,
                firstName: 'Иван',
            }),
        ).toEqual(expected);
    });

    test(`lastName containing numbers or in a non-Latin alphabet 
        should give an [INCORRECT_LAST_NAME]`, () => {
        const expected = [ValidateProfileError.INCORRECT_LAST_NAME];

        expect(
            validateProfileData({
                ...mainProfile,
                lastName: 'Ivanov348',
            }),
        ).toEqual(expected);

        expect(
            validateProfileData({
                ...mainProfile,
                lastName: 'Иванов',
            }),
        ).toEqual(expected);
    });

    test(`country containing numbers or in a non-Latin alphabet 
        should give an [INCORRECT_COUNTRY]`, () => {
        const expected = [ValidateProfileError.INCORRECT_COUNTRY];

        expect(
            validateProfileData({
                ...mainProfile,
                country: 'Russia348',
            }),
        ).toEqual(expected);

        expect(
            validateProfileData({
                ...mainProfile,
                country: 'Россия',
            }),
        ).toEqual(expected);
    });

    test(`city containing numbers or in a non-Latin alphabet 
        should give an [INCORRECT_CITY_NAME]`, () => {
        const expected = [ValidateProfileError.INCORRECT_CITY];

        expect(
            validateProfileData({
                ...mainProfile,
                city: 'Moscow348',
            }),
        ).toEqual(expected);

        expect(
            validateProfileData({
                ...mainProfile,
                city: 'Москва',
            }),
        ).toEqual(expected);
    });

    test('username in a non-Latin alphabet should give an [INCORRECT_USERNAME]', () => {
        const expected = [ValidateProfileError.INCORRECT_USERNAME];

        expect(
            validateProfileData({
                ...mainProfile,
                username: 'Ванек',
            }),
        ).toEqual(expected);
    });

    test('age less than 14 or more than 116 should give an [ValidateProfileError.INCORRECT_AGE]', () => {
        const expected = [ValidateProfileError.INCORRECT_AGE];

        expect(
            validateProfileData({
                ...mainProfile,
                age: 13,
            }),
        ).toEqual(expected);

        expect(
            validateProfileData({
                ...mainProfile,
                age: 117,
            }),
        ).toEqual(expected);
    });

    test('incorrect avatar link should give an [INCORRECT_AVATAR_LINK]', () => {
        const expected = [ValidateProfileError.INCORRECT_AVATAR_LINK];

        expect(
            validateProfileData({
                ...mainProfile,
                avatar: 'http//link.com',
            }),
        ).toEqual(expected);

        expect(
            validateProfileData({
                ...mainProfile,
                avatar: 'http:/link.com',
            }),
        ).toEqual(expected);

        expect(
            validateProfileData({
                ...mainProfile,
                avatar: '.http://link.com',
            }),
        ).toEqual(expected);
    });

    test(`with incorrect 
        avatar link,
        firstName,
        username,
        age
        
        should give an
        
        [INCORRECT_FIRST_NAME,
        INCORRECT_USERNAME,
        INCORRECT_AGE,
        INCORRECT_AVATAR_LINK]`, () => {
        const expected = [
            ValidateProfileError.INCORRECT_FIRST_NAME,
            ValidateProfileError.INCORRECT_USERNAME,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_AVATAR_LINK,
        ];

        expect(
            validateProfileData({
                ...mainProfile,
                avatar: '.http://link.com',
                firstName: 'Ivan337',
                username: 'Крутыш',
                age: 8,
            }),
        ).toEqual(expected);
    });
});

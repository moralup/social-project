/* eslint-disable operator-linebreak */
import { ProfileI } from '@/shared/types/profile';
import { ValidateProfileError } from '../../consts/consts';
import { MAX_AGE, MIN_AGE } from '@/shared/consts/age';

export const validateProfileData = (profile?: ProfileI) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        firstName,
        lastName,
        username,
        age,
        avatar,
        city,
        country, //
    } = profile;

    const errors = [];

    const latinOnlyExp = /^[a-zA-Z]+$/;
    const latinWithNumbersExp = /^[a-zA-Z0-9]+$/;
    const linkExp = /^https?:\/\//;
    const requiredInputs =
        firstName && //
        lastName &&
        username &&
        city &&
        age &&
        country;

    if (!requiredInputs) {
        errors.push(ValidateProfileError.NO_EMPTY);
        return errors;
    }

    if (!latinOnlyExp.test(firstName)) {
        errors.push(ValidateProfileError.INCORRECT_FIRST_NAME);
    }

    if (!latinOnlyExp.test(lastName)) {
        errors.push(ValidateProfileError.INCORRECT_LAST_NAME);
    }

    if (!latinOnlyExp.test(country)) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    if (!latinOnlyExp.test(city)) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }

    if (!latinWithNumbersExp.test(username)) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }

    if (age > MAX_AGE || age < MIN_AGE) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (avatar && !linkExp.test(avatar)) {
        errors.push(ValidateProfileError.INCORRECT_AVATAR_LINK);
    }

    return errors;
};

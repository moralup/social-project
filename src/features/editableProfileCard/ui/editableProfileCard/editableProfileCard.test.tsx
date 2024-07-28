/* eslint-disable max-len */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/editableProfileCardSlice';
import { componentRender } from '@/shared/lib/tests/componentRender';
import { titleCase } from '@/shared/lib/titleCase/titleCase';
import { MIN_AGE } from '@/shared/consts/age';

import { ValidateProfileError } from '../../model/consts/consts';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ProfileI } from '@/shared/types/profile';

import { EditableProfileCard } from './editableProfileCard';

jest.mock('shared/api/api');
const mockedAxios = jest.mocked($api, true);

const profileData: ProfileI = {
    id: '1',
    age: 18,
    firstName: 'Ivan',
    lastName: 'Ivanov',
    username: 'Krutoy876',
    city: 'Moscow',
    country: 'Russia',
    avatar: 'https://some.avatar.png',
};

const initialState: DeepPartial<StateSchema> = {
    user: {
        authData: {
            avatar: 'https://some.avatar.png',
            id: '1',
            username: 'Krutoy876',
        },
    },
    profile: {
        data: profileData,
        form: profileData,
        isLoading: false,
        readonly: true,
    },
};

const options = {
    initialState,
    asyncReducers: {
        profile: profileReducer,
    },
};

interface TestCaseI {
    inputId: string;
    inputValue: string;
    profileDataValue?: string;
    errorName: string;
    required?: boolean;
    isBeginWithUpperCase?: boolean;
}

const testCasesOfInputs: TestCaseI[] = [
    {
        errorName: ValidateProfileError.INCORRECT_FIRST_NAME,
        inputId: 'name.input',
        inputValue: 'Ivan123',
        profileDataValue: profileData.firstName,
        required: true,
        isBeginWithUpperCase: true,
    },
    {
        errorName: ValidateProfileError.INCORRECT_LAST_NAME,
        inputId: 'surname.input',
        inputValue: 'Ivanov123',
        profileDataValue: profileData.lastName,
        required: true,
        isBeginWithUpperCase: true,
    },
    {
        errorName: ValidateProfileError.INCORRECT_USERNAME,
        inputId: 'nickname.input',
        inputValue: 'никКириллицей',
        profileDataValue: profileData.username,
        required: true,
    },
    {
        errorName: ValidateProfileError.INCORRECT_AVATAR_LINK,
        inputId: 'avatar.input',
        inputValue: 'http//avatar',
    },
    {
        errorName: ValidateProfileError.INCORRECT_AGE,
        inputId: 'age.input',
        inputValue: String(MIN_AGE - 1),
        profileDataValue: String(profileData.age),
        required: true,
    },
    {
        errorName: ValidateProfileError.INCORRECT_CITY,
        inputId: 'city.input',
        inputValue: 'Moscow123',
        profileDataValue: profileData.city,
        required: true,
        isBeginWithUpperCase: true,
    },
    {
        errorName: ValidateProfileError.INCORRECT_COUNTRY,
        inputId: 'country.input',
        inputValue: 'Russia123',
        profileDataValue: profileData.country,
        required: true,
        isBeginWithUpperCase: true,
    },
];

describe.each(testCasesOfInputs)(
    'EditableProfileCard. Test inputs',
    ({
        errorName,
        inputId,
        inputValue,
        required,
        isBeginWithUpperCase,
        profileDataValue,
    }) => {
        beforeEach(async () => {
            componentRender(<EditableProfileCard />, options);

            await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

            await userEvent.clear(screen.getByTestId(inputId));
        });

        const expectError = async (error?: string) => {
            await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

            expect(
                screen.getByTestId(`EditableProfileCardError.${error}`),
            ).toBeInTheDocument();
        };

        test(`When the incorrect ${inputId} is saved, ${errorName} error block must be render`, async () => {
            await userEvent.type(screen.getByTestId(inputId), inputValue);

            expect(screen.getByTestId(inputId)).toHaveValue(inputValue);

            await expectError(errorName);
        });

        if (profileDataValue) {
            test(`when canceled, the ${inputId} must return to its previous form => ${profileDataValue}`, async () => {
                await userEvent.type(screen.getByTestId(inputId), inputValue);

                expect(screen.getByTestId(inputId)).toHaveValue(inputValue);

                await userEvent.click(screen.getByTestId('EditableProfileCard.CancelButton'));

                expect(screen.getByTestId(inputId)).toHaveValue(profileDataValue);
            });
        }

        if (isBeginWithUpperCase) {
            test(`when input text, ${inputId} must begin with upper case`, async () => {
                await userEvent.type(
                    screen.getByTestId(inputId),
                    inputValue.toLowerCase(),
                );

                expect(screen.getByTestId(inputId)).toHaveValue(titleCase(inputValue));
            });
        }

        if (required) {
            test(`${inputId} required, and cannot be empty`, async () => {
                expect(screen.getByTestId(inputId)).toHaveValue('');

                await expectError(ValidateProfileError.NO_EMPTY);
            });
        }
    },
);

describe('EditableProfileCard', () => {
    test('when clicking on the edit button it must be not render, save button and cancel button must be render', async () => {
        componentRender(<EditableProfileCard />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

        expect(screen.queryByTestId('EditableProfileCard.EditButton')).not.toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCard.SaveButton')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCard.CancelButton')).toBeInTheDocument();
    });

    test('When correct data is saved, it must be sent to server and input in the input', async () => {
        const correctFirstName = 'Alexey';
        const correctLastName = 'Eremin';
        const correctUsername = 'leXXXa357';
        const correctCity = 'Astana';
        const correctCountry = 'Kazakhstan';

        const profile: DeepPartial<ProfileI> = {
            firstName: correctFirstName,
            lastName: correctLastName,
            username: correctUsername,
            city: correctCity,
            country: correctCountry,
        };

        mockedAxios.put.mockResolvedValue({ data: profile });

        componentRender(<EditableProfileCard />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

        await userEvent.clear(screen.getByTestId('name.input'));
        await userEvent.clear(screen.getByTestId('surname.input'));
        await userEvent.clear(screen.getByTestId('nickname.input'));
        await userEvent.clear(screen.getByTestId('city.input'));
        await userEvent.clear(screen.getByTestId('country.input'));

        await userEvent.type(screen.getByTestId('name.input'), correctFirstName);
        await userEvent.type(screen.getByTestId('surname.input'), correctLastName);
        await userEvent.type(screen.getByTestId('nickname.input'), correctUsername);
        await userEvent.type(screen.getByTestId('city.input'), correctCity);
        await userEvent.type(screen.getByTestId('country.input'), correctCity);

        await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

        const nameInput = await screen.findByTestId('name.input');
        const surnameInput = await screen.findByTestId('surname.input');
        const nicknameInput = await screen.findByTestId('nickname.input');
        const cityInput = await screen.findByTestId('city.input');
        const countryInput = await screen.findByTestId('country.input');

        expect(nameInput).toHaveValue(correctFirstName);
        expect(surnameInput).toHaveValue(correctLastName);
        expect(nicknameInput).toHaveValue(correctUsername);
        expect(cityInput).toHaveValue(correctCity);
        expect(countryInput).toHaveValue(correctCountry);

        expect(mockedAxios.put).toHaveBeenCalled();
    });
});

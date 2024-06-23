import type { ProfileI } from 'shared/types/profile';
import type { ProfileSchema } from '../types/profileSchema';
import {
    setProfile,
    updateProfile,
    cancelEdit,
    setReadonly,
    profileReducer,
} from './editableProfileCardSlice';
// prettier-ignore

describe('editableProfileCardSlice', () => {
    test('setProfile', () => {
        const profileData: ProfileI = {
            age: 12,
            firstName: 'Oleg',
            lastName: 'Mongol',
            username: 'drinker',
        };

        expect(
            profileReducer(
                {} as ProfileSchema,
                setProfile(profileData),
            ),
        ).toEqual({
            data: profileData,
        });
    });

    test('updateProfile', () => {
        const oldProfile: DeepPartial<ProfileSchema> = {
            form: {
                age: 12,
                lastName: 'Mongol',
                username: 'drinker',
            },
        };

        const newProfile: DeepPartial<ProfileSchema> = {
            form: {
                age: 18,
                lastName: 'Mongol',
                username: 'dancer',
            },
        };

        expect(
            profileReducer(
                oldProfile as ProfileSchema,
                updateProfile({ age: 18, username: 'dancer' }),
            ),
        ).toEqual(newProfile);
    });

    test('cancelEdit', () => {
        const oldProfile: DeepPartial<ProfileSchema> = {
            data: {
                firstName: 'Oleg',
                lastName: 'Mongol',
                username: 'drinker',
            },
            form: {
                firstName: 'Oleg',
                username: 'no drinker',
            },
        };

        const newProfile: DeepPartial<ProfileSchema> = {
            data: {
                firstName: 'Oleg',
                lastName: 'Mongol',
                username: 'drinker',
            },
            form: {
                firstName: 'Oleg',
                lastName: 'Mongol',
                username: 'drinker',
            },
            readonly: true,
        };

        expect(
            profileReducer(
                oldProfile as ProfileSchema,
                cancelEdit(),
            ),
        ).toEqual(newProfile);
    });

    test('setReadonly', () => {
        expect(
            profileReducer(
                { readonly: true } as ProfileSchema,
                setReadonly(false),
            ),
        ).toEqual({ readonly: false });
    });
});

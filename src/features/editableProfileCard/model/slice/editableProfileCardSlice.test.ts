import type { ProfileI } from '@/shared/types/profile';
import type { ProfileSchema } from '../types/profileSchema';
import {
    setProfile,
    updateProfile,
    cancelEditForm,
    editForm,
    profileReducer,
} from './editableProfileCardSlice';
import { AnyAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { ValidateProfileError } from '../consts/consts';
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

    test('cancelEditForm', () => {
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
                cancelEditForm(),
            ),
        ).toEqual(newProfile);
    });

    test('editForm', () => {
        expect(
            profileReducer(
                { readonly: true } as ProfileSchema,
                editForm(),
            ),
        ).toEqual({ readonly: false });
    });

    test('fetchProfileData pending', () => {
        const action: AnyAction = {
            type: fetchProfileData.pending.type,
        };
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validationErrors: [],
        };

        expect(profileReducer(state as ProfileSchema, action)).toEqual({
            isLoading: true,
            validationErrors: undefined,
        });
    });

    test('fetchProfileData fulfilled', () => {
        const data = {
            age: 15,
            firstName: 'Ivan',
            lastName: 'Ivanov',
        };

        const action: AnyAction = {
            type: fetchProfileData.fulfilled.type,
            payload: data,
        };
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(state as ProfileSchema, action)).toEqual({
            isLoading: false,
            data,
            form: data,
        });
    });

    test('fetchProfileData rejected', () => {
        const validationErrors = [ValidateProfileError.NO_DATA];

        const action: AnyAction = {
            type: fetchProfileData.rejected.type,
            payload: validationErrors,
        };
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validationErrors: undefined,
        };

        expect(profileReducer(state as ProfileSchema, action)).toEqual({
            isLoading: false,
            validationErrors,
        });
    });
});

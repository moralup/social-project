import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch';

// !libs
import { MAX_AGE } from 'shared/consts/age';
import { titleCase } from 'shared/lib/titleCase/titleCase';
import { classNames } from 'shared/lib/classNames/classNames';

// !components
import { ProfileCard } from 'entities/profile';
import { Header } from '../header/header';
import { Loader } from 'shared/ui/Loader/Loader';

// !action-creators
import {
    updateProfile,
    cancelEditForm,
    editForm,
} from '../../model/slice/editableProfileCardSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

// !selectors
import { getProfileForm } from '../../model/selectors/getProfileForm';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading';
import { getProfileData } from '../../model/selectors/getProfileData';

import cls from './editableProfileCard.module.scss';
import { Errors } from '../errors/errors';

export const EditableProfileCard: FC = () => {
    const dispatch = useTypedDispatch();

    const { avatar: currentAvatar } = useSelector(getProfileData);
    const profileData = useSelector(getProfileForm);
    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getProfileIsLoading);

    const onEdit = () => {
        dispatch(editForm());
    };

    const onCancelEdit = () => {
        dispatch(cancelEditForm());
    };
    const onSave = () => {
        dispatch(updateProfileData());
    };

    const onChangeFirstName = useCallback(
        (value: string) => {
            dispatch(updateProfile({ firstName: titleCase(value) }));
        },
        [dispatch],
    );

    const onChangeLastName = useCallback(
        (value: string) => {
            dispatch(updateProfile({ lastName: titleCase(value) }));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(updateProfile({ username: value }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value: string) => {
            const valueNumber = Number(value);

            if (!isNaN(valueNumber) && valueNumber < MAX_AGE) {
                dispatch(updateProfile({ age: valueNumber }));
            }
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(updateProfile({ avatar: value }));
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (value: string) => {
            dispatch(updateProfile({ country: titleCase(value) }));
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value: string) => {
            dispatch(updateProfile({ city: titleCase(value) }));
        },
        [dispatch],
    );

    if (isLoading) {
        return (
            <div>
                <Loader />
            </div>
        );
    }

    return (
        <div className={classNames(cls.editableProfileCard, {}, [])}>
            <Errors />
            <Header
                readonly={readonly}
                onCancelEdit={onCancelEdit}
                onEdit={onEdit}
                onSave={onSave}
            />
            <ProfileCard
                data={profileData}
                currentAvatar={currentAvatar}
                readonly={readonly}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeCountry={onChangeCountry}
                onChangeLastName={onChangeLastName}
                onChangeUsername={onChangeUsername}
                onChangeFirstName={onChangeFirstName}
                onChangeAvatar={onChangeAvatar}
            />
        </div>
    );
};

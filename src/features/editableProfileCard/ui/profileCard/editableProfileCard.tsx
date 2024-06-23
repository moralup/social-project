import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch';

import { classNames } from 'shared/lib/classNames/classNames';

import { ProfileCard } from 'entities/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text } from 'shared/ui/Text';
import { Header } from '../header/header';

import { updateProfile, cancelEdit, setReadonly } from '../../model/slice/editableProfileCardSlice';

import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';

import cls from './editableProfileCard.module.scss';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

interface EditableProfileCardProps {
    className?: string;
}

export const EditableProfileCard: FC<EditableProfileCardProps> = ({ className }) => {
    const dispatch = useTypedDispatch();
    const profileData = useSelector(getProfileForm);
    const { avatar: currentAvatar } = useSelector(getProfileData);
    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    const onEdit = () => {
        dispatch(setReadonly(false));
    };
    const onCancelEdit = () => {
        dispatch(cancelEdit());
    };
    const onSave = () => {
        dispatch(updateProfileData());
    };
    const onChangeFirstName = useCallback(
        (value: string) => {
            dispatch(updateProfile({ firstName: value }));
        },
        [dispatch],
    );
    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(updateProfile({ avatar: value }));
        },
        [dispatch],
    );
    const onChangeLastName = useCallback(
        (value: string) => {
            dispatch(updateProfile({ lastName: value }));
        },
        [dispatch],
    );
    const onChangeAge = useCallback(
        (value: string) => {
            dispatch(updateProfile({ age: Number(value) }));
        },
        [dispatch],
    );
    const onChangeCountry = useCallback(
        (value: string) => {
            dispatch(updateProfile({ country: value }));
        },
        [dispatch],
    );
    const onChangeCity = useCallback(
        (value: string) => {
            dispatch(updateProfile({ city: value }));
        },
        [dispatch],
    );
    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(updateProfile({ username: value }));
        },
        [dispatch],
    );

    if (isLoading) {
        return (
            <div className="">
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className="">
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Text title="ERROR">some error</Text>
            </div>
        );
    }

    return (
        <div className={classNames(cls.editableProfileCard, {}, [className])}>
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

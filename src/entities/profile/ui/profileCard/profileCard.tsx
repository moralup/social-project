import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { Input, InputTheme } from 'shared/ui/Input/input';
import { Avatar, AvatarSize } from 'shared/ui/avatar/avatar';

import type { ProfileI } from 'shared/types/profile';
import cls from './profileCard.module.scss';

interface ProfileCardProps {
    data: ProfileI;
    readonly?: boolean;
    className?: string;
    currentAvatar?: string;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCountry?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
}

export const ProfileCard: FC<ProfileCardProps> = props => {
    const {
        data,
        className,
        currentAvatar,
        readonly,

        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCountry,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
    } = props;

    const {
        firstName,
        lastName,
        age,
        country,
        city,
        username,
        avatar,
        //
    } = data;

    const { t } = useTranslation('profile');

    const getTheme = (readonly: boolean | undefined) => {
        return readonly ? InputTheme.CLEAR : InputTheme.OUTLINE;
    };

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            {currentAvatar && (
                <div className={cls.avatarWrap}>
                    <Avatar
                        alt={t('аватар')}
                        src={currentAvatar}
                        size={AvatarSize.XL}
                    />
                    {!readonly && (
                        <Input
                            value={avatar}
                            onChange={onChangeAvatar}
                            readonly={false}
                            theme={InputTheme.OUTLINE}
                        />
                    )}
                </div>
            )}
            <Input
                caption={t('имя')}
                value={firstName}
                onChange={onChangeFirstName}
                readonly={readonly}
                theme={getTheme(readonly)}
            />
            <Input
                caption={t('фамилия')}
                value={lastName}
                onChange={onChangeLastName}
                readonly={readonly}
                theme={getTheme(readonly)}
            />
            <Input
                caption={t('ник')}
                value={username}
                onChange={onChangeUsername}
                readonly={readonly}
                theme={getTheme(readonly)}
            />
            <Input
                caption={t('возраст')}
                value={age ? String(age) : ''}
                onChange={onChangeAge}
                readonly={readonly}
                theme={getTheme(readonly)}
            />
            <Input
                caption={t('страна')}
                value={country}
                onChange={onChangeCountry}
                readonly={readonly}
                theme={getTheme(readonly)}
            />
            <Input
                caption={t('город')}
                value={city}
                onChange={onChangeCity}
                readonly={readonly}
                theme={getTheme(readonly)}
            />
        </div>
    );
};

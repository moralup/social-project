import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './avatar.module.scss';
import { AppImage } from '../appImage/appImage';
import { Skeleton } from '../skeleton';
import DefaultAvatarIcon from '../../assets/icons/default-avatar.svg';

export enum AvatarSize {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl',
}

export enum AvatarTheme {
    NORMAL = 'normal',
    BORDER = 'border',
}

export interface AvatarProps {
    alt: string;
    src?: string;
    className?: string;
    theme?: AvatarTheme;
    size?: AvatarSize;
    inverted?: boolean;
    'data-testid': string;
}

export const Avatar: FC<AvatarProps> = memo((props: AvatarProps) => {
    const {
        className,
        alt,
        src,
        theme = AvatarTheme.NORMAL,
        size = AvatarSize.M,
        inverted,

        ...otherProps
    } = props;

    const fallback = (
        <Skeleton
            data-testid={props['data-testid']}
            inverted={inverted}
            className={classNames(cls.avatar, {}, [className, cls[size]])}
        />
    );

    const errorFallback = (
        <DefaultAvatarIcon
            className={classNames(cls.defaultAvatar, {
                [cls.inverted]: inverted,
            })}
        />
    );

    return (
        <AppImage
            alt={alt}
            src={src ?? ''}
            className={classNames(cls.avatar, {}, [
                className,
                cls[theme],
                cls[size],
            ])}
            fallback={fallback}
            errorFallback={errorFallback}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
});

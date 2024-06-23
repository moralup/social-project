import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './avatar.module.scss';

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
}

export const Avatar: FC<AvatarProps> = memo((props: AvatarProps) => {
    const {
        className,
        alt,
        src,
        theme = AvatarTheme.NORMAL,
        size = AvatarSize.M,

        ...otherProps
    } = props;

    return (
        <img
            alt={alt}
            src={src}
            className={classNames(cls.avatar, {}, [className, cls[theme], cls[size]])}
            {...otherProps}
        />
    );
});

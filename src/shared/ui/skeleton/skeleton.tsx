import { CSSProperties, FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: number | string;
    height?: number | string;
    radius?: number;
    isCircle?: boolean;
    inverted?: boolean;
}

export const Skeleton: FC<SkeletonProps> = props => {
    const {
        className,
        width,
        height,
        radius,
        isCircle,
        inverted,
        ...otherProps
    } = props;

    const style: CSSProperties = {
        width: width || (isCircle && height) || undefined,
        height: height || (isCircle && width) || undefined,
        borderRadius: radius || (isCircle && '50%') || 0,
    };

    const mods = { [cls.inverted]: inverted };

    return (
        <div
            style={style}
            className={classNames(cls.skeleton, mods, [className])}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
};

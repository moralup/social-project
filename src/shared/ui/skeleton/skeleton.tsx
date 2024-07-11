import { CSSProperties, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: number | string;
    height?: number | string;

    // Sets the border-radius
    radius?: number;

    // Sets the border-radius 50%, but not priory than radius
    isCircle?: boolean;
}

export const Skeleton: FC<SkeletonProps> = props => {
    const {
        className,
        width,
        height,
        radius,
        isCircle,

        ...otherProps
    } = props;

    const style: CSSProperties = {
        width: width || (isCircle && height) || undefined,
        height: height || (isCircle && width) || undefined,
        borderRadius: radius || (isCircle && '50%') || 0,
    };

    return (
        <div
            style={style}
            className={classNames(cls.skeleton, {}, [className])}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
};

import { CSSProperties, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: number | string;
    height?: number | string;
    radius?: number;
    isCircle?: boolean;
}

export const Skeleton: FC<SkeletonProps> = props => {
    const { className, width, height, radius, isCircle } = props;

    const style: CSSProperties = {
        width: width || height,
        height: height || width,
        borderRadius: radius || (isCircle && '50%') || 0,
    };

    return (
        <div
            style={style}
            className={classNames(cls.skeleton, {}, [className])}
        />
    );
};

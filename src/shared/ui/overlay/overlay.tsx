import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay: FC<OverlayProps> = ({ className, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={classNames(cls.overlay, {}, [className])}
        />
    );
};

import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './profile.module.scss';

interface ProfileProps {
    className?: string;
}

export const Profile: FC<ProfileProps> = ({ className }) => {
    return (
        <div className={classNames(cls.profile, {}, [className])}>
            <div />
        </div>
    );
};

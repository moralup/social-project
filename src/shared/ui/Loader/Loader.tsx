<<<<<<< HEAD
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
=======
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from './Loader.module.scss';

interface LoaderProps {
  className?: string
}

export const Loader:FC<LoaderProps> = ({ className }) => (
    <div className={classNames(cl['lds-ellipsis'], {}, [className])}>
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
        <div />
        <div />
        <div />
        <div />
    </div>
);

import { FC } from 'react';

import { Loader } from 'shared/ui/Loader/Loader';

import { classNames } from 'shared/lib/classNames/classNames';

import cl from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames(cl.PageLoader, {}, [className])}>
        <Loader />
    </div>
);

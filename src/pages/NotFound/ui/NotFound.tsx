import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cl from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFound: FC<NotFoundProps> = ({ className }) => {
    const { t } = useTranslation('notFound');
    return (
        <div className={classNames(cl.NotFound, {}, [className])}>
            {t('ничего не найдено')}
        </div>
    );
};

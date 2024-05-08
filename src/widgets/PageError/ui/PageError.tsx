import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ThemeButton } from 'shared/ui/Button/Button';

import { classNames } from 'shared/lib/classNames/classNames';

import cl from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = (): void => {
        window.location.reload();
    };

    return (
        <div className={classNames(cl.PageError, {}, [className])}>
            <p>{t('Извините, произошла ошибка')}</p>
            <Button
                theme={ThemeButton.CLEAR}
                type="button"
                onClick={reloadPage}
            >
                {t('обновить страницу')}
            </Button>
        </div>
    );
};

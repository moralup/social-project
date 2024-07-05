import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text';

import cls from './header.module.scss';
import { useSelector } from 'react-redux';
import { getIsCanEdit } from 'features/editableProfileCard/model/selectors/getIsCanEdit';

interface HeaderProps {
    className?: string;
    readonly: boolean;
    onCancelEdit: () => void;
    onEdit: () => void;
    onSave: () => void;
}

export const Header: FC<HeaderProps> = props => {
    const {
        className,
        readonly,

        onCancelEdit,
        onEdit,
        onSave,
    } = props;

    const { t } = useTranslation('profile');
    const isCanEdit = useSelector(getIsCanEdit);

    return (
        <div className={classNames(cls.header, {}, [className])}>
            <Text title={t('Профиль')} />
            {isCanEdit && (
                <div className={cls.btns}>
                    {readonly ? (
                        <Button
                            onClick={onEdit}
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t('редактировать')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                onClick={onSave}
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t('сохранить')}
                            </Button>
                            <Button
                                onClick={onCancelEdit}
                                theme={ButtonTheme.OUTLINE_WARN}
                            >
                                {t('отменить')}
                            </Button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

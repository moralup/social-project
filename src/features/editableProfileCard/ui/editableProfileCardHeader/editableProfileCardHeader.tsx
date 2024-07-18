import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text';

import cls from './editableProfileCardHeader.module.scss';
import { useSelector } from 'react-redux';
import { getIsCanEdit } from 'features/editableProfileCard/model/selectors/getIsCanEdit';

interface HeaderProps {
    className?: string;
    readonly: boolean;
    onCancelEdit: () => void;
    onEdit: () => void;
    onSave: () => void;
}

export const EditableProfileCardHeader: FC<HeaderProps> = props => {
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
                            data-testid="EditableProfileCard.EditButton"
                        >
                            {t('редактировать')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                onClick={onSave}
                                theme={ButtonTheme.OUTLINE}
                                data-testid="EditableProfileCard.SaveButton"
                            >
                                {t('сохранить')}
                            </Button>
                            <Button
                                onClick={onCancelEdit}
                                theme={ButtonTheme.OUTLINE_WARN}
                                data-testid="EditableProfileCard.CancelButton"
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

import { FC, useCallback, FormEvent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './addCommentForm.module.scss';
import { Input, InputTheme } from 'shared/ui/Input/input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { getText } from '../model/selectors/getText';
import { useSelector } from 'react-redux';
import {
    addCommentFormReducer,
    setText,
} from '../model/slice/addCommentFormSlice';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/dynamicModuleLoader';

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

interface AddCommentFormProps {
    className?: string;
    onSendComment: () => void;
}

export const AddCommentForm: FC<AddCommentFormProps> = props => {
    const { className, onSendComment } = props;

    const { t } = useTranslation();
    const inputText = useSelector(getText);
    const dispatch = useTypedDispatch();

    const onEnterComment = useCallback(
        (text: string) => {
            dispatch(setText(text));
        },
        [dispatch],
    );

    const onSendCommentHandler = (e: FormEvent) => {
        e.preventDefault();
        onSendComment();
        dispatch(setText(''));
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <form
                onSubmit={onSendCommentHandler}
                className={classNames(cls.addCommentForm, {}, [className])}
            >
                <Input
                    className={cls.input}
                    value={inputText}
                    onChange={onEnterComment}
                    theme={InputTheme.CLEAR}
                    placeholder={t('Введите текст комментария')}
                />
                <Button
                    className={cls.sendBtn}
                    theme={ButtonTheme.CLEAR}
                    onClick={onSendCommentHandler}
                >
                    {t('Отправить')}
                </Button>
            </form>
        </DynamicModuleLoader>
    );
};

import { FC, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { Input, InputTheme } from 'shared/ui/Input/input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './commentForm.module.scss';

interface CommentFormProps {
    className?: string;
    inputValue: string;
    onChangeInput: (value: string) => void;
    onSendComment: () => void;
    isLoading: boolean;
}

export const CommentForm: FC<CommentFormProps> = props => {
    const { t } = useTranslation();
    const {
        //
        className,
        onSendComment,
        inputValue,
        onChangeInput,
        isLoading,
    } = props;

    const onSendCommentHandler = (e: FormEvent) => {
        e.preventDefault();
        onSendComment();
    };

    return (
        <form
            onSubmit={onSendCommentHandler}
            className={classNames(cls.commentForm, {}, [className])}
        >
            <Input
                className={cls.input}
                value={inputValue}
                onChange={onChangeInput}
                theme={InputTheme.CLEAR}
                placeholder={t('Введите текст комментария')}
            />
            <Button
                className={cls.sendBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onSendCommentHandler}
                disabled={isLoading}
            >
                {t('Отправить')}
            </Button>
        </form>
    );
};
